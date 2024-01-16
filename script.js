var hr = 0;
var min = 0;
var sec = 0;
var count = 0;
let timer = false;

function start(){
    timer = true;
    stopWatch();
}

function stop(){
    timer = false;
    // stopWatch();
}

function reset(){
    timer = false;
    hr = 0;
    sec = 0;
    sec = 0;
    count = 0;
    
    document.getElementById("count").innerHTML = "00";
    document.getElementById("sec").innerText = "00";
    document.getElementById("min").innerText = "00";
    document.getElementById("hr").innerText = "00";

}

function stopWatch(){
    if(timer == true){
        count = count + 1;

        if(count == 100){
            sec = sec + 1;
            count = 0;
        }
        if(sec == 60){
            min += 1;
            sec = 0;
        }
        if(min == 60){
            hr += 1;
            min = 0;
            sec = 0;
        }
        
        let countStr = count;
        let minStr = min;
        let secStr = sec;
        let hrStr = hr;
        
        if(count < 10){
            countStr = "0" + countStr;
        }
        if(sec < 10){
            secStr = "0" + secStr;
        }
        if(min < 10){
            minStr = "0" + minStr;
        }
        if(hr < 10){
            hrStr = "0" + hrStr;
        }
        

        document.getElementById("count").innerHTML = countStr;
        document.getElementById("sec").innerText = secStr;
        document.getElementById("min").innerText = minStr;
        document.getElementById("hr").innerText = hrStr;

        setTimeout("stopWatch()",10);
    }
}



