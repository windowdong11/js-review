// 호이스팅
// 선언부가 유효범위 최상단으로 끌어올려지는 현상
console.log("[hoisting]")
console.log(add(1, 2))

function add(a, b){
    return a + b
}