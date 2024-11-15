const displayTime = document.querySelector(".displayTime")
const stopBtn = document.getElementById("stopBtn")
const playBtn = document.getElementById("playBtn")
const resetBtn = document.getElementById("resetBtn")

let msec = 0;
let sec = 0;
let min = 0;
let hrs = 0;

let timer = null;

playBtn.addEventListener('click' , function(){
    if(timer !== null){
        clearInterval(timer)
    }
    timer = setInterval(stopWatch ,10)
})

stopBtn.addEventListener('click' , function(){
    clearInterval(timer)
})

resetBtn.addEventListener('click' , function(){
    clearInterval(timer)
    displayTime.innerHTML = `00 : 00 : 00 : 00`
    msec = sec = min = hrs = 0; 
})

function stopWatch(){
    msec++
    if(msec === 100){
        msec = 0
        sec++
        if(sec === 60){
            sec = 0
            min++
            if(min === 60){
                min = 0
                hrs++
            }
        }
    }

    let ms = msec < 10 ? `0${msec}` : msec;
    let s = sec < 10 ? `0${sec}` : sec;
    let m = min < 10 ? `0${min}` : min;
    let h = hrs < 10 ? `0${hrs}` : hrs;

    displayTime.innerHTML = `${h} : ${m} : ${s} : ${ms}`
}