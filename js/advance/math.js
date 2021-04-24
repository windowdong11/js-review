import { min } from "lodash"

console.log('[math]')
const pi = 3.141592
console.log(pi)
console.log(pi.toFixed(2))
console.log(typeof pi.toFixed(2))

console.log(parseFloat(pi.toFixed(2)))
console.log(typeof parseFloat(pi.toFixed(2)))
console.log(parseInt(pi.toFixed(2)))
console.log(typeof parseInt(pi.toFixed(2)))

console.log(Math.abs(-1023))
console.log(Math.min(-10, 100))
console.log(Math.max(-10, 100))
console.log(Math.ceil(10.50))
console.log(Math.floor(10.50))
console.log(Math.round(10.50))
console.log(Math.random())