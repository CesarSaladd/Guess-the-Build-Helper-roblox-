// Example wordlist (you can expand this!)
const wordlist = [
  "water",
  "house",
  "computer",
  "dragon",
  "roller coaster"
];

function solvePuzzle(pattern, words) {
  const regexPattern = "^" + pattern
    .replace(/_/g, ".")   // underscores = any character
    .replace(/ /g, "\\s") + "$"; // keep spaces
  const regex = new RegExp(regexPattern, "i");
  return words.filter(word => regex.test(word));
}
