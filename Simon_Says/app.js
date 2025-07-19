let gameSeq=[];
let userSeq=[];

let btns=["red","blue","yellow","purple"];
let started=false;
let level=0;

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game Started");
        started=true;

        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

let h2=document.querySelector("h2");
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText= `Level ${level}`;

    let randInx=Math.floor(Math.random()*4);
    let randCol=btns[randInx];
    let randBtn=document.querySelector(`.${randCol}`);
    
    gameSeq.push(randCol);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`Game over! Your Score was <b>${level}</b> <br>Press any key to start again`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnPress(){
    //console.log(this);
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtn=document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;
}