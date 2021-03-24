const allinone = require('./allinone')
// import as a whole

console.log("import successfully")
console.log(allinone.name)
function getMail(todayIsWorkday, getMailWithin24hours) 
{
    console.log("start")
    if (todayIsWorkday) {    
    if (!getMailWithin24hours){
        allinone.grabKeys()
        allinone.openMyMailbox()
        allinone.dootherjob()
        
    } else {console.log("Delay 24 hours")}
    } else (console.log("Delay 2 days"))
}



getMail(true, false)
