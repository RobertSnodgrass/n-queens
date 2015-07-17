/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.__RECURSIONDEPTH__ = 0
window.__SOLUTION__ = []
window.__SOLUTIONCOUNT__ = 0
window.findNRooksSolution = function(n) {
  var solution = [];
  var board;
  var solutionCount;
  // 
  // board or new board
  //
  if (n.hasOwnProperty('attributes')){
    var prevboard = n.rows()
    n = n.attributes.n
    board = new Board({'n':n})
    for (var i = 0;i < n;i++){
      board.attributes[i] = _.map(board.rows()[i], function(value, j){return value | prevboard[i][j]})
    }
  } else {
    board = new Board({'n':n})
  }

  // iterate row
  for (var i = 0;i < n;i++){
    // iterate column
    for (var j = 0;j < n;j++){
      // piece already placed
      if ( board.attributes[i][j] ){
        break
      }


      //
      // place piece
      //
      board.togglePiece(i,j)
      //
      //

      // check conflicts
      if ( board.hasAnyRooksConflicts() ){
        board.togglePiece(i,j)
        break
      }

      // if solution push to global solution
      if (i + 1 === n && window.__RECURSIONDEPTH__){ // if in last row and within a recursion
        window.__SOLUTION__.push(board.rows())
        return true
      }
      //
      // 
      // no piece
      // no conflict
      // ???? what decision would cause this to recurse
      // recurse
      var result = window.findNRooksSolution(board)
      // 
      if (!result) {board.togglePiece(i,j)}
    }
  }
  window.__SOLUTION__.push(board.rows())
  for (var i in window.__SOLUTION__){
    console.log(JSON.stringify(i));
  }
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  // var solutionCount = 0; //fixme
  // var board = new Board({n:5})
  // var boards = []

  // // board.attributes[0][0]
  // for (var i = 0;i > n;i++){
  //   for (var j = 0;j > n; i++){
  //     if (i === 0){ board.attributes[i][j] = 1 }
  //     for (var k = j +1;k > n;k++){
  //       //board.togglePiece(i+1, k)
  //       board.attributes[i+1][k] = 1
  //       boards.push(board)
  //       board.attributes[i+1][k] = 0
  //       // if (board.hasColConflictAt(j)){
  //       //   board.attributes[j] = 0
  //       // }
  //       // if (board.hasRowConflictAt(j)){
  //       //   rowConflictCount++
  //       // }
  //     }
  //   }
  // }



  // }

  
  // //console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  // //solutionCount = [1, 1, 2, 6, 24, 120, 720, 5040, 40320][n]
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
