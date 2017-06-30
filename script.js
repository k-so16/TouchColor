$(function() {
  var list = [];

  $('#game').css('background', '#c8c8c8');
  var startButton = $('<div id="start_message">').text("click/touch me");
  startButton.prependTo('#game');
});

function genList(list)
{
  if(list == null) {
    console.log("error: argument of genList() is null.");
    return;
  }

  var size = list.length;
  for(var i = 0; i <= size; i++) {
    list[i] = Math.floor(Math.random() * 4);
  }
}
