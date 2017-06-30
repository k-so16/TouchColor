"use strict";

$(function() {
  const colorList = ["red", "blue", "yellow", "green"];
  var list = [];

  // append lights turned off
  for(var i = 0; i < colorList.length; i++) {
    var light =
      $('<div id="' + colorList[i] + '">').addClass('lights lights_out');
    light.appendTo('#game');
  }

  // add start button
  var startButton = $('<div id="start_message">').text("click/touch me");
  startButton.prependTo('#game');

  // the process when start button clicked
  startButton.on('click', () => {
    startButton.fadeOut(() => {
      $('#game').css('background', '#ffffff');
      startButton.remove();

      // begin game
      showOrder(list, false);
    });
  });


  function showOrder(list, again) {
    if(!again) {
      genList(list);
    }
    for(var i = 0; i < list.length; i++) {
      var color = colorList[list[i]];
      console.log(color);

      var node = $('.lights').eq(list[i]);
      node.removeClass('lights_out');
      node.addClass(color);
      setTimeout(() => {
	node.removeClass(color);
	node.addClass('lights_out');
      }, 2000);
    }
  }
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
