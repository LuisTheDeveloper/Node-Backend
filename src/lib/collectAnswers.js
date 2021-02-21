const readline = require("readline");
const { EventEmitter } = require("events")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Implement a optional callback function
module.exports = (questions, done = f => f) => {
    const answers = [];
    const [question1] = questions;
    const emitter = new EventEmitter();

    const questionAnswered = answer => {
        // Every time the user answer a question we raise an event.
        emitter.emit("answer", answer)
        answers.push(answer)
        if(answers.length < questions.length) {
            rl.question(questions[answers.length], questionAnswered)
        } else {
            emitter.emit("complete", answers)
            done(answers)
        }
    };

    rl.question(question1, questionAnswered);

    return emitter;
};
