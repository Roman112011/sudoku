let write = "";

const sudokuGrid = Array(9).fill().map(() => Array(9).fill(0));

function number(numbers) {
    write = numbers;
    document.getElementById("number").textContent = `Number: ${numbers}`;
}

function canPlaceNumber(row, col, number) {
    if (sudokuGrid[row].includes(number)) return false;

    for (let i = 0; i < 9; i++) {
        if (sudokuGrid[i][col] === number) return false;
    }

    let startRow = Math.floor(row / 3) * 3;
    let startCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (sudokuGrid[startRow + i][startCol + j] === number) return false;
        }
    }

    return true;
}

function full(cellId) {
    let cell = `cell-${cellId}`;

    let row = Math.floor((cellId - 1) / 9);
    let col = (cellId - 1) % 9;

    let cellElement = document.getElementById(cell);

    if (canPlaceNumber(row, col, write)) {
        cellElement.textContent = write;
        sudokuGrid[row][col] = write;
    } else {
        if (cellElement) {
            cellElement.style.backgroundColor = "red";
            setTimeout(() => {
                cellElement.style.backgroundColor = "grey";
            }, 250);
        }
    }
}