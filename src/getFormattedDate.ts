/**
 * Converts a given date string to a formatted date string.
 *
 * @param {string} dateString - The input date string to be formatted.
 * @returns {string} - The formatted date string.
 */
export default function getFormattedDate(dateString: string): string {
  // Step 1: Create a new Date object from the input date string.
  const date = new Date(dateString);

  // Step 2: Define options for the date formatter.
  // - The dateStyle "long" provides a full, descriptive date representation.
  const formatterOptions = { dateStyle: "long" };

  // Step 3: Create a new Intl.DateTimeFormat object for formatting the date.
  // - The "en-US" locale is used for United States English formatting.
  // - The formatter is configured with the options defined in Step 2.
  const formatter = new Intl.DateTimeFormat("en-US", formatterOptions);

  // Step 4: Format the date using the defined formatter.
  // - The format method of the formatter is called with the date object as an argument.
  // - The result is a string representing the formatted date.
  const formattedDate = formatter.format(date);

  // Step 5: Return the formatted date string.
  // - The formatted date is now ready to be used or displayed.
  return formattedDate;
}
