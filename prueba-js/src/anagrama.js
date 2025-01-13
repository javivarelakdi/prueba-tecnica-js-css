export default (word1, word2) => {
  // Function to normilize removing non-alphabetica characters and accents an convertin to lowerCase
  function normalizeWord(word) {
    return word
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Remove accents
      .replace(/[^a-z]/g, ""); // non-alphabetic
  }

  const cleanWord1 = normalizeWord(word1);
  const cleanWord2 = normalizeWord(word2);

  // Check if the cleaned words have the same length
  if (cleanWord1.length !== cleanWord2.length) {
    return false;
  }

  // Sort the characters of both words and compare them
  const sortedWord1 = cleanWord1.split("").sort().join("");
  const sortedWord2 = cleanWord2.split("").sort().join("");

  return sortedWord1 === sortedWord2;
};
