var timer=60;
var score=0;
var hitrn=0;
function calScore(){
    document.querySelector("#scoreval").textContent=score;
    score+=10;
}
function makeBubble(){
    var clutter="";

    for(var i=1;i<=171;i++){
        var rn=Math.floor(Math.random()*10);
        clutter+=`<div id="bubble">${rn}</div>`;
    }
    
    document.querySelector("#panel-bottom").innerHTML=clutter;
}

function runTimer(){
    var timerint=setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#time-inter").textContent=timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#panel-bottom").innerHTML=`<h1>YOUR SCORE : ${score-10}</h1>`
        }
    },1000);
}

function hitScore(){
     hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent=hitrn;
}

document.querySelector("#panel-bottom").addEventListener("click",function(dets){
    var clickedNum=Number(dets.target.textContent);
    console.log(clickedNum);
    if(clickedNum===hitrn){
        calScore();
        makeBubble();
        hitScore();
    }
})

calScore();
hitScore();
runTimer();
makeBubble();
