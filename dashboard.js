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

// LIVE CANDLE SIMULATION


let candleList = document.querySelectorAll(".candle");


function liveCandle(){

candleList.forEach(candle=>{


let height =
Math.floor(Math.random()*80)+50;


let body =
candle.querySelector(".body");


let wick =
candle.querySelector(".wick");



body.style.height =
height/2+"px";


body.style.top =
Math.random()*50+"px";



wick.style.height =
height+"px";



let random =
Math.random();


if(random > 0.5){

candle.classList.add("green");
candle.classList.remove("red");

}

else{

candle.classList.add("red");
candle.classList.remove("green");

}



});


}



setInterval(liveCandle,2000);





// AI MARKET SCANNER


function runAI(){


let market =
[
"CALL ↑",
"PUT ↓",
"WAIT"
];


let reason =
[
"Liquidity Sweep Detected",
"Strong Rejection Candle",
"Market Structure Changed",
"Volume Confirmation"
];



let signal =
document.querySelector(".signal h1");


let text =
document.querySelector(".signal p");



let random =
Math.floor(Math.random()*market.length);



if(signal){

signal.innerHTML =
market[random];

}



if(text){

text.innerHTML =
"AI Reason: "+reason[random];

}



}



setInterval(runAI,5000);

// MARKET SELECTOR


let marketSelect = 
document.getElementById("marketSelect");


if(marketSelect){


marketSelect.onchange = function(){


let market = this.value;


alert(
"Selected Market: " + market
);


let title =
document.querySelector(".market-title");


if(title){

title.innerHTML = market;

}


}


}
// DEMO LIVE CANDLE


let chart =
document.getElementById("candleChart");


function createCandles(){


if(!chart) return;


chart.innerHTML="";


for(let i=0;i<25;i++){


let candle =
document.createElement("div");


candle.className="candleBar";


let height =
Math.floor(Math.random()*120)+40;


candle.style.height =
height+"px";



if(Math.random()>0.5){

candle.classList.add("red");

}


chart.appendChild(candle);


}


}



createCandles();


setInterval(createCandles,3000);

// 1 MINUTE CANDLE TIMER


let seconds = 60;


function candleTimer(){


let timer =
document.getElementById("candleTimer");


let status =
document.getElementById("signalStatus");



if(seconds > 0){

seconds--;


let min = "00";

let sec = seconds < 10 
? "0"+seconds 
: seconds;



timer.innerHTML =
min+":"+sec;



if(seconds <= 5){


status.innerHTML =
"🔔 SIGNAL READY - NEW CANDLE SOON";


generateSignal();


}

else{


status.innerHTML =
"🧠 AI ANALYZING MARKET...";


}


}

else{


seconds=60;


status.innerHTML =
"🕯️ NEW CANDLE STARTED";


}



}



setInterval(candleTimer,1000);




// AI MARKET ANALYSIS ENGINE


function analyzeMarket(){


let candle =
document.querySelectorAll(".candleBar");


let green = 0;
let red = 0;



candle.forEach(c=>{


if(c.classList.contains("red")){

red++;

}

else{

green++;

}


});



let signal =
document.querySelector(".signal h1");


let confidence =
document.querySelector(".signal h3");


let reason =
document.querySelector(".signal p");



if(green > red){


signal.innerHTML="CALL ↑";

confidence.innerHTML="82%";

reason.innerHTML=
"Buyer Pressure + Bullish Momentum";


}



else if(red > green){


signal.innerHTML="PUT ↓";


confidence.innerHTML="84%";


reason.innerHTML=
"Seller Pressure + Bearish Momentum";


}



else{


signal.innerHTML="WAIT";


confidence.innerHTML="50%";


reason.innerHTML=
"Market Unclear";


}


}



setInterval(analyzeMarket,5000);
