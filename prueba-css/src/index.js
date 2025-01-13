const arrayTest = [1, 2, 3, 3, 2, 1, 4];

// Update the test data display
document.getElementById("array-data").textContent = arrayTest.join(", ");

// Function to find the unique element
function dubbed(arr) {
  return arr.find((num) => arr.filter((n) => n === num).length === 1);
}

// You can see solution in the console
console.log("Unique element:", dubbed(arrayTest));
