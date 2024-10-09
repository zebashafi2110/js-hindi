// var c = 300
let a = 300   //globel scope


if(true){     // local scope
    let a = 10
    const b = 20
    // console.log("INNER:", a)
}

// console.log(a);
// console.log(b);
// console.log(c);

//************** NASTED SCOPE */

function one(){
    const username = "zeba"

    function two(){
        const website = "youtube"
        // console.log(username);
        
    }
    // console.log(website);

    two()
    
}

one()

if(true){
    const username = "zeba"
    if(username === "zeba"){
        const website = "youtube"
        // console.log(username +website);
        
    }

    // console.log(website);
}

// console.log(username);


// ++++++++++++++ Interesting +++++++++++++


function addone(num){
    return num + 1
}

console.log(addone(5))

const addTwo = function(num){
    return num + 2
}

addTwo(5)