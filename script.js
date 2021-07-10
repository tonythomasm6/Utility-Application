//Default

//clock
let timerEle;

const looseFocus = () => {
  document.getElementById("clock").classList.remove("active");
  document.getElementById("home").classList.remove("active");
  document.getElementById("timer").classList.remove("active");
};


const openClock = function () {+
  looseFocus();
  document.getElementById("clock").classList.add("active");
  document.getElementById("displayTimer").style.display = "none";
  document.getElementById("displayClock").style.display = "inline";
  timerEle = setInterval(function () {
    const time = new Date();
    let hour = time.getHours();
    let ampm = "am";
    if (hour > 12) {
      ampm = "pm";
      hour = hour % 12;
    }
    let mins = time.getMinutes();
    if (mins < 10) {
      mins = `0${mins}`;
    }
    let sec = time.getSeconds();
    if (sec < 10) {
      sec = `0${sec}`;
    }
    //const milsec = time.getMilliseconds();
    const clock = `${hour}:${mins}:${sec} ${ampm}`;
    console.log(clock);
    document.getElementById("displayClock").innerHTML = clock;
  }, 1);
};

//Stoping timer on exit screen
const stopClock = () => {
  
  console.log("Clock stopped !!");
  clearInterval(timerEle);
};

//Timer
const openTimer = function () {
  looseFocus();
  document.getElementById("timer").classList.add("active");
  document.getElementById("displayTimer").style.display = "inline";
  document.getElementById("displayClock").style.display = "none";
};

//Home button
const openHome = function () {
  looseFocus();
  document.getElementById("home").classList.add("active");
  document.getElementById("displayTimer").style.display = "none";
  document.getElementById("displayClock").style.display = "none";
};

document.getElementById("clock").addEventListener("click", openClock);
document.getElementById("timer").addEventListener("click", openTimer);
//document.querySelector("displayTimer").addEventListener("click", timerClock);
//To stop clock timer on losing flocus
document.getElementById("clock").addEventListener("blur", stopClock);
document.getElementById("home").addEventListener("click", openHome);
