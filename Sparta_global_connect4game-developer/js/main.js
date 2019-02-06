$(document).ready(function(){
  console.dir(document);
  console.log("hello");

var player_color=[];
player_1="black";
player_2="yellow";
// var active_player=0;


var gridval = $(".col-md-1").each(function(index){
/*  console.log(index+":"+$(this).text());*/
});
// console.log(gridval)

var coinDrop1 = document.getElementsByName('coin1');
$(".coin1").click(function(){
  for (var i=64 ; i>7; i-=8){
console.log(gridval[i]);

  }

});
var coinDrop2 = document.getElementsByName('coin2');
$(".coin2").click(function(){
  for (var i=65 ; i>8; i-=8){
console.log(gridval[i]);

  }

});
var coinDrop3 = document.getElementsByName('coin3');
$(".coin3").click(function(){
  for (var i=66 ; i>9; i-=8){
console.log(gridval[i]);

  }

});
var coinDrop4 = document.getElementsByName('coin4');
$(".coin4").click(function(){
  for (var i=67 ; i>10; i-=8){
console.log(gridval[i]);

  }

});
var coinDrop5 = document.getElementsByName('coin5');
$(".coin5").click(function(){
  for (var i=68 ; i>11; i-=8){
console.log(gridval[i]);

  }

});
var coinDrop6 = document.getElementsByName('coin6');
$(".coin6").click(function(){
  for (var i=69 ; i>12; i-=8){
console.log(gridval[i]);

  }

});
var coinDrop7 = document.getElementsByName('coin7');
$(".coin7").click(function(){
  for (var i=70 ; i>13; i-=8){
console.log(gridval[i]);

  }

});
var coinDrop8 = document.getElementsByName('coin8');
$(".coin8").click(function(){
  for (var i=71 ; i>14; i-=8){
console.log(gridval[i]);

  }

});



//  for (var i=8 ; i<=gridval.length; i-=8){
//   console.log(gridval[i]);
// }


























})
