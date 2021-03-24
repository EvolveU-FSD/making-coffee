const {grabKeys, openMyMailbox, dootherjob, getmaymails, closemymailbox, end} = require('./allfunctionseparate')

function getMail(todayIsWorkday, getMailWithin24hours) 
{
    console.log("start")
    if (todayIsWorkday) {    
    if (!getMailWithin24hours){
        grabKeys()
        openMyMailbox()
        dootherjob()
        
    } else {console.log("Delay 24 hours")}
    } else (console.log("Delay 2 days"))
}



getMail(true, false)
