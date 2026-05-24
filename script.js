/* DARK MODE */

const darkButtons = document.querySelectorAll(".dark-btn");

darkButtons.forEach(function(btn){

    btn.addEventListener("click", function(){

        document.body.classList.toggle("dark-theme");

    });

});


/* START MISSION */

function startMission(){

    document.getElementById("missionStatus").innerHTML = "Active";

    document.querySelector(".flying-drone").style.animationPlayState = "running";

    alert("Mission Started Successfully");

}


/* STOP MISSION */

function stopMission(){

    document.getElementById("missionStatus").innerHTML = "Stopped";

    document.querySelector(".flying-drone").style.animationPlayState = "paused";

    alert("Mission Stopped");

}


/* EMERGENCY RETURN */

function emergencyReturn(){

    document.getElementById("missionStatus").innerHTML = "Returning";

    document.querySelector(".flying-drone").style.animationDuration = "3s";

    alert("Drone Returning To Base");

}


/* CHART */

const chartCanvas = document.getElementById('myChart');

if(chartCanvas){

    new Chart(chartCanvas, {

        type:'line',

        data:{

            labels:['Mon','Tue','Wed','Thu','Fri','Sat'],

            datasets:[{

                label:'Drone Analytics',

                data:[12,19,8,15,25,30],

                borderColor:'#38bdf8',

                backgroundColor:'rgba(56,189,248,0.2)',

                fill:true,

                tension:0.4,

                borderWidth:3

            }]
        },

        options:{

            responsive:true

        }

    });

}