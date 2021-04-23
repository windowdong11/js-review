console.log("[arrowfunction]")
const add = (a, b) => a + b
console.log(add(1 + 2))
const consoleAdd = (a, b) => {
    console.log(`${a} + ${b} = ${a + b}`)
    return a + b
}
consoleAdd(3, 4)
const double = a => a * 2
console.log(double(2))