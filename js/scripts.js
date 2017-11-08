    var players = [];

    function Player(name) {
      this.playerName = name;
      this.rollScore = [];
      this.total = 0;
    }

    var holdNum = [];

     $(document).ready(function() {
      $("div#player1").hide();
      $("div#player2-roll").hide();
      $("form#players").submit(function(event) {
        event.preventDefault();

    var playerOne = $("input#player1").val();
       var playerTwo = $("input#player2").val();
       //console.log(playerOne);
       var playerOne = $("input#player1").val();
       var playerTwo = $("input#player2").val();

      //console.log p1

      var newPlayerOne = new Player(playerOne);
      var newPlayerTwo = new Player(playerTwo);
      console.log(newPlayerOne);
      console.log (newPlayerTwo);

      players.push(newPlayerOne, newPlayerTwo);
      $("h3#player1").text(players[0].playerName);
      $("h3#player2").text([layers[1].playerName));
      $("div#player1-roll").show();
       alert("may the game start" + players[0].playerName);
       $("form#players").fadeOut(3000);
       })
      };
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
