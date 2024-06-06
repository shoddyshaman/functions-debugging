// console.log('Hello World')

let jonSnowHealth = 100

//create a function to see if Jon is alive or not
function isJonAlive(){
    if(jonSnowHealth > 0){
        console.log(`Jon is alive`)
    } else {
        console.log(`RIP Jon Snow`)
    }
}


//create a function that we can use to attack Jon
function surpriseAttack(attack){
    jonSnowHealth -= attack
    isJonAlive()
}

//dothraki
surpriseAttack(20)

//Lannister guards
surpriseAttack(10)

//red-lady
surpriseAttack(75)

//create a function called greeting that allows two people to greet each other - `${p1} says hello to ${p2}`
function greeting(person1,person2){
    console.log(`${person1} says howdie to ${person2}`)
}

greeting('ned stark','sanza stark')

//create a function called toCelsius takes an argument called fahrenheit, that converts fahrenheit to celsius : (5/9) * (fahrenheit - 32)
function toCelsius(fahrenheit){
    let temp =  (5/9) * (fahrenheit - 32)
    console.log(jonSnowHealth)
    return temp
    // return  (5/9) * (fahrenheit - 32)
}

let celsiusTemp = toCelsius(100,50)
console.log(celsiusTemp)