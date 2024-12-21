import ffmetadata from "ffmetadata";
import { readdirSync, readFileSync } from "fs";
import { getLyrics } from "genius-lyrics-api";
import { parseBuffer } from "music-metadata";
import ora from "ora";
import readline from "readline";

/**
 * Retrieves an array of file names representing the FLAC files in the specified directory.
 * Only files with the extensions ".flac" or ".mp3" will be included in the result.
 *
 * @param directory - The directory path to search for FLAC files.
 * @returns An array of file names representing the FLAC files found in the directory.
 */
function getFlacFiles(directory) {
  try {
    const files = readdirSync(directory).filter(
      (file) => file.endsWith(".flac") || file.endsWith(".mp3"),
    );
    return files;
  } catch (error) {
    console.error("Error reading directory:", error);
    return [];
  }
}

/**
 * Prompts the user for input and returns the input as a string.
 *
 * @param query - The prompt message to display to the user.
 * @returns A promise that resolves to the user's input.
 */
function prompt(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) =>
    rl.question(query, (ans) => {
      rl.close();
      resolve(ans);
    }),
  );
}

/**
 * Main function that processes FLAC files, retrieves lyrics, and writes them to the audio metadata.
 * @returns {Promise<void>} A promise that resolves when all the processing is complete.
 */
async function main() {
  let apiKey = null;
  let isValidAPIKey = false;

  while (!isValidAPIKey) {
    apiKey = await prompt("Please enter your Genius API key:");
    if (!apiKey) {
      console.error("API key is required.");
      continue;
    }

    try {
      const validateAPIKey = await getLyrics({
        apiKey,
        title: "test",
        artist: "test",
      });
      if (validateAPIKey) {
        isValidAPIKey = true;
      } else {
        console.error("Invalid API key. Please try again.");
      }
    } catch (error) {
      console.error("Error validating API key:", error);
    }
  }

  const directory = (await prompt("Please enter the directory path:")) || "";
  if (!directory) {
    console.error("Directory path is required.");
    return;
  }
  const spinner = ora("Writing Lyrics...").start();

  const files = getFlacFiles(directory);

  for (const file of files) {
    try {
      const fileBlob = readFileSync(`${directory}/${file}`);
      const metadata = await parseBuffer(fileBlob);
      const title = metadata.common?.title;
      const artist = metadata.common?.artist;

      if (!title || !artist) {
        console.log(
          `Skipping ${file} due to missing title or artist metadata.`,
        );
        continue;
      }

      const lyrics = await getLyrics({ apiKey, title, artist });
      if (lyrics) {
        metadata.common.lyrics = [];
        metadata.common.lyrics.push(lyrics);
        ffmetadata.write(
          `${directory}/${file}`,
          metadata.common,
          function (err) {
            if (err) {
              if (err.message.includes("Permission denied")) {
                console.error(
                  "Error writing metadata: Permission denied. Please check file permissions.",
                );
              } else {
                console.error("Error writing metadata:", err);
              }
            } else {
              console.log("Data written");
            }
          },
        );
      } else {
        spinner.fail("No lyrics found for " + file);
      }
    } catch (error) {
      if (error.message.includes("Permission denied")) {
        console.error(``);
        spinner.fail(
          "Error processing file ${file}: Permission denied. Please check file permissions.",
        );
      } else {
        spinner.fail("Error processing file ${file}", error);
      }
    }
  }
  spinner.succeed("Lyrics added to " + files.length + " files");
}

// Call the main function
main().catch((error) => {
  if (error.message.includes("Permission denied")) {
    console.error(
      "An error occurred: Permission denied. Please check file permissions.",
    );
  } else {
    console.error("An error occurred:", error);
  }
});
