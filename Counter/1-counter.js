let count = 0;
let isCounting = false;
let counterInterval;

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
    while (isCounting && count < 100) {
        let ans= await counter();
        if (!isCounting || count>100) break;
        document.getElementById('counterDisplay').textContent = ans;
        console.log("count = ",ans);
    }
    if (count===100)console.log('Counter stopped.');
}

function stopCounter() {
    
    isCounting = false;
    console.log("force stopped");
}
document.getElementById('reset').addEventListener('click', function() {
    count=0;
    console.log("Reset successfull");
    stopCounter();
    document.getElementById('counterDisplay').textContent = 0;
    
});

document.getElementById('startBtn').addEventListener('click', function() {
    startCounter();
});

document.getElementById('stopBtn').addEventListener('click', function() {
    stopCounter();
});
