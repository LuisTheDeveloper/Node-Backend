const cp = require("child_process");

const questionApp = cp.spawn("node", ["../questions2.js"]);

questionApp.stdin.write("Luis Fonseca \n");
questionApp.stdin.write("UK \n");
questionApp.stdin.write("Cool stuff \n");

questionApp.stdout.on("data", (data) => {
  console.log(`from the question app: ${data}`);
});

questionApp.on("close", () => {
  console.log("questionApp exited");
});
