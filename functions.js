// console.log("Hello world");

// // creating a function
// function getName(name){
//     console.log(name);
// } 
// getName("dele")

// function checkHeight(name,height){
//     return height =>"4ft" && name + "is close to the ground" 

// }

// console.log(checkHeight("lekan","5ft"))

// const multiplier =(number) =>{
//     for (let i=0; i<12; i++){
//         console.log(number+"*"+i+"="+(number*i))
       
//         // for embedded for anything that is not a string
//         console.log(`${number} * ${y}=${number *y}`)
//     }

// }

// function multiplication(afunction){
//     let x = 2
//     afunction(x)
    
// }
// multiplication(multiplier)


// //they are called annoymous function
// const drinkWater = function(){
//     console.log("drink water")
// }
// const drinkWater2 = ()=> {
//     console.log("drink water 2")
// }
 

// doArithmetic((element) => {
//     for (let i=0; i<12; i++){
//         i>=element ? console.log(`${element}/ ${i} = ${i / element}`): console.log(i)
//     }
// })

// const cookFood = function (){
//     return (food) => {
//         return food
//     }
// }

// const returnFunction = (afunction) =>{
//     return afunction;

// }

// const yetAnotherFunction = returnFunction(() => console.log("Ekaabo"))

// // yetAnotherFunction()

// const toggleLight = (event,callback) => {
//     switch(event){
//         case "walkedIn":
//             callback("Switch On")
//             break;
//         case "walkedIn":
//             callback("Switch off")
//             break;
//         default:
//             console.log("Lights off")
//             break;
//     }

// }

// toggleLight("walkedIn",(data) => console.log(`lights are ${data}`))
// toggleLight("walkedOut",(data) => console.log(`lights are ${data}`))
// toggleLight("walkedOnWater",(data) => console.log(`light are ${data}`))


// function saylti(){
//     for(let i = 0; i <12;i++){
//         console.log(i)
//     }
// }
// saylti()

let userName = "Tolu"

function changeName(name){
    name = "Balikis"
}
changeName(userName)
console.log(userName)

function movement(person){
    console.log(`when $ {person.name} runs ${person.isWig ? "her wig falls" : "breeze blows her hair"}`)
}

function animation(defineCharacterMovement){
    let character ={
        name: "adeola",
        isWig: true,
        gender: "female",
    }
    defineCharacterMovement(character)
}
animation(movement)


let persons=["fola","adeola","ruth","increase","father upah","lotachi"]

persons.map((data)=> console.log(data)) 



let person = {
    userName:"jerry",
    gender: "male",
    school : "uniag"
}
for (key in person){
    console.log(person[key])
}
console.log(Object.keys(person))
console.log(object.values(person))