function generateNum(){
  var randomNumber1 = getnum();
  var randomNumber2 = getnum();
  document.querySelector(".p1").setAttribute("src",'images/dice' + randomNumber1 + '.png');
  document.querySelector(".p2").setAttribute("src",'images/dice' + randomNumber2 + '.png');

  if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins! 🚩";
  }
  else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
  }
  else{
    document.querySelector("h1").innerHTML="Draw!";
  }
}

function getnum(){
  var randomNumber=0;
  while(randomNumber===0){
    randomNumber= Math.floor(6*Math.random());
  }
  return randomNumber;
}
