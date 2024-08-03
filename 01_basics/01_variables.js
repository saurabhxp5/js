const accountId = 13718
let accountEmail = "saurabh@gmail.com"
var accountPassword = "3888"
accountcity = "jharkhand"


// accountId = 2 // not allowed as it is const defined 

accountEmail = "daaknak.com"
accountPassword = " 36286"
accountcity = "bihar"  

/*
prefer not to use var because of issue in 
block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountcity])