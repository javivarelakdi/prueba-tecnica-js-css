export default (json) => {
  try {
    // Parse the JSON data if it's a string, otherwise use it as is
    const data = typeof json === "string" ? JSON.parse(json) : json;

    // Check if the data is an array and not empty
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error("Input must be a non-empty array");
    }

    // Sum up all the ages
    const totalAge = data.reduce((sum, person) => {
      // Check if edad is a number
      if (typeof person.edad !== "number" || isNaN(person.edad)) {
        throw new Error('All "edad" values must be valid numbers');
      }
      return sum + person.edad;
    }, 0);

    // Calculate the mean
    const meanAge = totalAge / data.length;

    // Round to two decimal places
    return Math.round(meanAge * 100) / 100;
  } catch (error) {
    console.error("Error calculating age mean:", error.message);
    return null;
  }
};
