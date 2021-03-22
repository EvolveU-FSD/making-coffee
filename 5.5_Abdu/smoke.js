function goOutSide() { 
    console.log(' go outside'); 
} 

function lightItUp() { 
    console.log(' light it up'); 
} 

function inhaleSmoke() { 
    console.log(' inhale'); 
} 

function exhaleSmoke() { 
    console.log(' exhail'); 
} 

function smoke(doIhaveSmokes, isThereAlighter) { 
    console.log('start'); 
    console.log(' decision - Do i have smokes?', doIhaveSmokes); 
    if (!doIhaveSmokes) { 
        console.log('go to the smokes cabinet'); 
        console.log('grab a new pack'); 
    } 
    goOutSide()
    console.log('decison - Do i have a lighter?', isThereAlighter); 
    if (!isThereAlighter) { 
        console.log(' go to the misc Vase'); 
        console.log(' rumage around for a lighter'); 
        console.log(' test if lighter works'); 
        console.log(' take a working lighter'); 
    } 
    lightItUp()
    inhaleSmoke()
    exhaleSmoke()
    console.log('end'); 
}

console.log('smoking');
smoke(false, false); 