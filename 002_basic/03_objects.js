//  singleton
// object.create this is called constructor method.....

// objects literals
const mySym = Symbol("key1")

const JsUser = {
    name: "zeba",
    
    age: 24,
    location: "Delhi",
    email: "zebashafi@google.com",
    [mySym] : "myKey1", // here i used [] breket cus of i want refrence of symbol 
    isLoggedIn: false,
    lastLoginDays: ["Monday","Satuerday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]);

JsUser.email = "zebashafi@chatgpt.com"
// Object.freeze(JsUser)
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello JS user");
    
}


JsUser.greetingTwo = function(){
    console.log(`hello JS user,${this.name}`);
    
}

console.log(JsUser.greeting());

console.log(JsUser.greetingTwo());

// object literal*****************