const accountIdNumber=588 //not modifiable as we used const here
//lets check whether we can try to change the const value
// accountIdNumber=581      //accountIdNumber=581 ^ TypeError: Assignment to constant variable.
console.log(accountIdNumber) //accountIdNumber=581 ^ TypeError: Assignment to constant variable.

let accountEmailId="learningjavascript@gmail.com"
var passwordForAccount="987654321"
let accountPlace="Bengaluru"

console.table([accountIdNumber,accountEmailId,passwordForAccount,accountPlace]) //this gives the all the variables with table structure

