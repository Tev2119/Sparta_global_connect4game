// alert("im onlione")
//
var boardSize = 5;

$(function() { //on load
    printBoard(boardSize);
});

function printBoard(i_BoardSize) {
    var maxRow = parseInt(i_BoardSize);
    var maxCol = parseInt(i_BoardSize);
    var num = 1;

    $("#board").append("<table oncontextmenu=\"return false\">");
    for(var row = maxRow - 1; row >= 0 ; row--) {
           $("#board").append("<tr>");
            for(var col = 0; col < maxCol ; col++) {
                $("#board").append("<td>" + num + "</td>");
                num++;
            }

            $("#board").append("</tr>");
       }
        $("#board").append("</table>");






































































// // global varaibles
// /*booleen to prevent coins being droped if the game is over*/
// var activeGame = false;
// /*no active playesrs is represented by the sum 0, active will be either 1 or 2 playes*/
// var activePlayer = 0;
// /*here i will form the gameboard generating my board using 3 by 4 board using arrays for the col and rows*/
// var gameboard = [];
// /*creating the coin colors for distinction between player 1 and player 2, done as an array*/
// var p1_color = "black"
// var p2_color = "yellow"
//
// /*keeping track of active non-finished games, active games stop call upon this function.*/
// function beginGame() {
//   if (activeGame == true) return false;
//   /*since we always begin with a start at the beginning game we need the default activegame to return true*/
//   activeGame = true;
//   /*using an array based on co-ordinates (x,y)for the game board ie 0,0 being the col&row poistion 1 this is called a multi-mentional array. upper left co-ordinate will begin at 0,0 and will incremant by x+1 if we go right and y+1 when we move down
//   eg: board co-ordinates values
//    (y|x)
//   |0,0| 0,1| 0,2|
//   |1,0| 1,1| 1,2|
//   |2,0| 2,1| 2,2| */
//
//   /*for loops will be used to create the the x-y row to col aritaration mentioned above using the <3x3> board*/
//
//   /*the gameboard will be assigned the arrays [row] and [col], this will make an array of cols and rows that represent the squares of my board, and will sit below the coin buttons/*/
//   for (row =0; row<=3; row++) {
//     gameboard[row] = [];
//     for (col =0; col<=4; col++) {
//       gameboard[col] = 0;
//     }
//   }
//   /*now that i have the for loops that will render the board i need a fuction that when called inititaes the array and hence creates the board, before i create the function i declare it within my begin game  */
//   renderBoard();
// /*who begins the game at start is assigned as player 1, this will mean that a black coin will be rendered first and then alternate to player two */
//   activePlayer = 1;
//   /*set up player turn ?*/
// }
//
// /*to call the function that renders the code and intermeidatley check for coin placements*/
// function renderBoard(){
//   for (col = 0; col<=3; col++){
//     document.writeIn("<td id='square_" + row + "_"+ col +"' class='board_square'></td>");
//     for (row = 0; row <=2; row++){
//       /*targetting the tag td for the square */
//       document.writeIn("<tr>");
//     }
//     /*document.getElementById('square_'+row+'_'+col).innerHTML ="<span class='piece player"+gameboard[row][col]+"'> </span>";*/
//   }
//   document.writeIn("</tr>");
// }
// /**/
// /**/
// /**/
// /**/
// /**/
// // to simulate the table i will be using loops to create the playable surface, this will be my rows and colums. 2 for loops are needed one for the 3rows and another for the 4colums
// /*for(var row=0; row<=2; row++) {
//   document.writeIn("<tr>");
//   for(var col=0; col<=3; col++){
//     document.writeIn()
//   }
// }*/
