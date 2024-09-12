const accountId = 12345
let accountEmail = 'zebashafi@gmail.com'
var accountPassword ="211010"
accountCity = "Siwan"
let accountState;

console.log(accountId);

accountEmail ="zb@gmail.com"
accountPassword = "203040"
accountCity = "Delhi"

/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);