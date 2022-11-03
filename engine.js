const DOB = new Date(2003,10,04);

var load = document.getElementById("loading");
var song = document.getElementById("song");
var count = document.getElementById("count");


document.body.onload = function(){
    setTimeout(() => {
        load.querySelector("h1").innerHTML = "Loaded !"
        load.querySelector("p").innerHTML = "Click on Start <br>Turn Up Phone's volume, Birthday Music will be playing";
        load.querySelector(".start").style.display = "block";
    }, 1000);
}

function start(){
    setTimeout(() => {
        load.style.top = "-100vh";
        song.play();
        openFullscreen();
    }, 100);

}


var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

function age(dob){
    const now = new Date();
    const diff = (now.getTime() - dob.getTime())/1000;
    const days = diff / (60*60*24);
    const hours = (days - Math.floor(days)) * 24;
    const minutes = (hours - Math.floor(hours)) * 60;
    const seconds = (minutes - Math.floor(minutes)) * 60;

    count.innerHTML = "<p>" + Math.floor(days) + " Days " + Math.floor(hours) + " Hours<br>" + Math.floor(minutes) + " Minutes<br>" + Math.floor(seconds) + " Seconds</p>";
}


setInterval(() => {
    age(DOB);
}, 1000);

