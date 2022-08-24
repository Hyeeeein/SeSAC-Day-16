const cat = {
    name : 'momo',
    gender : 'male',
    age : 5,
    family : '러시안 블루',
    sayHello : function(){
        console.log('안녕하세요'+this.name+'입니다.')
    }
}
console.log(cat.name) 
console.log(cat['family'])
cat.sayHello();

// 20, 김철수, seoul
const human = {
    age : 20,
    name : '김철수',
    address : 'seoul'
}
console.log(human.name);
human.gender = 'male' // human[gander] = 'male';
console.log(human)
