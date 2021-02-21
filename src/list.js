const fs = require("fs");

// Because readdirSync is a synchronous function, JS will stop here until this function complets
const files = fs.readdirSync("./assets");

// readdir is an ansynchronous function that will read the files within the directory and they
// will be passed to a callback function we supply as the second argument.
// The first variable of this callback function is any errors that have been thrown.
// The second variable of this callback function are the files themselves:
fs.readdir("./assets", (err, files) => {
  if (err) {
    throw err;
  }

  console.log("complete");
  console.log(files);
});

console.log("started reading files");

/* Blocking code / synchronous function
const text = fs.readFileSync("./assets/text.txt", "utf8")
console.log(text)
*/

// Reading text file:
fs.readFile("./assets/text.txt", "UTF-8", (err, text) => {
  console.log("file contents read");
  //console.log(text);
});

// Reading a binary file (image)
fs.readFile("./assets/CodingSkills.png", (err, img) => {
  if (err) {
    console.log(`An error has ocurred: ${err.message}`);
    process.exit();
  }

  console.log("file contents read");
  console.log(img);
});

const md = `

# This is a new file

Writing text to a file with fs.writeFile

`;

fs.writeFile("./assets/notes.md", md.trim(), (err) => {
  if (err) {
    console.log(`An error has ocurred: ${err.message}`);
    process.exit();
  }
  console.log("File Saved");
});

if (fs.existsSync("storage-files")) {
  console.log("directory already exists");
} else {
  fs.mkdir("storage-files", (err) => {
    if (err) {
      throw err;
    }
    console.log("directory created");
  });
}
