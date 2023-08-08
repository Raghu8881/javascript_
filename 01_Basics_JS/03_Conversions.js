let age=25
console.log(typeof age)//number

let age1="33"
console.log(typeof(age1))//string 

//conversion of the age1 value of string into a NUMBER
let valueInNumber=Number(age1)
console.log(typeof valueInNumber)//this gives you number
console.log(valueInNumber)



//what if 

let age1New="33abc"
console.log(typeof(age1New))//string 

//conversion of the age1 value of string into a NUMBER
let valueInNumberNew=Number(age1New)
console.log(typeof valueInNumberNew)//this gives you number
console.log(valueInNumberNew)//gives us NaN

//what if we give null

let age1New1= null //this gives us 0 when we actually try to print these
console.log(typeof(age1New1))//string 

//conversion of the age1 value of string into a NUMBER
let valueInNumberNew1=Number(age1New1)
console.log(typeof valueInNumberNew1)//this gives you number
console.log(valueInNumberNew1)//gives us NaN

//"88" can be converted into a number
//"88abc" can't be converted into a number so give us Nan
//true will be given as 1 as an o/p similarly false will be given as 0 as an o/p



let switchOn=1
console.log(typeof switchOn)
let booleanSwitchOn=Boolean(switchOn)
console.log(booleanSwitchOn)//gives us true
console.log(typeof booleanSwitchOn)



//if we keep a variable as an empty string it gives us false
let isFalse=""
let convertItToBool=Boolean(isFalse)
console.log(convertItToBool)//gives us false as an o/p

let isTrue="Raghu"
let convertItToBoolNew=Boolean(isTrue)
console.log(convertItToBoolNew)//gives us true as an o/p


// 1 => true; 0 => false
// "" => false
// "Raghu" => true

let name1=88
let convertedToString=String(88)
console.log(convertedToString)//gives us 88 only but
console.log(typeof convertedToString)//shows us string and we reconfirmed it once