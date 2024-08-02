const starting = document.getElementById('start');
const stoping = document.getElementById('stop');
const reseting = document.getElementById('reset');
const timer = document.getElementById('timer');

let interval;
let timeLeft = 1500;

function update(){
    let minutes = Math.floor(timeLeft / 60);
    let secondes = timeLeft % 60;
    let formatedTime = minutes + ":" + secondes;

    timer.innerHTML = formatedTime;
};
function startTimer(){
    interval = setInterval(()=>{
        timeLeft--;
        update();
        if(timeLeft == 0){
            clearInterval(interval);
            alert("Time is Up!");
            timeLeft = 1500;
        }
    }, 1000)
};
function stopTimer(){
    clearInterval(interval);
};
function resetTimer(){
    clearInterval(interval);
    timeLeft = 1500;
    update();
};

starting.addEventListener('click', startTimer);
stoping.addEventListener('click', stopTimer);
reseting.addEventListener('click', resetTimer);