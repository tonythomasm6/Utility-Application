//Default

//clock
let timerEle;

const allTabs = document.querySelectorAll('.tab');
const allTabsDesc = document.querySelectorAll('.tab-desc');

//To loose focus of all tabs
const looseFocusOfAllTabs = function(){
  allTabs.forEach( (t) =>{t.classList.remove('active') });
}

//to hide all description open on clicking tab
const hideAllTabDescription= function(){
  allTabsDesc.forEach((t)=> {t.style.display='none';})
}

const getDisplayTime = function(){
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
  return clock;
}

const openClock = function (event) {
  //to set as active tab
  
  looseFocusOfAllTabs();
  hideAllTabDescription();

  event.target.classList.add('active'); // setting clicked tab as active
  //or //document.getElementById("clock").classList.add("active");
  document.getElementById("displayClock").style.display = "inline"; // showing description of clicked tab
  //hideTabDescription();
  timerEle = setInterval(function () {
    const clock = getDisplayTime();// method to get the current time in display format
    document.getElementById("displayClock").innerHTML = clock;
  }, 1);
};

//Stoping timer on exit screen
const stopClock = () => {
  
  console.log("Clock stopped !!");
  clearInterval(timerEle);
};

//Timer
const openTimer = function (event) {
  looseFocusOfAllTabs();
  hideAllTabDescription();
  event.target.classList.add('active'); // To set the timer tab as active
  //or //document.getElementById("timer").classList.add("active");
  document.getElementById("displayTimer").style.display = "inline";
};

//Home button
const openHome = function (event) {
  looseFocusOfAllTabs();
  hideAllTabDescription();
  event.target.classList.add('active');
  //document.getElementById("home").classList.add("active");
  //event.target.classList.add("active");

};

document.getElementById("clock").addEventListener("click", openClock);
document.getElementById("timer").addEventListener("click", openTimer);
//document.querySelector("displayTimer").addEventListener("click", timerClock);
//To stop clock timer on losing focus
//document.getElementById("clock").addEventListener("blur", stopClock); // issue that clock stopped even on clicking on clock
document.getElementById("home").addEventListener("click", openHome);


document.getElementById("clock").onclick(function(){

});

