var hourHeading = document.getElementById("hour")
var minHeading = document.getElementById("min")
var secHeading = document.getElementById("sec")
var msecHeading = document.getElementById("msec")

var hour = 00;
var min = 00;
var sec = 00;
var msec = 00;
var interval;


function timer(){
    msec++
    msecHeading.innerHTML=msec
    if(msec=="100"){
        sec++
        secHeading.innerHTML=sec
        msec=00
    }
    if(sec=="60"){
        min++
        minHeading.innerHTML=min
        sec=00
    }
    if(min=="60"){
        hour++
        hourHeading.innerHTML=hour
        min=00
    }
}

flag =0;

function start(btn){
    if(flag == 1) {

    }else {
        interval = setInterval(timer, 10)  
        flag = 1;
    }

}

function stop(){
    clearInterval(interval)
    flag = 0;
}

function reset(){
    clearInterval(interval)
    hourHeading.innerHTML="00"
    minHeading.innerHTML="00"
    secHeading.innerHTML="00"
    msecHeading.innerHTML="00"
    flag = 0;
}
