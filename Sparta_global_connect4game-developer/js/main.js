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

  var getColumnArray = function(col) {
    switch(col) {
      case 1:
        return colum_1;
        break;
      case 2:
        return colum_2;
        break;
      case 3:
        return colum_3;
        break;
      case 4:
        return colum_4;
        break;
      case 5:
        return colum_5;
        break;
      case 6:
        return colum_6;
        break;
      case 7:
        return colum_7;
        break;
      case 8:
        return colum_8;
        break;
    }
  };

  var validStartingSquaresDRWin = function(){ //valid squares to start on for a diagonal right win.
    return [32,33,34,35,36,40,41,42,43,44,48,49,50,51,52,56,57,58,59,60,64,65,66,67,68];
  };
  var validStartingSquaresDlWin = function(){ //valid squaress to start on the far left for diagnol left win
    return
     [35, 36, 37, 38, 39, 43, 44, 45, 46, 47, 51, 52, 53, 54, 55, 59, 60, 61, 62, 63, 67, 68, 69, 70, 71];
  }

  $(".coin1").click(function(){
    for (var i = colum_1[0]; i >=colum_1.length; i-=8) { //go through anwser array
      // valueOf(gridval[8]);

      if (gridval[i].innerText == ""){
        // debugger;
        if (player_1 == 1) {
          // gridval[i].css = player_1;
          // gridval[i].innerText= $("#col1").css("background-color","red");
          gridval[i].innerText= player_1;
          player_1 = 0;
          break;
        }else{
          gridval[i].innerText= player_2;
          player_1 = 1;
          break;
        }
      }
    }
    calculateWinner();
  });

  $(".coin2").click(function(){
    for (var i=colum_2[0] ; i>colum_2.length; i-=8){

      if (gridval[i].innerText == ""){
        if (player_1 == 1) {
          // gridval[i].css = player_1;
          // gridval[i].innerText= $("#col1").css("background-color","red");
          gridval[i].innerText= player_1;
          player_1 = 0;
          break;
        }else{
          gridval[i].innerText= player_2;
          player_1 = 1;
          break;
        }
      }
    }
    calculateWinner();
  });

  $(".coin3").click(function(){
    for (var i=colum_3[0] ; i>colum_3.length; i-=8){

      if (gridval[i].innerText == ""){
        if (player_1 == 1) {
          // gridval[i].css = player_1;
          // gridval[i].innerText= $("#col1").css("background-color","red");
          gridval[i].innerText= player_1;
          player_1 = 0;
          break;
        }else{
          gridval[i].innerText= player_2;
          player_1 = 1;
          break;
        }
      }
    }
    calculateWinner();
  });

  $(".coin4").click(function(){
    for (var i=colum_4[0] ; i>colum_4.length; i-=8){

      if (gridval[i].innerText == ""){
        if (player_1 == 1) {
          // gridval[i].css = player_1;
          // gridval[i].innerText= $("#col1").css("background-color","red");
          gridval[i].innerText= player_1;
          player_1 = 0;
          break;
        }else{
          gridval[i].innerText= player_2;
          player_1 = 1;
          break;
        }
      }
    }
    calculateWinner();
  });

  $(".coin5").click(function(){
    for (var i=colum_5[0] ; i>colum_5.length; i-=8){

      if (gridval[i].innerText == ""){
        if (player_1 == 1) {
          // gridval[i].css = player_1;
          // gridval[i].innerText= $("#col1").css("background-color","red");
          gridval[i].innerText= player_1;
          player_1 = 0;
          break;
        }else{
          gridval[i].innerText= player_2;
          player_1 = 1;
          break;
        }
      }
    }
    calculateWinner();
  });

  $(".coin6").click(function(){
    for (var i=colum_6[0] ; i>colum_6.length; i-=8){

      if (gridval[i].innerText == ""){
        if (player_1 == 1) {
          // gridval[i].css = player_1;
          // gridval[i].innerText= $("#col1").css("background-color","red");
          gridval[i].innerText= player_1;
          player_1 = 0;
          break;
        }else{
          gridval[i].innerText= player_2;
          player_1 = 1;
          break;
        }
      }
    }
    calculateWinner();
  });

  $(".coin7").click(function(){

    for (var i=colum_7[0] ; i>colum_7.length; i-=8){
      if (gridval[i].innerText == ""){
        if (player_1 == 1) {
          // gridval[i].css = player_1;
          // gridval[i].innerText= $("#col1").css("background-color","red");
          gridval[i].innerText= player_1;
          player_1 = 0;
          break;
        }else{
          gridval[i].innerText= player_2;
          player_1 = 1;
          break;
        }
      }
    }
    calculateWinner();
  });

  $(".coin8").click(function(){
    for (var i=colum_8[0] ; i>colum_8.length; i-=8){

      if (gridval[i].innerText == ""){
        if (player_1 == 1) {
          // gridval[i].css = player_1;
          // gridval[i].innerText= $("#col1").css("background-color","red");
          gridval[i].innerText= player_1;
          player_1 = 0;
          break;
        }else{
          gridval[i].innerText= player_2;
          player_1 = 1;
          break;
        }
      }
    }
    calculateWinner();
    alert('winner found')//somehow stop the game here for all buttons... if(calculateWinner) { then do shit }
  });

var calculateWinner = function() {
  console.log('calcWInner Called');
  // winnerInDiagonalRight();
  // winnerInDiagonalLeft();
  // // NOTE: test winnerInDiagonalLeft() and winnerInRow(). then complete
  if(winnerInColumn() /*|| winnerInRow() */|| winnerInDiagonalRight() || winnerInDiagonalLeft()) {
    console.log('WINNER FOUND 1');
    return true;
  }
}

var winnerInColumn = function() { //check for winners in columns
  console.log('verticalWinnerChecks called');
  for (var i = 1; i < 9; i++) {
    console.log('@ i = ' + i);
    var colArray = getColumnArray(i);
    for( var j = 0; j < colArray.length-3; j++ ) {
      if((gridval[colArray[j]].innerText== '1')&&
      (gridval[colArray[j+1]].innerText== '1') &&
      (gridval[colArray[j+2]].innerText== '1')&&
      (gridval[colArray[j+3]].innerText== '1'))


      // if(gridval[colArray[j]].innerText == gridval[colArray[j+1]].innerText) {
      //   if(gridval[colArray[j+1]].innerText == gridval[colArray[j+2]].innerText && gridval[colArray[j+2]].innerText  == gridval[colArray[j+3]].innerText)
         {
           alert("winner wineer chicken dinner")
           console.log("can see 1");
          // console.log('FOUND WINNER!: at i  = ' + i + ' and j = ' + j);
          return true;
        }
      }

  }
  return false;
};

var winnerInRow = function() {
  //reference winner in column
}

var winnerInDiagonalRight = function() {
  console.log('invoking winnerInDiagonalRight...');
  for (var i = 0; i < validStartingSquaresDRWin().length; i++) {
    var currentReferenceSquare = validStartingSquaresDRWin()[i];
    if(gridval[currentReferenceSquare].innerText == gridval[currentReferenceSquare - 7].innerText
        && gridval[currentReferenceSquare - 7].innerText == gridval[currentReferenceSquare - 14].innerText
         && gridval[currentReferenceSquare - 14].innerText == gridval[currentReferenceSquare - 21].innerText ) {
            console.log('Winner found diagonal right at currentReferenceSquare = ' + currentReferenceSquare );
            return true;
          }
  }
  return false;
};

var winnerInDiagonalLeft = function() {
  //reference diagonal right
  console.log('invoking winnerInDiagonalLeft...');
  for (var i= 0; i < validStartingSquaresDlWin().length; i++) {
    var dLcurrentRefSquare = validStartingSquaresDlWin()[i];
    if(gridval[dLcurrentRefSquare].innerText == gridval[dLcurrentRefSquare -9].innerText
    && gridval[dLcurrentRefSquare -9].innerText == gridval[dLcurrentRefSquare -18].innerText
    && gridval[dLcurrentRefSquare -18].innerText ==  gridval[dLcurrentRefSquare -27].innerText) {
      console.log('winner found diagnol left at dlcurrentRefSquare = ' + dlcurrentRefSquare);
      return true;
    }

  }
  return false;
};


// var array = gridval;
// var row = array.length;
// var cols = array[8].length;
//   for (i=1; i<=2; i++){/*left to right*/
// for (cols = 0; cols <=6; cols++){
//   for (row = 0; row <=6; row++){
//     if(gridval[row][cols] == i){
//       if ((gridval[row][cols+1] == i) &&
//       (gridval[row][cols+2] == i) &&
//       (gridval[row][cols+3 == i])) {
//         endGame(i);
//         return true;
//        }
//       }
//     }
//   }
// }

//   }
//
//  }
// }
























})
