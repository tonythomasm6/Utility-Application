//Initializing timer time
let min = 0,
  sec = 0,
  millsec = 0;
let timerIntervalClock; // Timer object
let lapArray = [];

const hideAllElements = () =>{
  document.getElementById("startTimer").style.display = "none";
  document.getElementById("pauseTimer").style.display = "none";
  document.getElementById("resumeTimer").style.display = "none";
}

//Initializing timer display and timer buttons
hideAllElements();
document.getElementById("timerClock").innerHTML = `00:00:00`;
document.getElementById("startTimer").style.display = "inline";

//Function called on timer start
const startTimer = function () {
  hideAllElements();
  document.getElementById("pauseTimer").style.display = "inline";
  timerIntervalClock = setInterval(() => {
    millsec += 10;
    if (millsec == 1000) {
      millsec = 0;
      sec += 1;
    }
    if (sec == 60) {
      sec = 0;
      min += 1;
    }
    let disMin=min, disSec=sec, disMilliSec=millsec;
    if(min <10){
      disMin = `0${min}`;
    }
    if(sec <10){
      disSec = `0${sec}`;
    }
    if(millsec < 10){
      disMilliSec = `00${millsec}`
    }else if(millsec < 100){
      disMilliSec = `0${millsec}`;
    }
    document.getElementById("timerClock").innerHTML = `${disMin}:${disSec}:${disMilliSec
      .toString()
      .slice(0, 2)}`;
  }, 10);
};

//Pause timer
const pauseTimer = function () {
  hideAllElements();
  document.getElementById("resumeTimer").style.display = "inline";
  clearInterval(timerIntervalClock); // Clearing running timer
};

//Reset timer
const resetTimer = function () {
   lapArray = [];
  hideAllElements();
  document.getElementById("startTimer").style.display = "inline";
  document.getElementById("displayLap").innerHTML = "";
  clearInterval(timerIntervalClock); // Clearing running timer
  document.getElementById("timerClock").innerHTML = `00:00:00`;
  (min = 0), (sec = 0), (millsec = 0);
};

//Resume timer
const resumeTimer = () => startTimer();

// Take lap
const takeLap = () => {
  lapArray.push(`${min}:${sec}:${millsec.toString().slice(0, 2)}`);
  let displayLap = "";
  for (let i = 0; i < lapArray.length; i++) {
    displayLap += `<li><span style="color:white">${i + 1}  ||  ${lapArray[i]}</span></li>`;
  }
  document.getElementById("displayLap").style.display='inline';
  document.getElementById("displayLap").innerHTML = displayLap;
};

document.getElementById("startTimer").addEventListener("click", startTimer);
document.getElementById("pauseTimer").addEventListener("click", pauseTimer);
document.getElementById("resumeTimer").addEventListener("click", resumeTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
document.getElementById("lap").addEventListener("click", takeLap);


