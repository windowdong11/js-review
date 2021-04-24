console.log("[destructor]")

function add(a, b) {return a + b}
console.log(add(...[1, 2]))
const [n1, n2,  /** jump */, variable, ...whatelse] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(n1, n2, "jump 3", variable, whatelse)

const userObj = {
    name: 'jk',
    age: '12',
    email: "wwww@gogo.com"
}

const {name: userName, age, def = "default", noexist} = userObj
console.log(userName, age, def, noexist)

// Spread
console.log([1, 2, 3])
console.log(...[1, 2, 3])
console.log({
    ...userObj,
    happy: true
})