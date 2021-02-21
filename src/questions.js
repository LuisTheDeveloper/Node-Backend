const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your preferred programming language?"
];

const ask = (i=0) => {
    process.stdout.write(`\n\n\n ${questions[i]}`)
    process.stdout.write(` > `)
};

// Ask the first question, i=0.
ask();

const answers = [];
// Listening for events, in this case for data events
// Is running as an asynchronous application because is listening for input data
// Notice the callback function that will be triggered to push the answer to the array.
process.stdin.on('data', data => {
    answers.push(data.toString().trim())

    if(answers.length < questions.length) {
        ask(answers.length)
    } else {
        process.exit()
    }
})

process.on('exit', () => {
    const [name, activity, lang] = answers;
    console.log(`
    
    Thank you for your answers.
    Go ${activity} ${name} you can write ${lang} code next!
    `)
})