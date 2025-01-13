export default (json) => {
  // Function to capitalize the first letter of each word
  function capitalizeWords(str) {
    return str.toLowerCase().replace(/(?:^|\s)\S/g, function (a) {
      return a.toUpperCase();
    });
  }
  // Function to process the JSON data and return an HTML list of formatted names
  try {
    // Parse the JSON data if it's a string, otherwise use it as is
    const data = typeof json === "string" ? JSON.parse(json) : json;

    // Process each person's data and create list items
    const listItems = data
      .map((person) => {
        const { nombre, apellido, apellido2 } = person;

        // Capitalize each part of the name
        const formattedNombre = capitalizeWords(nombre);
        const formattedApellido = capitalizeWords(apellido);

        // Check if apellido2 exists and is not null or empty
        const formattedApellido2 =
          apellido2 && apellido2.trim() !== ""
            ? " " + capitalizeWords(apellido2)
            : "";

        // Concatenate the parts and wrap in an li tag
        return `<li>${formattedNombre} ${formattedApellido}${formattedApellido2}</li>`;
      })
      .join("\n");

    // Wrap the list items in a ul tag
    return `<ul>\n${listItems}\n</ul>`;
  } catch (error) {
    console.error("Error processing JSON data:", error);
    return `<div>Error processing JSON data: ${error} <div/>`;
  }
};
