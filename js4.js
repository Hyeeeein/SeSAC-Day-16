
/* let product1 = {item:'book',price:15000,}
let product2 = {item:'game',price:25000,}
let product3 = {item:'cd',price:2000,} */

// 가격 * 0.4 로 text 출력

function Product(item, price) {
    this.item = item;
    this.price = price;

    /* this.tex=function(){
        return (this.price*0.1)
    } */
}

Product.prototype.tex=function(){
    return (this.price*0.1)
}

const product1 = new Product('book',15000);
const product2 = new Product('game',25000);
const product3 = new Product('cd',2000);

console.log(product1.tex())

// 인스턴스 오브젝트가 값을 직접 소유하게 만들고 싶으면 constructor 에 만든다.
// prototype 만 가지고 있고 참조해서 사용하고 싶으면 prototype 에 만들어서 상속시킨다. 
// 인스턴스는 prototype 을 가지고 있지 않음 constructor(생성자 함수)만 prototype을 갖는다.


console.log(product3.__proto__);
// 인스턴스에서 부모의 프로토타입을 확인하는 속성이 있음