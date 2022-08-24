/* 이전 js 파일에서는 
 1. 생성자 함수를 사용해서 같은 오브젝트를 찍어내는 것을 만들어봄
 2. prototype 을 이용해서 상속을 받아 값을 참조
 */

 // ES6 클래스

class User {
    constructor(name,age){
        this.name = name;
        this.age = age;
        /* this.hi = function(){
            console.log('이름은'+this.name+'나이는'+this.age)
        } */
    }
    hi(){
        console.log('이름은'+this.name+'나이는'+this.age)
    }
}

const user1 = new User('김길동',10)
const user2 = new User('이순희',15)

console.log(User.prototype)
console.log(user1)

// people 1 {name:'새싹'} hello('반갑습니다') welcome('방문해주셔서 감사합니다.')
class People {
    constructor(name){
        this.name = name;
    }
    hello(){
        console.log(`'${this.name}'님 반갑습니다.`)
    }
    welcome(){
        console.log(`'${this.name}'님 방문해주셔서 감사합니다.`)
    }
}
const people1 = new People('새싹');
console.log(people1.hello())
console.log(people1.welcome())
console.log(people1) // Object.getPrototypeOf(people1) -> people1 부모의 프로토타입이 뭐가 있는지 전부 확인 가능
console.log(Object.getPrototypeOf(people1))