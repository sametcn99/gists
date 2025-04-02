# Audio Lyrics Writer

## Overview

This Node.js utility script helps music enthusiasts automatically add lyrics to their audio files. It processes a directory of audio files (.mp3, .m4a, .wav) and matches each with a corresponding text file containing lyrics. The script uses the NodeID3 library to embed the lyrics directly into the audio file's metadata, preserving them when the file is played on compatible media players. This automation tool is particularly useful for maintaining large music libraries where manually adding lyrics would be time-consuming.

```javascript
const fs = require("fs");
const path = require("path");
const NodeID3 = require("node-id3");

/**
 * Writes lyrics to audio files from a corresponding .txt file
 * @param {string} audioDir - Directory containing audio files
 * @param {string} lyricsDir - Directory containing lyrics text files
 */
function writeLyricsToAudioFiles(audioDir, lyricsDir) {
  // Read all files in the audio directory
  fs.readdir(audioDir, (err, files) => {
    if (err) {
      console.error("Error reading audio directory:", err);
      return;
    }

    // Filter for audio files
    const audioFiles = files.filter((file) =>
      [".mp3", ".m4a", ".wav"].includes(path.extname(file).toLowerCase()),
    );

    audioFiles.forEach((audioFile) => {
      const baseName = path.basename(audioFile, path.extname(audioFile));
      const lyricsFile = path.join(lyricsDir, `${baseName}.txt`);

      // Check if corresponding lyrics file exists
      if (fs.existsSync(lyricsFile)) {
        try {
          // Read lyrics from text file
          const lyrics = fs.readFileSync(lyricsFile, "utf8");
          const audioPath = path.join(audioDir, audioFile);

          // Create tags object with lyrics
          const tags = {
            lyrics: lyrics,
          };

          // Write tags to audio file
          NodeID3.write(tags, audioPath);
          console.log(`Successfully wrote lyrics to ${audioFile}`);
        } catch (error) {
          console.error(`Error processing ${audioFile}:`, error);
        }
      } else {
        console.log(`No lyrics file found for ${audioFile}`);
      }
    });
  });
}

// Example usage
const audioDirectory = "./audio";
const lyricsDirectory = "./lyrics";
writeLyricsToAudioFiles(audioDirectory, lyricsDirectory);
```
