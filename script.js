document.addEventListener("DOMContentLoaded", function() {
    const board = document.getElementById("chessboard");

    // Create the chessboard
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement("div");
            square.classList.add("square");

            // Alternate between dark and light squares
            if ((row + col) % 2 === 0) {
                square.classList.add("light");
            } else{
                square.classList.add("dark");
            }

            board.appendChild(square);
        }
    }
    // Function to highlight squares attacked by a bishop
    function highlightBishopMoves(startRow, startCol) {
        const squares = document.querySelectorAll(".square");

        // Clear previous highlights
        squares.forEach(square => square.classList.remove("highlight"));

    // Highlight squares diagonally attacked by the bishop
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            if (Math.abs(row - startRow) === Math.abs(col - startCol)) {
                const index = row * 8 + col;
                squares[index].classList.add("highlight");
            }
        }
    }
}
// Add event listener to each square
board.addEventListener("mouseover", function(event) {
    const square = event.target;
    const squares = document.querySelectorAll(".square");
    const index = Array.from(squares).indexOf(square);

    const row = Math.floor(index / 8);
        const col = index % 8;

        highlightBishopMoves(row, col);
    });
});