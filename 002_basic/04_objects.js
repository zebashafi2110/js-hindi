// singleton object
//  const tinderUser = new object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Alll"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser ={
    email : "some@gmail.com",
    fullname:{
        firstname : "zeba",
        lastname : "shafi"
    }
}

// console.log(regularUser.fullname.lastname);


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}

//  const obj3 = {obj1, obj2}
//  const obj3 = Object.assign({}, obj1, obj2,obj4)
//  console.log(obj3);
 
//  const obj3 = {...obj1, ...obj2}
//  console.log(obj3);
 
// user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));






const course ={
    coursename : "js in hindi",
    price: "999",
    cousreInstructor : "hitesh"
}

// cousre.cousreInstructor

const {cousreInstructor : instructor} = course

// console.log(cousreInstructor);
console.log(instructor);



