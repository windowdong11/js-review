import { extend } from "lodash"

console.log("[es6 class]")

const james = {
    name: 'james',
    getName() { // getName : function() 축약형
        return `${this.name}`
    }
}
console.log(james)
console.log(james.getName())

class ES6User {
    constructor(name, age){ // 생성자 함수 정의
        this.name = name
        this.age = age
    }
    getName() {
        return this.name
    }
}

// c++이나 파이썬 등이랑 좀 다른게 객체를 생성하려면, 항상 new 키워드를 사용해야 함
const esJack = new ES6User('jack', 18)
console.log(esJack)
console.log(esJack.getName())

// 상속, inheritance
class ES6Account extends ES6User {
    constructor(name, age, money) {
        super(name, age) // ES6User의 생성자 호출
        this.balance = money
    }
    deposit(money){
        this.balance += money
    }
    withdraw(money){
        if(this.balance >= money)
            this.balance -= money
    }
    getBalance(){
        return this.balance
    }
}

const esJill = new ES6Account('jill', 20, 4096)
console.log(esJill)
console.log(esJill.getBalance())
esJill.deposit(1000)
console.log(esJill.getBalance())
esJill.withdraw(1000)
console.log(esJill.getBalance())