// This function takes a string as input and converts Turkish characters to their English equivalents.
export default function TextRegex(text: string) {
  let convertedString = text
    .replace(/ğ/g, "g")
    .replace(/Ğ/g, "G")
    .replace(/ş/g, "s")
    .replace(/Ş/g, "S")
    .replace(/ı/g, "i")
    .replace(/İ/g, "I")
    .replace(/ü/g, "u")
    .replace(/Ü/g, "U")
    .replace(/ö/g, "o")
    .replace(/Ö/g, "O")
    .replace(/ç/g, "c")
    .replace(/Ç/g, "C");

  // Replace characters that are not letters, numbers, or hyphens with a hyphen
  // Replace spaces with hyphens
  // Replace consecutive hyphens with a single hyphen
  convertedString = convertedString
    .replace(/[^a-zA-Z0-9-]/g, "-")
    .replace(/ /g, "-")
    .replace(/-+/g, "-");

  //Return the converted string
  return convertedString;
}
