$(function() {
  var list = [];
  $('body').on('click', () => {
    genList(list);
    console.log(list);
  });

  $('body').on('click');
});

function genList(list)
{
  if(list == null) {
    console.log("error: argument of genList() is null.");
    return;
  }

  for(var i = 0; i <= list.length; i++) {
    list[i] = Math.floor(Math.random(4));
  }
  return list;
}
