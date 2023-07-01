let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;

let timetext = document.getElementById("timetext");

let startbtn = document.getElementById("start",mousedn);
let resetbtn = document.getElementById("reset");
let pausebtn = document.getElementById("pause");

startbtn.onclick = startclicked;
resetbtn.onclick = resetclicked;
pausebtn.onclick = pauseclicked;

startbtn.addEventListener("mousedown",mousedn);
resetbtn.addEventListener("mousedown",mousedn);
pausebtn.addEventListener("mousedown",mousedn);

startbtn.addEventListener("mouseup",mouseup);
resetbtn.addEventListener("mouseup",mouseup);
pausebtn.addEventListener("mouseup",mouseup);



pausebtn.disabled = true;

function mousedn(){
    this.style.backgroundColor = "green";
}

function mouseup(){
    this.style.backgroundColor = "#2B2D42";
}


function startclicked(){
    interval = setInterval(timecounter,1000);
    pausebtn.disabled = false;
    startbtn.disabled = true;
    timecounter();
    pausebtn.innerHTML = "PAUSE"
   
    function timecounter(){
        seconds++;
        seconds = zeroes(seconds);
        minutes = zeroes(minutes);
        hours = zeroes(hours);

    if(seconds < 60){
        timetext.innerHTML = `${hours}:${minutes}:${seconds}`;
    }
    else{
        
        minutes++;
        
        if(minutes>59){
          
            hours++;
            minutes = 0;
            seconds = 0;
            
        }
        seconds = 0;
        
    }
    }

}

function zeroes(time){
    time = time.toString();
    return time.length < 2 ? "0"+time : time;
}

function resetclicked(){
    startbtn.disabled = false;
    pausebtn.disabled = true;
    seconds = 0;
    minutes = 0;
    hours = 0;
    seconds = zeroes(seconds);
    minutes = zeroes(minutes);
    hours = zeroes(hours);
    pausebtn.innerHTML = "PAUSE"
    timetext.innerHTML = `${hours}:${minutes}:${seconds}`;
    clearInterval(interval);
    
}

function pauseclicked(){

    if(pausebtn.textContent == "PAUSE"){
        clearInterval(interval);
        pausebtn.innerHTML = "RESUME"
    }
    else{
        pausebtn.innerHTML = "PAUSE"
        startclicked();
    }
    
}