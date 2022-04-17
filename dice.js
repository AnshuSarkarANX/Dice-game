var d1= "<img src='dice1.png'>";
var d2= "<img src='dice2.png'>";
var d3= "<img src='dice3.png'>";
var d4= "<img src='dice4.png'>";
var d5= "<img src='dice5.png'>";
var d6= "<img src='dice6.png'>";
var darr=[d1,d2,d3,d4,d5,d6];
 function roll(){
  var r1 = Math.floor(Math.random()*6);
  var r2 = Math.floor(Math.random()*6);
  document.querySelector("#d1").innerHTML=darr[r1]+"<p>First Player</p>";
  document.querySelector("#d2").innerHTML=darr[r2]+"<p>Second Player</p>";
  if(r1>r2){
    document.querySelector("h1").innerHTML="First Player won the game.";
  }
  else if (r1===r2) {
    document.querySelector("h1").innerHTML="It's a Tie."
  }
  else{
    document.querySelector("h1").innerHTML="Second Player won the game."
  }
}
