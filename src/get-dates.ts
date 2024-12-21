// Importing the getSortedPostsData function from the specified module
import { getSortedPostsData } from "@/app/lib/posts";

// Default function that retrieves and processes data to get dates, counts, and date ranges
export default function GetDates() {
  // Get the sorted post data using the imported function
  const data = getSortedPostsData();

  // Object to store the count of posts for each month
  const monthCount: { [key: string]: number } = {};

  // Arrays to store formatted strings and date ranges
  const OutputString: string[] = [];
  const OutputDateStart: Date[] = [];
  const OutputDateEnd: Date[] = [];

  // Extracting date strings from the post data
  const datesFromData = data.map((post) => post.date);

  // Counting posts for each month
  datesFromData.map((datestring) => {
    // Convert date string to a Date object
    const date = new Date(datestring);

    // Extract year and month from the date object
    const year = date.getFullYear();
    const month = date.getMonth();

    // Create a key in the format "YYYY-MM" for counting posts in that month
    const key = `${year}-${month}`;

    // Increment the count for the corresponding month or initialize it to 1
    if (key in monthCount) {
      monthCount[key]++;
    } else {
      monthCount[key] = 1;
    }
  });

  // Creating output arrays based on the counted data
  for (const key in monthCount) {
    // Extract year and month from the key
    const [year, month] = key.split("-");

    // Get the full month name
    const monthName = new Date(
      parseInt(year),
      parseInt(month),
      1,
    ).toLocaleString("en-US", { month: "long" });

    // Calculate the start and end dates of the month
    const startDate = new Date(parseInt(year), parseInt(month), 1);
    const endDate = new Date(parseInt(year), parseInt(month) + 1, 0);

    // Format output strings and populate arrays
    OutputString.push(`${monthName} ${year} (${monthCount[key]})`);
    OutputDateStart.push(startDate);
    OutputDateEnd.push(endDate);
  }

  // Return the final result as an object
  return { OutputString, OutputDateStart, OutputDateEnd };
}
