let count = 0;
let hour=0;
let min=0;
let isCounting = false;
let currDate= new Date();

let hours=currDate.getHours();
let minutes = currDate.getMinutes();
count = currDate.getSeconds();
console.log( hours," ",minutes," ",count)
// let counterInterval;

function resync(){
    console.log("ReSync successfull");
    let currDate2= new Date();
    hours=currDate2.getHours();  
    minutes = currDate2.getMinutes();
    count = currDate2.getSeconds();
    // isCounting=false;
}

async function counter() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            count++;
            resolve(count);
        }, 1000);
    });
}

async function startCounter() {
    console.log("started");
    isCounting = true;
    while (isCounting ) {
        let ans= await counter();
        if (ans>59){
            minutes+=1;
            count=0
        }
        if (minutes>59){
            hours+=1;
            minutes=0
        }
        if (!isCounting) break;
        const hh = String(hours-12).padStart(2, '0');
        const mm = String(minutes).padStart(2, '0');
        const ss = String(ans).padStart(2, '0');
        document.getElementById('second').textContent = ss;
        document.getElementById('minute').textContent = mm;
        document.getElementById('hour').textContent = hh;
        console.log("count = ",ans);
    }
    // if (count===100)console.log('Counter stopped.');
}

function stopCounter() {
    
    isCounting = false;
    console.log("force stopped");
}
document.getElementById('resync').addEventListener('click', function() {
    // if (isCounting) stopCounter();
    isCounting = false;
    
    resync();
    // isCounting = false;
    if (!isCounting) startCounter();
    document.getElementById('second').textContent = count;
    
    
    
});

document.getElementById('startBtn').addEventListener('click', function() {
    if (!isCounting) startCounter();
});

document.getElementById('stopBtn').addEventListener('click', function() {
    if (isCounting) stopCounter();
});







console.log( hours," ",minutes," ",seconds)