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
