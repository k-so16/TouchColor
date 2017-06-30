$(function() {
  var list = [];
  $('body').on('click', () => {
    genList(list);
    dispColor(list);
  });

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

function dispColor(list)
{
  for(var i = 0; i < list.length; i++) {
    switch(list[i]) {
      case 0:
        console.log("red");
	break;
      case 1:
        console.log("blue");
	break;
      case 2:
        console.log("yellow");
	break;
      case 3:
        console.log("green");
	break;
      default:
        console.log("warning: list has invalid value at list[" + i + "]");
    }
  }
}
