console.log("[string]")

const str = '  this is string  '
console.log(str)
console.log(str.indexOf('si'))
console.log(str.indexOf('is'))
console.log(str.slice(0, 4))
console.log(str.replace('this', 'that'))
console.log(str.match(/.+(?=is)/)) // 정규표현식
console.log(str.trim())