console.log('[object]')

const userAge = {
    name: 'lamp',
    age: 1024
}

const userEmail = {
    name: 'lamp',
    email: 'wow@gmail.com'
}

let result = Object.assign({}, userAge, userEmail)
console.log(`result`)
console.log(result)
console.log(`userAge`)
console.log(userAge)
console.log(`userEmail`)
console.log(userEmail)

result = Object.assign(userAge, userEmail)
console.log(`result`)
console.log(result)
console.log(`userAge`)
console.log(userAge)
console.log(`userEmail`)
console.log(userEmail)
console.log(result === userAge)
console.log({a: 1} === {b: 1})
// => Object.assign은 target를 반환

console.log(Object.keys(result))