let age = 18;

if (age >= 18) {
    alert("Permitted to attend alone.");
  } else if (age >= 15) {
    alert("You can see the movie with an adult.");
  } else if (age >= 11) {
    alert("Strongly urged to not see this movie but permitted with an adult.");
  } else {
    alert("Not permitted.");
  }

// Not permitted if under the age of 10
// Permitted with parent if under the age of 15
// Permitted with anyone over 18 if under the age of 18
// Permitted to attend alone if 18 or older.