// Immediately Invoked Function Expression (IIFE)
// function execute fast and golobal scope se problm hoti h usse hatane k liye iife ka use kiya

(function chai(){  // name IIFE
    console.log(`DB CONNECTED`);
    
})();  //if we write two iife we use semecole (;)

// (function aurcode(){
//     console.log(`DB CONNECTED TWO`);
    
// })()


(  (name) => {  //unnamed iife
    console.log(`DB CONNECTED TWO${name}`);
    
})("zeba")
