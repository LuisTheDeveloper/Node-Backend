// The EventEmitter give us a way to raise custom events that we can wire listeners 
// or handlers to using on function.

const events = require("events");

// EventEmitter constructor that will create a new instance. 
// we can use to raise and handle custom events.
const emitter = new events.EventEmitter();

emitter.on("customEvent", (message, user) => {
    console.log(`${user}: ${message}`)

})

emitter.emit("customEvent", "Hello World", "Computer");
emitter.emit("customEvent", "Cool stuff", "Luis");

process.stdin.on("data", data => {
    const input = data.toString().trim();

    if(input === "exit") {
        emitter.emit("customEvent", "Goodbye", "process")
        process.exit()
    };

    emitter.emit("customEvent", input, "terminal");
})