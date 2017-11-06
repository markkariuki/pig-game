$(document).ready(function() {
  $("div#player1").hide();
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

  }
}}
