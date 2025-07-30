let gameSeq = [];
let userSeq = [];

let btns  = ["yellow", "red", "purple", "green"]

let level = 0;
let started = false;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        started = true;

        levelUp()
    }
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    
    gameSeq.push(randColor);

    gameFlash(randBtn);
}

function checkAns(idx){
    if (gameSeq[idx] === userSeq[idx]) {
        if(gameSeq.length == userSeq.length){
            setTimeout(levelUp, 1000)
        }
        
    }else{
        h2.innerHTML = `Game over! Your score was <b>${level}</b> <br> Press any key to start the game`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
        document.querySelector("body").style.backgroundColor = "white";
        }, 200);
        reset();
    }
}

function btnPress(){
   let btn = this;
   userFlash(btn);

   userColor = btn.getAttribute("id");
   userSeq.push(userColor);

   checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress)
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
