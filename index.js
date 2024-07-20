   var randomNum1 = Math.floor(Math.random() * 6) +1;
    var randomNum2 = Math.floor(Math.random() * 6) +1;

   var player1 = document.getElementsByClassName("img1");
   if (player1.length > 0) {
       player1[0].src = `./images/dice${randomNum1}.png`;
  }

  var player2 = document.getElementsByClassName("img2");
   if (player1.length > 0) {
    player2[0].src = `./images/dice${randomNum2}.png`;
  }

  var result = document.getElementsByTagName("h1");
  if (result.length > 0 ){
    if (randomNum1 ===  randomNum2) {
        result[0].innerHTML = 'Play Again!';
      } else if (randomNum1 >  randomNum2) {
        result[0].innerHTML = 'Winner Player 1!';
      } else {
        result[0].innerHTML = 'Winner Player 2!';
      }
    }
