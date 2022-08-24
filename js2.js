function Human(name,age) {
    this.name = name ;
    this.age = age ;

    /* age : 20,
    name : '김철수',
    address : 'seoul' */
} 

const human1 = new Human('김영희',30)
const human2 = new Human('김철수',25)

console.log(human1)

function Circle(radius){
    this.radius = radius;
    this.getDiameter = function(){
        return this.radius * 2
    }
}
const circle1 = new Circle(5)
const circle2 = new Circle(10)

console.log(circle2.getDiameter())
console.log(circle1)

// 이름, 국, 영, 수, 평균
// kim, lee, park

function Score(name, kor, eng, math) {
    this.name = name;
    this.korNum = kor;
    this.engNum = eng;
    this.mathNum = math;
}
Score.prototype.getAvg = function(){
    return (this.korNum+this.engNum+this.mathNum)/3
}

const kim = new Score('KIM',50,60,70)
const kee = new Score('LEE',30,100,50)
const park = new Score('PARK',90,50,60)
console.log(park)
console.log(park.getAvg())

console.log(Score.prototype) //object
