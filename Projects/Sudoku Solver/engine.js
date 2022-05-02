function sudokuGrid() {
  var slot1 = []

  slot1.push(document.getElementById("pin").value);
  slot1.push(document.getElementById("pin1").value);
  slot1.push(document.getElementById("pin2").value);
  slot1.push(document.getElementById("pin3").value);
  slot1.push(document.getElementById("pin4").value);
  slot1.push(document.getElementById("pin5").value);
  slot1.push(document.getElementById("pin6").value);
  slot1.push(document.getElementById("pin7").value);
  slot1.push(document.getElementById("pin8").value);



  var slot2 = []

  slot2.push(document.getElementById("pin9").value);
  slot2.push(document.getElementById("pin10").value);
  slot2.push(document.getElementById("pin11").value);
  slot2.push(document.getElementById("pin12").value);
  slot2.push(document.getElementById("pin13").value);
  slot2.push(document.getElementById("pin14").value);
  slot2.push(document.getElementById("pin15").value);
  slot2.push(document.getElementById("pin16").value);
  slot2.push(document.getElementById("pin17").value);


  var slot3 = []

  slot3.push(document.getElementById("pin18").value);
  slot3.push(document.getElementById("pin19").value);
  slot3.push(document.getElementById("pin20").value);
  slot3.push(document.getElementById("pin21").value);
  slot3.push(document.getElementById("pin22").value);
  slot3.push(document.getElementById("pin23").value);
  slot3.push(document.getElementById("pin24").value);
  slot3.push(document.getElementById("pin25").value);
  slot3.push(document.getElementById("pin26").value);



  var slot4 = []

  slot4.push(document.getElementById("pin27").value);
  slot4.push(document.getElementById("pin28").value);
  slot4.push(document.getElementById("pin29").value);
  slot4.push(document.getElementById("pin30").value);
  slot4.push(document.getElementById("pin31").value);
  slot4.push(document.getElementById("pin32").value);
  slot4.push(document.getElementById("pin33").value);
  slot4.push(document.getElementById("pin34").value);
  slot4.push(document.getElementById("pin35").value);



  var slot5 = []

  slot5.push(document.getElementById("pin36").value);
  slot5.push(document.getElementById("pin37").value);
  slot5.push(document.getElementById("pin38").value);
  slot5.push(document.getElementById("pin39").value);
  slot5.push(document.getElementById("pin40").value);
  slot5.push(document.getElementById("pin41").value);
  slot5.push(document.getElementById("pin42").value);
  slot5.push(document.getElementById("pin43").value);
  slot5.push(document.getElementById("pin44").value);



  var slot6 = []

  slot6.push(document.getElementById("pin45").value);
  slot6.push(document.getElementById("pin46").value);
  slot6.push(document.getElementById("pin47").value);
  slot6.push(document.getElementById("pin48").value);
  slot6.push(document.getElementById("pin49").value);
  slot6.push(document.getElementById("pin50").value);
  slot6.push(document.getElementById("pin51").value);
  slot6.push(document.getElementById("pin52").value);
  slot6.push(document.getElementById("pin53").value);



  var slot7 = []

  slot7.push(document.getElementById("pin54").value);
  slot7.push(document.getElementById("pin55").value);
  slot7.push(document.getElementById("pin56").value);
  slot7.push(document.getElementById("pin57").value);
  slot7.push(document.getElementById("pin58").value);
  slot7.push(document.getElementById("pin59").value);
  slot7.push(document.getElementById("pin60").value);
  slot7.push(document.getElementById("pin61").value);
  slot7.push(document.getElementById("pin62").value);



  var slot8 = []

  slot8.push(document.getElementById("pin63").value);
  slot8.push(document.getElementById("pin64").value);
  slot8.push(document.getElementById("pin65").value);
  slot8.push(document.getElementById("pin66").value);
  slot8.push(document.getElementById("pin67").value);
  slot8.push(document.getElementById("pin68").value);
  slot8.push(document.getElementById("pin69").value);
  slot8.push(document.getElementById("pin70").value);
  slot8.push(document.getElementById("pin71").value);


  var slot9 = []

  slot9.push(document.getElementById("pin72").value);
  slot9.push(document.getElementById("pin73").value);
  slot9.push(document.getElementById("pin74").value);
  slot9.push(document.getElementById("pin75").value);
  slot9.push(document.getElementById("pin76").value);
  slot9.push(document.getElementById("pin77").value);
  slot9.push(document.getElementById("pin78").value);
  slot9.push(document.getElementById("pin79").value);
  slot9.push(document.getElementById("pin80").value);

  function createTable(tableData) {
    var centered = document.createElement('center');
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');

    tableData.forEach(function(rowData) {
      var row = document.createElement('tr');

      rowData.forEach(function(cellData) {
        var cell = document.createElement('td');
        cell.appendChild(document.createTextNode(cellData));
        row.appendChild(cell);
      });

      tableBody.appendChild(row);
    });

    table.appendChild(tableBody);
    centered.appendChild(table)

    document.body.appendChild(centered);
  }

  var sudoku_board = [slot1, slot2, slot3, slot4, slot5, slot6, slot7, slot8, slot9]
  sodokoSolver(sudoku_board);
  console.log(sudoku_board);
  document.body.innerHTML = '<h1 align="center" style="font-family: Avenir, Heveltica, sans-serif;">Sudoku solved!</h1>';
  createTable(sudoku_board)
  function isValid(board, row, col, k) {
      for (let i = 0; i < 9; i++) {
          const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
          const n = 3 * Math.floor(col / 3) + i % 3;
          if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
            return false;
          }
      }
      return true;
  }


  function sodokoSolver(data) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (data[i][j] == '0') {
          for (let k = 1; k <= 9; k++) {
            if (isValid(data, i, j, k)) {
              data[i][j] = `${k}`;
            if (sodokoSolver(data)) {
             return true;
            } else {
             data[i][j] = '0';
            }
           }
         }
         return false;
       }
     }
   }
   return true;
  }
  }



