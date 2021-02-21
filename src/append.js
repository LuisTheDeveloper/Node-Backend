const colorData = require("./assets/colors.json");
const fs = require("fs");

// Loop through the array using forEach and then we send a callback function to the forEach function
// and the c is going to refer to each of these colors so this forEach is actually going to loop through
// each color and it's going to set c to a different color object every time we iterate through the loop
// and append this colors to our node file.
// appendFile will create the file if it does not exist and append data to existent file.
colorData.colorList.forEach((c) => {
  fs.appendFile(
    "./storage-files/colors.md",
    `${c.color}: ${c.hex} \n`,
    (err) => {
      if (err) {
        throw err;
      }
    }
  );
});

fs.renameSync("./assets/colors.json", "./assets/colorData.json");

fs.rename("./assets/notes.md", "./storage-files/notes.md", (err) => {
  if (err) {
    throw err;
  }
});

setTimeout(() => {
  fs.unlinkSync("./assets/test1.txt");
}, 4000);
