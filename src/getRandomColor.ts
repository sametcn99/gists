// Function to generate a random color in hexadecimal format
export const getRandomColor = () => {
  // Hexadecimal characters used for color representation
  const letters = "0123456789ABCDEF";

  // Initialize the color variable with the '#' symbol
  let color = "#";

  // Loop to generate a random 6-digit hexadecimal color code
  for (let i = 0; i < 6; i++) {
    // Append a random hexadecimal character to the color code
    color += letters[Math.floor(Math.random() * 16)];
  }

  // Return the randomly generated color code
  return color;
};
