var [ milseconds, seconds, minutes, hours ] = [0,0,0,0];
var display = document.querySelector('.js-timer')
var stopwatch = null;

//start button created
const start = document.querySelector('.js-start-button')
//pause button created
const pause = document.querySelector('.js-stop-button')
//reset button created
const reset = document.querySelector('.js-reset-button')

//click start button
start.addEventListener('click', () => {
    if(stopwatch!==null){
        clearInterval(stopwatch)
    }
    stopwatch = setInterval(startButton, 10);
})

//click pause button
pause.addEventListener('click', () => {
    clearInterval(stopwatch)
})

//click reset button
reset.addEventListener('click', () => {
    [ seconds, minutes, hours ] = [0, 0, 0]
    document.querySelector('.js-timer').innerHTML = '00 : 00 : 00 : 00'
    clearInterval(stopwatch)
})

function startButton(){
    milseconds+=1
    if (milseconds == 100) {
        milseconds = 0
        seconds++

        if(seconds == 60){
            seconds = 0
            minutes++
    
            if(minutes == 60){
                minutes = 0
                hours++
            }
        }
    }

    var h = hours < 10 ? "0" + hours : hours
    var m = minutes < 10 ? "0" + minutes : minutes
    var s = seconds < 10 ? "0" + seconds : seconds
    var ms = milseconds < 10 ? "0" + milseconds : milseconds

    display.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`
}
