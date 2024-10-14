const user = {
    username : "zeba",
    price : 999,

    welcomeMessage: function(){
        // console.log(`${this.username} , welcome to website`);
        console.log(this);
        
  

    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){   //this not work in function
//     let username = "zeba"
//     console.log(this);
    
// }


// const chai = function (){
//     let username = "zeba"
//     console.log(this.username);
    
// }

// const chai = () => {
//     let username = "zeba"
//     console.log(this.username);
    
// }

// chai()

//  const addTwo = (num1, num2) =>{
//     return num1 + num2
//  }

 //const addTwo = (num1, num2) => num1 + num2 //implicite method
  
//const addTwo = (num1, num2) => (num1 + num2)

//if i used {} braces then we should to used return keyword 
//when i used () parenthesis we nor used to return key word

const addTwo = (num1, num2) => ({username: "zeba"})
 console.log(addTwo(3, 4));
 