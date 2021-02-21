const path = require("path");
const util = require("util");
const readline = require("readline")
const { getHeapStatistics } = require("v8");

const dirTest = path.join(__dirname, "test1", "test12")
console.log(dirTest)

console.log(getHeapStatistics())

// collect information using readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("How do you use Node?", answer => {
    console.log(`Your answer: ${answer}`)
});
