// console.log(z);
// console.log(E);
// console.log(B);
// console.log(A);

function sayMyName(){
    console.log("z");
    console.log("E");
    console.log("B");
    console.log("A");
 
}

// sayMyName()


// function addTwoNumbers (number1, number2){ //parameter()

//     console.log(number1 + number2);
    
// }
// addTwoNumbers( 3, 4)
// addTwoNumbers( 2, "5")
// addTwoNumbers (2, "a")
// addTwoNumbers(3, null) // refrence with(arguments)


function addTwoNumbers (number1, number2){

    // let result = number1 + number2
    // console.log("zeba");
    // return result
//    console.log("zeba");
   return number1 + number2

}

const result = addTwoNumbers(3,5)

// console.log("Result:", result);


function loginUserMessage(username = "sam"){
    // if(username === undefined){
    if(!username){
        console.log("please enter a username");
        return
        
    }
    return `${username} just logged in`

}
// console.log(loginUserMessage("zeba"));

console.log(loginUserMessage("zeba"));
