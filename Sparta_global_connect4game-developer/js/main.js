$(document).ready(function(){
  console.dir(document);
  console.log("hello");


var gameBoard = document.getElementsByClassName('container');
for(var i=0; i<gameBoard.length; i++){
  // var see= gameBoard[i].addEventListner('click');
  console.log(gameBoard[i]);
}

var gridval = $(".col-md-1").each(function(index){
  console.log(index+":"+$(this).text());
});

console.log(gridval);

function coindrop(c=64; c>gridval.length c-8){
  console.log(gradval[c]);
}


































})
