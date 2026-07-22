// TRADER BY RB AI SCANNER
// Dashboard Control


// Live Time Update

function updateTime(){

    let now = new Date();

    let time =
    now.toLocaleTimeString();


    let clock =
    document.getElementById("clock");


    if(clock){

        clock.innerHTML=time;

    }

}


setInterval(updateTime,1000);



// Scan Market Button

let scanBtn =
document.querySelector(".scan");


if(scanBtn){

scanBtn.onclick=function(){


    scanBtn.innerHTML="🔄 SCANNING...";


    setTimeout(()=>{


        scanBtn.innerHTML="✅ SCAN COMPLETE";


        alert(
        "AI Market Analysis Completed"
        );


    },2000);


}


}



// Timeframe Active Button


let buttons =
document.querySelectorAll(".time button");


buttons.forEach(btn=>{


btn.onclick=function(){


buttons.forEach(b=>{

b.classList.remove("active");

});


btn.classList.add("active");


}


});




// Signal Update Demo


let signals=[

"PUT ↓",

"CALL ↑",

"WAIT"

];


function changeSignal(){


let signal =
document.querySelector(".signal h1");


if(signal){


let random =
Math.floor(Math.random()*signals.length);


signal.innerHTML=
signals[random];


}


}


// প্রতি ১০ সেকেন্ডে পরিবর্তন

setInterval(changeSignal,10000);
