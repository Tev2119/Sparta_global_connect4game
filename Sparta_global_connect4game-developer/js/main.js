$(document).ready(function(){
  console.dir(document);
  console.log("hello");

  // var coinDrop1 = document.getElementsByName('coin1');
  //
  // var coinDrop2 = document.getElementsByName('coin2');
  //
  // var coinDrop3 = document.getElementsByName('coin3');
  //
  // var coinDrop4 = document.getElementsByName('coin4');
  //
  // var coinDrop5 = document.getElementsByName('coin5');
  //
  // var coinDrop6 = document.getElementsByName('coin6');
  //
  // var coinDrop7 = document.getElementsByName('coin7');
  //
  // var coinDrop8 = document.getElementsByName('coin8');

  var player_color=[];
  // player_1.style.color="red"
  var player_1 = 1;
  // $(player_1)
  player_2 = 2;
  // var active_player=0;
  var colum_1 = [64,56,48,40,32,24,16,8]
  var colum_2 = [65,57,49,41,33,25,17,9]
  var colum_3 = [66,58,50,42,34,26,18,10]
  var colum_4 = [67,59,51,43,35,27,19,11]
  var colum_5 = [68,60,52,44,36,28,20,12]
  var colum_6 = [69,61,53,45,37,29,21,13]
  var colum_7 = [70,62,54,46,38,30,22,14]
  var colum_8 = [71,63,55,47,39,31,23,15]
  console.log(colum_1[0]);
  var gridval = $(".col-md-1").each(function(index){
    /*  console.log(index+":"+$(this).text());*/
  });
  // console.log(gridval)

  var coinDrop1 = document.getElementsByName('coin1');
  $(".coin1").click(function(){
    for (var i = colum_1[0]; i >=colum_1.length; i-=8) { //go through anwser array

      if (gridval[i].innerHTML == 8){
        debugger;
        if (player_1 == 1) {
          // gridval[i].css = player_1;
          // gridval[i].innerHTML= $("#col1").css("background-color","red");
          gridval[i].innerHTML= player_1;
          player_1 = 0;
          break;
        }else{
          gridval[i].innerHTML= player_2;
          player_1 = 1;
          break;
        }
      }
    }
  });
  
  var coinDrop2 = document.getElementsByName('coin2');
  $(".coin2").click(function(){
    for (var i=colum_2[0] ; i>colum_2.length; i-=8){

      if (gridval[i].innerHTML == 8){
        if (player_1 == 1) {
          // gridval[i].css = player_1;
          // gridval[i].innerHTML= $("#col1").css("background-color","red");
          gridval[i].innerHTML= player_1;
          player_1 = 0;
          break;
        }else{
          gridval[i].innerHTML= player_2;
          player_1 = 1;
          break;
        }
      }
    }
  });

  var coinDrop3 = document.getElementsByName('coin3');
  $(".coin3").click(function(){
    for (var i=colum_3[0] ; i>colum_3.length; i-=8){

      if (gridval[i].innerHTML == 8){
        if (player_1 == 1) {
          // gridval[i].css = player_1;
          // gridval[i].innerHTML= $("#col1").css("background-color","red");
          gridval[i].innerHTML= player_1;
          player_1 = 0;
          break;
        }else{
          gridval[i].innerHTML= player_2;
          player_1 = 1;
          break;
        }
      }
    }
  });

  var coinDrop4 = document.getElementsByName('coin4');
  $(".coin4").click(function(){
    for (var i=colum_4[0] ; i>colum_4.length; i-=8){

      if (gridval[i].innerHTML == 8){
        if (player_1 == 1) {
          // gridval[i].css = player_1;
          // gridval[i].innerHTML= $("#col1").css("background-color","red");
          gridval[i].innerHTML= player_1;
          player_1 = 0;
          break;
        }else{
          gridval[i].innerHTML= player_2;
          player_1 = 1;
          break;
        }
      }
    }
  });

  var coinDrop5 = document.getElementsByName('coin5');
  $(".coin5").click(function(){
    for (var i=colum_5[0] ; i>colum_5.length; i-=8){

      if (gridval[i].innerHTML == 8){
        if (player_1 == 1) {
          // gridval[i].css = player_1;
          // gridval[i].innerHTML= $("#col1").css("background-color","red");
          gridval[i].innerHTML= player_1;
          player_1 = 0;
          break;
        }else{
          gridval[i].innerHTML= player_2;
          player_1 = 1;
          break;
        }
      }
    }
  });

  var coinDrop6 = document.getElementsByName('coin6');
  $(".coin6").click(function(){
    for (var i=colum_6[0] ; i>colum_6.length; i-=8){

      if (gridval[i].innerHTML == 8){
        if (player_1 == 1) {
          // gridval[i].css = player_1;
          // gridval[i].innerHTML= $("#col1").css("background-color","red");
          gridval[i].innerHTML= player_1;
          player_1 = 0;
          break;
        }else{
          gridval[i].innerHTML= player_2;
          player_1 = 1;
          break;
        }
      }
    }
  });

  var coinDrop7 = document.getElementsByName('coin7');
  $(".coin7").click(function(){

    for (var i=colum_7[0] ; i>colum_7.length; i-=8){
      if (gridval[i].innerHTML == 8){
        if (player_1 == 1) {
          // gridval[i].css = player_1;
          // gridval[i].innerHTML= $("#col1").css("background-color","red");
          gridval[i].innerHTML= player_1;
          player_1 = 0;
          break;
        }else{
          gridval[i].innerHTML= player_2;
          player_1 = 1;
          break;
        }
      }
    }
  });

  var coinDrop8 = document.getElementsByName('coin8');
  $(".coin8").click(function(){
    for (var i=colum_8[0] ; i>colum_8.length; i-=8){

      if (gridval[i].innerHTML == 8){
        if (player_1 == 1) {
          // gridval[i].css = player_1;
          // gridval[i].innerHTML= $("#col1").css("background-color","red");
          gridval[i].innerHTML= player_1;
          player_1 = 0;
          break;
        }else{
          gridval[i].innerHTML= player_2;
          player_1 = 1;
          break;
        }
      }
    }
  });



























})
