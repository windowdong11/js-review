console.log('[class]')
// (리터럴 방식) 객체
const user1 = {
    name: 'plane',
    age: 29,
    getNameAge: function() { // 이런 방식으로 각 객체별로 직접 함수 선언 시 함수를 공유하지 않아 메모리 효율이 떨어짐
        return `${this.name}'s age is ${this.age}`
    },
    normal: function() {
        return `${this.name}`
    },
    arrow: () => {
        return `${this.name}`
    }
}
// [], "" 방식으로 직접 값을 나타내고 이 값을 변수에 값을 할당하는 것들을 모두 리터럴 방식이라 함
console.log(user1)
console.log(`user1 normal : ${user1.normal()}`)
console.log(`user1 arrow : ${user1.arrow()}`)
// ! Arrow function의 경우 this의 범위가 달라서 발생하는 문제
/*
* 일반 함수의 this는 호출 위치에서 정의된다.
* -> user1.normal() => 여기서 user1이 this
* 화살표 함수의 this는 선언된 함수 범위에서 정의된다.
* 화살표 함수가 존재하는 영역에 함수로 씌워져 있지 않으면 undefined
*/
const user2 = {
    name: 'pick',
    age: 20,
    getNameAge: function() { // 이런 방식으로 각 객체별로 직접 함수 선언 시 함수를 공유하지 않아 메모리 효율이 떨어짐
        return `${this.name}'s age is ${this.age}`
    },
    normal: user1.normal,
    arrow: user1.arrow,
    timeout: function() {
        //* 함수 호출 시 this가 정의되도록 함
        //* user2.timeout(), this -> user2
        setTimeout(() => {
            //* this를 화살표 함수를 통해 setTimeout밖의 함수영역의 this로 정의
            console.log(`[class] user2.timeout : ${this.name}`);
        }, 1000);
    }
}
console.log(user2)
console.log(`user2 normal : ${user2.normal()}`)
console.log(`user2 arrow : ${user2.arrow()}`)
user2.timeout()


// 생성자 함수를 이용한 방식
function User(name, age){
    this.name = name
    this.age = age
}

User.prototype.getNameAge = function(){
    return `${this.name}'s age is ${this.age}`
}
const user3 = User('jam', 22)
console.log(user3)