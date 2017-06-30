"use strict";

$(function() {
  // variable declaration
  const colorList = ["red", "blue", "yellow", "green"];
  var list = [];
  var touchable = false;
  var pos = 0;
  var life = 3;


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
      $('#game').after('<div id="stock">');
      $('#stock').text("stock remaining: " + life);
    });
  });

  // lighting by touching
  $('.lights').on('click', function(e) {
    if(!touchable) {
      console.log("untouchable");
      return;
    }

    // get clicked element number
    var clicked = $('.lights').index(this);

    // turn on and off clicked light
    touchable = false;
    var light = $('.lights').eq(clicked);

    var delayTime = 50;
    // turn on a light
    setTimeout(() => {
      light.removeClass('lights_out');
      light.addClass(colorList[clicked]);
    }, delayTime);

    delayTime += 2000;
    // turn off light after specified time
    setTimeout(() => {
      light.removeClass(colorList[clicked]);
      light.addClass('lights_out');
    }, delayTime);

    delayTime += 200;
    // judge whether correct light chosen
    setTimeout(() => {
      touchable = true;
      if(clicked == list[pos]) {
	pos++;
	if(pos == list.length) {
	  showOrder(list, false);
	}
      } else {
	life--;
        $('#stock').text("stock remaining: " + life);
	if(!life) {
	  alert("Game Over");
	  touchable = false;
	  return;
	}
	// alert("Try again");
	if(confirm("Would you like to repeat again?")) {
	  showOrder(list, true);
	}
	pos = 0;
      }
    }, delayTime);
  });


  // show light order
  function showOrder(list, repeat) {
    // change untouchable mode and reset position
    touchable = false;
    pos = 0;

    if(!repeat) {
      // create new order if not repeat mode
      genList(list);
    }

    console.log(list.map(x => {return colorList[x]}).join());
    var delayTime = 0;
    // turning on and off color lights one after another
    for(var i = 0; i < list.length; i++) {
      // get color and node to turn on and off
      var color = colorList[list[i]];
      var node = $('.lights').eq(list[i]);

      delayTime += 300;
      // turn on a light
      setTimeout((light, targetColor) => {
	light.removeClass('lights_out');
	light.addClass(targetColor);
      }, delayTime, node, color);

      delayTime += 2000;
      // turn off light after specified time
      setTimeout((index, light, targetColor) => {
	light.removeClass(targetColor);
	light.addClass('lights_out');

	// if next is empty, set mode touchable
	if(index + 1 == list.length) {
	  touchable = true;
	}
      }, delayTime, i, node, color);
    }
  }


  // generate random number list
  function genList(list)
  {
    if(list == null) {
      console.log("error: argument of genList() is null.");
      return;
    }

    var size = list.length;
    for(var i = 0; i <= size; i++) {
      list[i] = Math.floor(Math.random() * colorList.length);
    }
  }
});


