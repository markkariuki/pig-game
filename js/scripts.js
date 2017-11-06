var players = [];

function Player(name) {
  this.playerName = name;
  this.rollScore = [];
  this.total = 0;
}

var holdNum = [];

//User Interface Logic
$(document).ready(function() {
      $("div#player1-roll").hide();
      $("div#player2-roll").hide();
      $("form#players").submit(function(event) {
        event.preventDefault();

        var playerOne = $("input#player1").val();
        var playerTwo = $("input#player2").val();


        //console.log(playerOne);

        var newPlayerOne = new Player(playerOne);
        var newPlayerTwo = new Player(playerTwo);
        console.log(newPlayerOne);
        console.log(newPlayerTwo);


        players.push(newPlayerOne, newPlayerTwo);
        $("h3#player1").text(players[0].playerName);
        $("h3#player2").text(players[1].playerName);
        $("div#player1-roll").show();
        alert("Let's begin " + players[0].playerName);
        $("form#players").fadeOut(3000);
      });

      //here's where the game will be able to compute the values

      /* let's start with player one's code
       the roll and hold buttons */
       $("button#die1").click(function() {
               var die = Math.floor(Math.random() * (6)) + 1;
               $("h2#die-count").text(die);

               if (die === 1) {
                 $("div#player2-roll").fadeIn();
                 $("div#player1-roll").fadeOut();

                 holdNum = [];
                 $("h4#hold-total1").text("0");
                 alert(players[1].playerName + " your turn!")
               } else {
                 holdNum.push(die);
                 var total = holdNum.reduce(function(total, countNumber) {
                   return total + countNumber;
                 });
                 $("h4#hold-total1").text(total);
               }
             });

             $("button#hold1").click(function() {
               var total = holdNum.reduce(function(total, countNumber) {
                 return total + countNumber;
               })
               players[0].rollScore.push(total);
               var score = players[0].rollScore.reduce(function(total, countNumber) {
                 return total + countNumber;
               });
               players[0].total = score;
               $("h2#score1").text(score);

               $("div#player2-roll").fadeIn(3000);
               $("div#player1-roll").fadeOut(3000);

               alert(players[1].playerName + " your turn!");

               if (score >= 100) {
                 alert(players[0].playerName + " wins!!!");
                 $("div#player1-roll").fadeOut(3000);
                 $("div#player2-roll").fadeOut(3000);
                 $("form#players").fadeIn(5000);
               }

             });

       //PLAYER TWO LOGIC
             /* then we can deal with player two's code from here
             it's goig to deal with the hold and roll */
             $("button#die2").click(function() {
               var die = Math.floor(Math.random() * (6)) + 1;
               $("h2#die-count").text(die);
               if (die === 1) {
                 $("div#player1-roll").fadeIn();
                 $("div#player2-roll").fadeOut();

                 holdNum = [];
                 $("h4#hold-total2").text("0");
                 alert(players[0].playerName + " your turn!");
               } else {
                 holdNum.push(die);
                 var total = holdNum.reduce(function(total, countNumber) {
                   return total + countNumber;
                 });
                 $("h4#hold-total2").text(total);
               }
             });

             $("button#hold2").click(function() {
               var total = holdNum.reduce(function(total, countNumber) {
                 return total + countNumber;
               })
               players[1].rollScore.push(total);
               var score = players[1].rollScore.reduce(function(total, countNumber) {
                 return total + countNumber;
               });
               players[1].total = score;
               $("h2#score2").text(score);

               $("div#player2-roll").fadeOut(3000);
               $("div#player1-roll").fadeIn(3000);

               alert(players[0].playerName + " your turn!");

               if (score >= 100) {
                 alert(players[1].playerName + " wins!!!");
                 $("div#player1-roll").fadeOut(3000);
                 $("div#player2-roll").fadeOut(3000);
                 $("form#players").fadeIn(5000);
               }

             }); //end of document User Interface Logic
       })
