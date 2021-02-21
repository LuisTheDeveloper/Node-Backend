const path = require("path")
const {inc, dec, getCount } = require("./myModule")
/*
console.log(__dirname)
console.log(__filename)
*/

console.log(`The file name is ${path.basename(__filename)}`)

console.log(process.pid)
console.log(process.versions.node)

console.log(process.argv)

const [, , firstName, lastName] = process.argv

console.log(`Your name is ${firstName} ${lastName}`)

const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) +1
    return process.argv[indexAfterFlag]
}

const greeting = grab("--greeting")
const user = grab("--user")

console.log(`${greeting} ${user}`)
