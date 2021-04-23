import _ from 'lodash'

console.log("test")
console.log(_.camelCase('test'))

// typeof는 완전한 타입을 나타내지 못함
// 따라서 getType라는 함수 사용
console.log(typeof [])
function getType(data){
    return Object.prototype.toString.call(data).slice(8, -1)
}
console.log(getType([]))