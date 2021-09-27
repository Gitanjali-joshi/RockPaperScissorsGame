const choices = document.querySelectorAll(".choices")
const score = document.getElementById("score")
const result= document.getElementById("result")
const restart = document.getElementById("restart")
const modal = document.querySelector(".modal")

const scoreboard = { 
  player:0,
  computer:0
}

function getcomputerchoice(){
  const randomnumber=Math.random()
  if(randomnumber < 0.28)
     return "rock"; 
  else if(randomnumber>=0.52)
  return "scissors";
  else 
  return "paper";
}

function getwinner(p,c){
  if(p===c)
  {
    return "draw";
  }
  else if (p==="paper")
  {
    if (c==="rock"){
      return "player";
    }
      else{
      return"computer";
       }}
  else if (p==="rock")
  {
    if(c==="scissors"){
      return"player";
    }
    else{
      return"computer";
    }
    }
  else  if(p==="scissors")
  {
    if(c=="paper"){
      return "player";
    }
     else
     {
     return "computer";
    }
  }
}


function ShowWinner(winner,computerchoice){
  
  if( winner == 'player'){
   scoreboard.player++;
   result.innerHTML=`
     <h1 class="text-win">you win</h1>
     <i class="fas fa-hand-${computerchoice} fa-10x"></i>
     <p> computer choice<strong> ${computerchoice.charAt(0).toUpperCase()+computerchoice.slice(1)}
     `;
  }
  
  else if(winner =='computer'){
    scoreboard.computer++;
    result.innerHTML=`
      <h1 class="text-win">you loose</h1>
     <i class="fas fa-hand-${computerchoice} fa-10x"></i>
     <p> computer choice<strong> ${computerchoice.charAt(0).toUpperCase()+computerchoice.slice(1)}
     `;
  }
  else{
   result.innerHTML=`
     <h1 class="text-win">it's draw</h1>
     <i class="fas fa-hand-${computerchoice} fa-10x"></i>
     <p> computer choice<strong> ${computerchoice.charAt(0).toUpperCase()+computerchoice.slice(1)}
     `;
   }

  score.innerHTML =`
  <p> player:${scoreboard.player}</p>
  <p> computer:${scoreboard.computer}</p>
  `
 modal.style.display = "block"
}

function clearmodal(e){

  if(e.target == modal){
    modal.style.display ="none"
  }
}

function restartGame(){
  scoreboard.player = 0;
  scoreboard.computer = 0;

  score.innerHTML=`
   <p> player:${scoreboard.player}</p>
  <p> computer:${scoreboard.computer}</p>
  `

}

function play(e){
restart.style.display="inline-block"
const playerchoice =e.target.id
const computerchoice=getcomputerchoice()
let winner = getwinner(playerchoice,computerchoice)
ShowWinner(winner,computerchoice)
} 
 
choices.forEach (x => x.addEventListener("click",play) ) 

window.addEventListener('click',clearmodal)

restart.addEventListener("click",restartGame)


