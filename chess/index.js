document.addEventListener('DOMContentLoaded', initialize_page);

let selectedCell = null;

function initialize_page() {
    const cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.addEventListener('click', handleCellClick);
    }
}

function handleCellClick(event) {
    const cell = event.target;
    const piece = cell.innerText.trim();

    if (selectedCell === null) {
        // Select a piece if present
        if (piece) {
            selectedCell = cell;
            cell.style.border = '2px solid red'; // Highlight selection
        }
    } else {
        // Attempt to move
        if (cell !== selectedCell && canMove(selectedCell, cell)) {
            cell.innerText = selectedCell.innerText;
            selectedCell.innerText = '';
            selectedCell.style.border = ''; // Remove highlight
            selectedCell = null;
        } else {
            // Deselect if clicking same or invalid
            selectedCell.style.border = '';
            selectedCell = null;
        }
    }
}

function canMove(fromCell, toCell) {
    const fromPiece = fromCell.innerText.trim();
    const toPiece = toCell.innerText.trim();

    // Basic validation: can move to empty cell or capture opposite piece
    if (!toPiece) return true; // Empty cell
    if (fromPiece.startsWith('B-') && toPiece.startsWith('W-')) return true; // Black captures white
    if (fromPiece.startsWith('W-') && toPiece.startsWith('B-')) return true; // White captures black
    return false;
}
