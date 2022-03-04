// console.log("Hello world");

// // creating a function
// function getName(name){
//     console.log(name);
// } 
// getName("dele")

function checkHeight(name,height){
    return height =>"4ft" && name + "is close to the ground" 

}

console.log(checkHeight("lekan","5ft"))

const multiplier =(number) =>{
    for (let i=0; i<12; i++){
        console.log(number+"*"+i+"="+(number*i))
       
        // for embedded for anything that is not a string
        console.log(`${number} * ${y}=${number *y}`)
    }

}

function multiplication(afunction){
    let x = 2
    afunction(x)
    
}
multiplication(multiplier)


//they are called annoymous function
const drinkWater = function(){
    console.log("drink water")
}
const drinkWater2 = ()=> {
    console.log("drink water 2")
}
 

doArithmetic((element) => {
    for (let i=0; i<12; i++){
        i>=element ? console.log(`${element}/ ${i} = ${i / element}`): console.log(i)
    }
})