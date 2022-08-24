const parent = {
    name : 'kim',
    age : 50
}

/* parent 의 내용을 그대로 받는 오브젝트 생성
    1. 생성자 함수로 만든다. constructor 로 만든다.
    2. Object.create() -> es5 때 만들어짐
*/

const child = Object.create(parent);
console.log(child) // {} -> __proto__ 처럼 내 부모의 프로토타입에 넣어줘라고 했으니 나는 비어 있고 값은 존재
console.log(child.name) // kim
console.log(child.age) // 50

const item={title:'TEE', price:5000}
const itemChild = Object.create(item);
itemChild.price = 7000; // price 변경, 나부터 price 탐색하고 prototype 으로 감, 값을 부여해주니까 console.log(itemChild) 하면 price:7000 이라고 값이 나옴
console.log(itemChild.price) // prototype 에서 꺼내옴
console.log(itemChild)

const itemChildChild = Object.create(itemChild)
console.log(itemChildChild.price)

/* ES6 : class
    1. 
*/

