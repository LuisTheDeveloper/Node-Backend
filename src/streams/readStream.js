const fs = require("fs");

const readStream = fs.createReadStream("../assets/text.txt", "UTF-8");

let fileTxt = "";

// Reading files with streams causes your application to use less memory
// because instead of reading everything all at once and loading it into a buffer,
// you're reading files bit by bit and chunk by chunk
// On to process all stream chunks
readStream.on("data", (data) => {
  console.log(`I read ${data.length - 1} characters of text`);
  fileTxt += data;
});

console.log("type something...");

// Readable stream, we read the data by listening to data events
// process.stdin.on("data", (data) => {
//   console.log(`I read ${data.length - 1} characters of text`);
//   process.exit();
// });

readStream.once("data", (data) => {
  console.log(data);
});

readStream.on("end", () => {
  console.log("finished reading");
  console.log(`In total I read ${fileTxt.length - 1} characters of text`);
});
