
auto();
//请求截图
if(!requestScreenCapture()){
    toast("请求截图失败");
    exit();
}
firstGridLeftTopCorner={x:77,y:647}
//挨着第一个格子
rightGrid={x:330,y:647}
downGrid={x:77,y:921}
leftRightDistance=rightGrid.x-firstGridLeftTopCorner.x
upDownDistance=downGrid.y-firstGridLeftTopCorner.y
lightScreen();
NumberColors={
  8:"#BEC9FF",
  16:"#7DD7FF",
  32:"#A6FFE3",
  64:"#A9FF9D",
  128:"#FFE682",
  256:"#FFA942",
  512:"#D583FF",
  1024:"#FEFC38"
}



//AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI
//      下面是AI的功能区
// AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI



function moveName(move) {
  return {
     0: 'up',
     1: 'right',
     2: 'down',
     3: 'left'
   }[move];
 }

 var	global_max_score;
 var global_max_score_moves;

 function getBestMove(grid, runs, debug) {
     var bestScore = 0;
     var bestMove = -1;

     for (var i=0;i<4;i++) {
       console.log("getBestMove(grid, runs, debug)的参数=",grid, runs, debug)
       console.log("multiRandomRun开始")
       var res = multiRandomRun(grid, i, runs);
       console.log("multiRandomRun结束")
       var score = res.score;

       if (score >= bestScore) {
         bestScore = score;
         bestMove = i;
         bestAvgMoves = res.avg_moves;
       }

       if (debug) {
         console.log('Move ' + moveName(i) + ": Extra score - " + score);
       }
     }
     if(!grid.movesAvailable()) console.log('bug2');
     // assert move found
     if (bestMove == -1) {
       console.log('ERROR...');
       errorGrid = grid.clone();
     }

     console.log('Move ' + moveName(bestMove) + ": Extra score - " + bestScore + " Avg number of moves " + bestAvgMoves);

     return {move: bestMove, score: bestScore};
 }



 function multiRandomRun(grid, move, runs) {
   console.log(" multiRandomRun(grid, move, runs)的参数是", grid, move, runs)
   var total = 0.0;
   var min = 1000000;
   var max = 0;
   var total_moves = 0;

   for (var i=0 ; i < runs ; i++) {
    var beginTime = +new Date();
    var res = randomRun(grid, move);
    var endTime = +new Date();
    console.log("排序用时共计"+(endTime-beginTime)+"ms");


    console.log(res)
     console.log(i,"  randomRun(grid, move)的参数是\n", grid.toString(), move)
     var s = res.score;
     if (s == -1) return -1;

     total += s;
     total_moves += res.moves;
     if (s < min) min = s;
     if (s > max) max = s;
   }

   var avg = total / runs;
   var avg_moves = total_moves / runs;

 //	return max;
 //	return min;
 //	return avg+max;
   return {score: avg, avg_moves:avg_moves};
 }

 function randomRun(grid, move) {
   log("randomRun(grid, move)的参数是",grid, move)
  var beginTime = +new Date();



   var g = grid.clone();
   var endTime1 = +new Date();
   console.log("克隆一个格子花费的时间="+(endTime1-beginTime)+"ms");



   var score = 0;

   var beginTime2 = +new Date();
   var res = moveAndAddRandomTiles(g, move);
   var endTime2 = +new Date();
   console.log("执行一次moveAndAddRandomTiles的时间是="+(endTime2-beginTime2)+"ms");




   if (!res.moved) {
     return -1; // can't start
   }



   var beginTime3 = +new Date();

   sss=!g.movesAvailable()
   log(sss)


   var endTime3 = +new Date();
   console.log("执行一次sss的时间是="+(endTime3-beginTime3)+"ms");



   score += res.score;

   // run til we can't
   var moves=1;
   while (true) {





     if (!g.movesAvailable()) break;




     var beginTime3 = +new Date();

     var res = g.move(Math.floor(Math.random() * 4));




     if (!res.moved) continue;

     score += res.score;
     g.addRandomTile();
     moves++;


     var endTime3 = +new Date();
     console.log("执行一次循环的时间是="+(endTime3-beginTime3)+"ms");





   }
   // grid done.




   var endTime = +new Date();
   console.log("执行一次randomRun的时间="+(endTime-beginTime)+"ms");
   exit()
   return {score:score, moves:moves};
 }

 function moveAndAddRandomTiles(grid, direction) {
   var res = grid.move(direction);
   if (res.moved) grid.addRandomTile();
   return res;
 }

 // performs a search and returns the best move
 function AI_getBest(grid, debug) {
   var runs = document.getElementById('run-count').value;
     return getBestMove(grid, runs, debug);
 }





//AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI
//      上面是AI的功能区
// AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI



// ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■
//      下面是方块的功能区
// ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■

function Tile(position, value) {
  this.x                = position.x;
  this.y                = position.y;
  this.value            = value || 2;

  this.previousPosition = null;
  this.mergedFrom       = null; // Tracks tiles that merged together
}

Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y };
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
};

Tile.prototype.clone = function() {
  newTile = new Tile({ x: this.x, y: this.y }, this.value);
  //newTile.previousPosition = { x: this.previousPosition.x, y: this.previousPosition.y };
  //newTile.mergedFrom = { x: this.previousPosition.x, y: this.previousPosition.y };
  return newTile;
}



// ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■
//      上面是方块的功能区
// ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■



//□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□
//      下面是格子的功能区
// □□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□



function Grid(size) {
  this.size = size;
  this.startTiles   = 2;

  this.cells = [];

  this.build();
  this.playerTurn = true;
}

// pre-allocate these objects (for speed)
Grid.prototype.indexes = [];
for (var x=0; x<4; x++) {
  Grid.prototype.indexes.push([]);
  for (var y=0; y<4; y++) {
    Grid.prototype.indexes[x].push( {x:x, y:y} );
  }
}

// Build a grid of the specified size
Grid.prototype.build = function () {
  for (var x = 0; x < this.size; x++) {
    var row = this.cells[x] = [];

    for (var y = 0; y < this.size; y++) {
      row.push(null);
    }
  }
};


// Find the first available random position
// Note: Optimized by Ronen
Grid.prototype.randomAvailableCell = function () {
  var count = 0;
  for (var x = 0; x < this.size; x++) {
    for (var y = 0; y < this.size; y++) {
      if (!this.cells[x][y]) {
		count++;
	  }
    }
  }
  if (count==0) return null; // shouldn't happen

  var choice = Math.floor(Math.random() * count);
  count = 0;
  for (var x = 0; x < this.size; x++) {
    for (var y = 0; y < this.size; y++) {
	  if (this.cells[x][y]) continue;

	  if (count == choice) return {x:x, y:y};

	  count++;
    }
  }

  console.log("should not be here");

};

Grid.prototype.availableCells = function () {
  var cells = [];
  var self = this;

  this.eachCell(function (x, y, tile) {
    if (!tile) {
      //cells.push(self.indexes[x][y]);
      cells.push( {x:x, y:y} );
    }
  });

  return cells;
};

// Call callback for every cell
Grid.prototype.eachCell = function (callback) {
  for (var x = 0; x < this.size; x++) {
    for (var y = 0; y < this.size; y++) {
      callback(x, y, this.cells[x][y]);
    }
  }
};

// Check if there are any cells available
// Note: Optimized by Ronen
Grid.prototype.cellsAvailable = function () {
  for (var x = 0; x < this.size; x++) {
    for (var y = 0; y < this.size; y++) {
      if (!this.cells[x][y]) return true;
    }
  }
  return false;
};



// Check if the specified cell is taken
Grid.prototype.cellAvailable = function (cell) {
  return !this.cellOccupied(cell);
};

Grid.prototype.cellOccupied = function (cell) {
  return !!this.cellContent(cell);
};

Grid.prototype.cellContent = function (cell) {
  if (this.withinBounds(cell)) {
    return this.cells[cell.x][cell.y];
  } else {
    return null;
  }
};

// Inserts a tile at its position
Grid.prototype.insertTile = function (tile) {
  this.cells[tile.x][tile.y] = tile;
};

Grid.prototype.removeTile = function (tile) {
  this.cells[tile.x][tile.y] = null;
};

Grid.prototype.withinBounds = function (position) {
  return position.x >= 0 && position.x < this.size &&
         position.y >= 0 && position.y < this.size;
};

Grid.prototype.clone = function() {
  newGrid = new Grid(this.size);
  newGrid.playerTurn = this.playerTurn;
  for (var x = 0; x < this.size; x++) {
    for (var y = 0; y < this.size; y++) {
      if (this.cells[x][y]) {
        newGrid.insertTile(this.cells[x][y].clone());
      }
    }
  }
  return newGrid;
};

// Set up the initial tiles to start the game with
Grid.prototype.addStartTiles = function () {
  for (var i=0; i<this.startTiles; i++) {
    this.addRandomTile();
  }
};

// Adds a tile in a random position
Grid.prototype.addRandomTile = function () {
  if (this.cellsAvailable()) {
    var value = Math.random() < 0.9 ? 2 : 4;
    //var value = Math.random() < 0.9 ? 256 : 512;
    var tile = new Tile(this.randomAvailableCell(), value);

    this.insertTile(tile);
  }
};

// Save all tile positions and remove merger info
Grid.prototype.prepareTiles = function () {
  this.eachCell(function (x, y, tile) {
    if (tile) {
      tile.mergedFrom = null;
      tile.savePosition();
    }
  });
};

// Move a tile and its representation
Grid.prototype.moveTile = function (tile, cell) {
  this.cells[tile.x][tile.y] = null;
  this.cells[cell.x][cell.y] = tile;
  tile.updatePosition(cell);
};


Grid.prototype.vectors = {
  0: { x: 0,  y: -1 }, // up
  1: { x: 1,  y: 0 },  // right
  2: { x: 0,  y: 1 },  // down
  3: { x: -1, y: 0 }   // left
}

// Get the vector representing the chosen direction
Grid.prototype.getVector = function (direction) {
  // Vectors representing tile movement
  return this.vectors[direction];
};

// Move tiles on the grid in the specified direction
// returns true if move was successful
// Note: Optimized by Ronen
Grid.prototype.move = function (direction) {
  // 0: up, 1: right, 2:down, 3: left
  var self = this;

  var cell, tile;

  var vector     = this.getVector(direction);
  var traversals = this.buildTraversals(vector);
  var moved      = false;
  var score      = 0;
  var won        = false;

  // Save the current tile positions and remove merger information
  this.prepareTiles();

  // Traverse the grid in the right direction and move tiles
	for (var ix=0;ix<4;ix++) {
		for (var iy=0;iy<4;iy++) {
			var x = traversals.x[ix];
			var y = traversals.y[iy];

      cell = self.indexes[x][y];
      tile = self.cellContent(cell);

      if (tile) {
        //if (debug) {
          //console.log('tile @', x, y);
        //}
        var positions = self.findFarthestPosition(cell, vector);
        var next      = self.cellContent(positions.next);

        // Only one merger per row traversal?
        if (next && next.value === tile.value && !next.mergedFrom) {
          var merged = new Tile(positions.next, tile.value * 2);
          merged.mergedFrom = [tile, next];

          self.insertTile(merged);
          self.removeTile(tile);

          // Converge the two tiles' positions
          tile.updatePosition(positions.next);

          // Update the score
          score += merged.value;

          // The mighty 2048 tile
          if (merged.value === 2048) {
            won = true;
          }
        } else {
          //if (debug) {
            //console.log(cell);
            //console.log(tile);
          //}
          self.moveTile(tile, positions.farthest);
        }

        if (!self.positionsEqual(cell, tile)) {
          self.playerTurn = false;
          //console.log('setting player turn to ', self.playerTurn);
          moved = true; // The tile moved from its original cell!
        }
      }
    }
  }

  //console.log('returning, playerturn is', self.playerTurn);
  //if (!moved) {
    //console.log('cell', cell);
    //console.log('tile', tile);
    //console.log('direction', direction);
    //console.log(this.toString());
  //}
  return {moved: moved, score: score, won: won};
};

Grid.prototype.computerMove = function() {
  this.addRandomTile();
  this.playerTurn = true;
}

// Build a list of positions to traverse in the right order
Grid.prototype.buildTraversals = function (vector) {
  var traversals = { x: [], y: [] };

  for (var pos = 0; pos < this.size; pos++) {
    traversals.x.push(pos);
    traversals.y.push(pos);
  }

  // Always traverse from the farthest cell in the chosen direction
  if (vector.x === 1) traversals.x = traversals.x.reverse();
  if (vector.y === 1) traversals.y = traversals.y.reverse();

  return traversals;
};

Grid.prototype.findFarthestPosition = function (cell, vector) {
  var previous;
  // Progress towards the vector direction until an obstacle is found
  do {
    previous = cell;
    cell     = { x: previous.x + vector.x, y: previous.y + vector.y };
  } while (this.withinBounds(cell) &&
           this.cellAvailable(cell));

  return {
    farthest: previous,
    next: cell // Used to check if a merge is required
  };
};

Grid.prototype.movesAvailable = function () {
  return this.cellsAvailable() || this.tileMatchesAvailable();
};

// Check for available matches between tiles (more expensive check)
// returns the number of matches
Grid.prototype.tileMatchesAvailable = function () {
  var self = this;

  //var matches = 0;

  var tile;

  for (var x = 0; x < this.size; x++) {
    for (var y = 0; y < this.size; y++) {
      tile = this.cellContent({ x: x, y: y });

      if (tile) {
        for (var direction = 0; direction < 4; direction++) {
          var vector = self.getVector(direction);
          var cell   = { x: x + vector.x, y: y + vector.y };

          var other  = self.cellContent(cell);

          if (other && other.value === tile.value) {
            return true; //matches++; // These two tiles can be merged
          }
        }
      }
    }
  }

  //console.log(matches);
  return false; //matches;
};

Grid.prototype.positionsEqual = function (first, second) {
  return first.x === second.x && first.y === second.y;
};

Grid.prototype.toString = function() {
  string = '';
  for (var i=0; i<4; i++) {
    for (var j=0; j<4; j++) {
      if (this.cells[j][i]) {
        string += this.cells[j][i].value + ' ';
      } else {
        string += '_ ';
      }
    }
    string += '\n';
  }
  return string;
}

// counts the number of isolated groups.
Grid.prototype.islands = function() {
  var self = this;
  var mark = function(x, y, value) {
    if (x >= 0 && x <= 3 && y >= 0 && y <= 3 &&
        self.cells[x][y] &&
        self.cells[x][y].value == value &&
        !self.cells[x][y].marked ) {
      self.cells[x][y].marked = true;

      for (direction in [0,1,2,3]) {
        var vector = self.getVector(direction);
        mark(x + vector.x, y + vector.y, value);
      }
    }
  }

  var islands = 0;

  for (var x=0; x<4; x++) {
    for (var y=0; y<4; y++) {
      if (this.cells[x][y]) {
        this.cells[x][y].marked = false
      }
    }
  }
  for (var x=0; x<4; x++) {
    for (var y=0; y<4; y++) {
      if (this.cells[x][y] &&
          !this.cells[x][y].marked) {
        islands++;
        mark({ x:x, y:y }, this.cells[x][y].value);
      }
    }
  }

  return islands;
}


// measures how smooth the grid is (as if the values of the pieces
// were interpreted as elevations). Sums of the pairwise difference
// between neighboring tiles (in log space, so it represents the
// number of merges that need to happen before they can merge).
// Note that the pieces can be distant
Grid.prototype.smoothness = function() {
  var smoothness = 0;
  for (var x=0; x<4; x++) {
    for (var y=0; y<4; y++) {
      if ( this.cellOccupied( this.indexes[x][y] )) {
        var value = Math.log(this.cellContent( this.indexes[x][y] ).value) / Math.log(2);
        for (var direction=1; direction<=2; direction++) {
          var vector = this.getVector(direction);
          var targetCell = this.findFarthestPosition(this.indexes[x][y], vector).next;

          if (this.cellOccupied(targetCell)) {
            var target = this.cellContent(targetCell);
            var targetValue = Math.log(target.value) / Math.log(2);
            smoothness -= Math.abs(value - targetValue);
          }
        }
      }
    }
  }
  return smoothness;
}

Grid.prototype.monotonicity = function() {
  var self = this;
  var marked = [];
  var queued = [];
  var highestValue = 0;
  var highestCell = {x:0, y:0};
  for (var x=0; x<4; x++) {
    marked.push([]);
    queued.push([]);
    for (var y=0; y<4; y++) {
      marked[x].push(false);
      queued[x].push(false);
      if (this.cells[x][y] &&
          this.cells[x][y].value > highestValue) {
        highestValue = this.cells[x][y].value;
        highestCell.x = x;
        highestCell.y = y;
      }
    }
  }

  increases = 0;
  cellQueue = [highestCell];
  queued[highestCell.x][highestCell.y] = true;
  markList = [highestCell];
  markAfter = 1; // only mark after all queued moves are done, as if searching in parallel

  var markAndScore = function(cell) {
    markList.push(cell);
    var value;
    if (self.cellOccupied(cell)) {
      value = Math.log(self.cellContent(cell).value) / Math.log(2);
    } else {
      value = 0;
    }
    for (direction in [0,1,2,3]) {
      var vector = self.getVector(direction);
      var target = { x: cell.x + vector.x, y: cell.y+vector.y }
      if (self.withinBounds(target) && !marked[target.x][target.y]) {
        if ( self.cellOccupied(target) ) {
          targetValue = Math.log(self.cellContent(target).value ) / Math.log(2);
          if ( targetValue > value ) {
            //console.log(cell, value, target, targetValue);
            increases += targetValue - value;
          }
        }
        if (!queued[target.x][target.y]) {
          cellQueue.push(target);
          queued[target.x][target.y] = true;
        }
      }
    }
    if (markAfter == 0) {
      while (markList.length > 0) {
        var cel = markList.pop();
        marked[cel.x][cel.y] = true;
      }
      markAfter = cellQueue.length;
    }
  }

  while (cellQueue.length > 0) {
    markAfter--;
    markAndScore(cellQueue.shift())
  }

  return -increases;
}

// measures how monotonic the grid is. This means the values of the tiles are strictly increasing
// or decreasing in both the left/right and up/down directions
Grid.prototype.monotonicity2 = function() {
  // scores for all four directions
  var totals = [0, 0, 0, 0];

  // up/down direction
  for (var x=0; x<4; x++) {
    var current = 0;
    var next = current+1;
    while ( next<4 ) {
      while ( next<4 && !this.cellOccupied( this.indexes[x][next] )) {
        next++;
      }
      if (next>=4) { next--; }
      var currentValue = this.cellOccupied({x:x, y:current}) ?
        Math.log(this.cellContent( this.indexes[x][current] ).value) / Math.log(2) :
        0;
      var nextValue = this.cellOccupied({x:x, y:next}) ?
        Math.log(this.cellContent( this.indexes[x][next] ).value) / Math.log(2) :
        0;
      if (currentValue > nextValue) {
        totals[0] += nextValue - currentValue;
      } else if (nextValue > currentValue) {
        totals[1] += currentValue - nextValue;
      }
      current = next;
      next++;
    }
  }

  // left/right direction
  for (var y=0; y<4; y++) {
    var current = 0;
    var next = current+1;
    while ( next<4 ) {
      while ( next<4 && !this.cellOccupied( this.indexes[next][y] )) {
        next++;
      }
      if (next>=4) { next--; }
      var currentValue = this.cellOccupied({x:current, y:y}) ?
        Math.log(this.cellContent( this.indexes[current][y] ).value) / Math.log(2) :
        0;
      var nextValue = this.cellOccupied({x:next, y:y}) ?
        Math.log(this.cellContent( this.indexes[next][y] ).value) / Math.log(2) :
        0;
      if (currentValue > nextValue) {
        totals[2] += nextValue - currentValue;
      } else if (nextValue > currentValue) {
        totals[3] += currentValue - nextValue;
      }
      current = next;
      next++;
    }
  }

  return Math.max(totals[0], totals[1]) + Math.max(totals[2], totals[3]);
}

Grid.prototype.maxValue = function() {
  var max = 0;
  for (var x=0; x<4; x++) {
    for (var y=0; y<4; y++) {
      if (this.cellOccupied(this.indexes[x][y])) {
        var value = this.cellContent(this.indexes[x][y]).value;
        if (value > max) {
          max = value;
        }
      }
    }
  }

  return Math.log(max) / Math.log(2);
}

// WIP. trying to favor top-heavy distributions (force consolidation of higher value tiles)
/*
Grid.prototype.valueSum = function() {
  var valueCount = [];
  for (var i=0; i<11; i++) {
    valueCount.push(0);
  }

  for (var x=0; x<4; x++) {
    for (var y=0; y<4; y++) {
      if (this.cellOccupied(this.indexes[x][y])) {
        valueCount[Math.log(this.cellContent(this.indexes[x][y]).value) / Math.log(2)]++;
      }
    }
  }

  var sum = 0;
  for (var i=1; i<11; i++) {
    sum += valueCount[i] * Math.pow(2, i) + i;
  }

  return sum;
}
*/

// check for win
Grid.prototype.isWin = function() {
  var self = this;
  for (var x=0; x<4; x++) {
    for (var y=0; y<4; y++) {
      if (self.cellOccupied(this.indexes[x][y])) {
        if (self.cellContent(this.indexes[x][y]).value == 2048) {
          return true;
        }
      }
    }
  }
  return false;
}

//Grid.prototype.zobristTable = {}
//for
//Grid.prototype.hash = function() {
//}




//□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□
//      上面是格子的功能区
// □□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□






















while(1){

  try{

    while(1){
    //---------------------无限循环开始-----------------------------
      grids=recogniseGrid()
      // gridsLog(grids)
      // log(grids)
      // 转换完毕,添加AI,Tile,Grid
      newGrid=new Grid(4)
      for(let i=0;i<grids.length;i++){
        let newTile= new Tile(grids[i][0],grids[i][1])
        log(newTile)
        newGrid.insertTile(newTile)
      }
      // log(newGrid.toString())


animationDelay = 150;
minSearchTime = 10;
debug=false
minSearchTime=100;
//---------------网页版AI控制区-----------------------------

log("到达网页ＡＩ计算方向区域开头")
log(newGrid)
var best = getBestMove(newGrid, minSearchTime, debug);
// Move up: Extra score - 1086.32 Avg number of moves 105.1
log("到达网页ＡＩ计算方向区域末尾")
log(best)
exit()
//-------------------------------------------


      newAI=new AI(newGrid)
      bestDirectionNum=newAI.getBest().move
      bestDirection=newAI.translate(bestDirectionNum)
      // log("bestDirection=",bestDirection)
      滑动(bestDirection)
      sleep(25)
      // exit()


      // tile=[{x:x,y:y},value]  || null
      // function Tile(position, value) {
      //   this.x                = position.x;
      //   this.y                = position.y;
      //   this.value            = value || 2;

      //   this.previousPosition = null;
      //   this.mergedFrom       = null; // Tracks tiles that merged together
      // }


      // Grid.prototype.insertTile = function (tile) {
      //   this.cells[tile.x][tile.y] = tile;
      // };

      // 更新格子信息
      // newGrid = new Grid(4);
      // for(var item of grids){
      //   if(item){
      //     let tile=new Tile({x:item.x,y:item.y},item.num)
      //     newGrid.insertTile(tile)
      //   }
      // }
      ////log("\n插入识别后的格子=\n",newGrid.toString())
      // exit()

      // ai = new AI(newGrid);
        //  00 10 20 30
        //  01 11 21 31
        //  02 12 22 32
        //  03 13 23 33
    }
  }catch(e){
    log(e)
  }
}



























//让打印更醒目
function logStars(content,num){
  let n=num || 300
  let s=""
  for(i=0;i<n;i++){
    s=s+"*"
  }
  log(s)
  log(content)
  log(s)
}































//-------------------------识别数字函数------------------------------------

function recogniseGrid(){
  //初始化十六个格子数字都是0
  let grids = new Array(16);
  let k=0
  let j=0
  for(var i=0;i<grids.length;i++){
    if(i==4 || i==8 || i==12){
      k=0
    }
    if(i==4 || i==8 || i==12){
      j++
    }
    let x=firstGridLeftTopCorner.x+k*leftRightDistance
    let y=firstGridLeftTopCorner.y+j*upDownDistance
    grids[i] = {num:0,x:x,y:y};
    k++;
  }
  img=captureScreen()
  for(var i=0;i<16;i++){
    let color=images.pixel(img, grids[i].x, grids[i].y)
    color=colors.toString(color)
    try{
      Object.keys(NumberColors).forEach(function(key){
        if(colors.isSimilar(color,NumberColors[key])){
          grids[i].num=parseInt(key)
          throw err = new Error("\n第"+i+"个格子是"+key);
        }
      });
    }catch( e ) {
    }
  }
  // log(grids)
  return oordinateTransformationIntoSequenceNumber(grids)
}


function oordinateTransformationIntoSequenceNumber(grids){
  // tile=[{x:x,y:y},value]  || null

  // gridsLog(grids)
  // log(grids)
  // 0,0,0,0,
  // 0,8,0,0,
  // 0,16,16,16,
  // 8,8,8,32,

  // [ { num: 0, x: 77, y: 647 },
  //   { num: 0, x: 330, y: 647 },
  //   { num: 0, x: 583, y: 647 },
  //   { num: 0, x: 836, y: 647 },
  //   { num: 0, x: 77, y: 921 },
  //   { num: 8, x: 330, y: 921 },
  //   { num: 0, x: 583, y: 921 },
  //   { num: 0, x: 836, y: 921 },
  //   { num: 0, x: 77, y: 1195 },
  //   { num: 16, x: 330, y: 1195 },
  //   { num: 16, x: 583, y: 1195 },
  //   { num: 16, x: 836, y: 1195 },
  //   { num: 8, x: 77, y: 1469 },
  //   { num: 8, x: 330, y: 1469 },
  //   { num: 8, x: 583, y: 1469 },
  //   { num: 32, x: 836, y: 1469 } ]

  // tile=[{x:x,y:y},value]  || null
    //  00 10 20 30
    //  01 11 21 31
    //  02 12 22 32
    //  03 13 23 33


  let newGrids=[]
  let k=0
  for(let i=0;i<4;i++){
    for(let j=0;j<4;j++){
      let x=j
      let y=i
      let num=grids[k++].num
      let item={x:x,y:y,num:num}
      newGrids.push(item)
    }
  }
  return convertDataToAiStyle(newGrids)
}





function convertDataToAiStyle(info){
  let tiles=[]
  for(let i=0;i<info.length;i++){
    if(info[i].num==0){
    }else{
      tiles.push([{x:info[i].x,y:info[i].y},info[i].num])
    }
  }
  return tiles
}










function gridsLog(grids){
  let gridNums="\n"
  for(var i=0;i<16;i++){
    if(i==4 || i==8 || i==12){
      gridNums=gridNums+"\n"
    }
    if(grids[i]){
      gridNums=gridNums+grids[i]["num"]+","
    }else{
      gridNums=gridNums+"_"+","
    }
  }
  log(gridNums)
}




























//-------------------------点亮屏幕------------------------------------

function lightScreen(){
  let isScreenOn=device.isScreenOn()
  if(isScreenOn){
  }else{
    device.wakeUpIfNeeded()
    sleep(1000)
    //解锁屏幕
    unlockingScreen()
    sleep(1000)
  }
}

function unlockingScreen(){
  //log("开始上滑")
  swipe(520,1361, 547,335, 300)
  sleep(100)
  //log("九宫格解锁")
  gesture(300, [253,1058], [541,1054], [536,1342],[537,1627])
}

































//-----------------滑动动作------------------------------------------
function 滑动(direction){
  switch(direction)
  {
    case 'up':
      上滑()
      break;
    case 'down':
      下滑()
      break;
    case 'left':
      左滑()
      break;
    case 'right':
      右滑()
      break;
    default:
    log('不存在这个滑动方向maxNum,',direction)
  }
}
function 上滑(){
  let xy=[461,1084,487,512]
  swipe(xy[0],xy[1],xy[2],xy[3],1);
}
function 下滑(){
  let xy=[487,512,461,1084]
  swipe(xy[0],xy[1],xy[2],xy[3],1);
}
function 左滑(){
  let xy=[972,527,109,525]
  swipe(xy[0],xy[1],xy[2],xy[3],1);
}
function 右滑(){
  let xy=[309,525,972,527]
  swipe(xy[0],xy[1],xy[2],xy[3],1);
}
