const fs = require("fs");

//
fs.readdirSync("./dirToRemove").forEach((fileName) => {
  // synchronously unlink or remove every file
  fs.unlinkSync(`./dirToRemove/${fileName}`);
});

// Remove an empty directory
fs.rmdir("./dirToRemove", (err) => {
  if (err) {
    throw err;
  }
  console.log("./dirToRemove directory removed");
});
