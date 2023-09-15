const gameBoard = [document.getElementById("block1"),
document.getElementById("block2"),
document.getElementById("block3"),
document.getElementById("block4"),
document.getElementById("block5"),
document.getElementById("block6"),
document.getElementById("block7"),
document.getElementById("block8"),
document.getElementById("block9"),
]

const block1 = document.getElementById("block1").textContent;
const block2 = document.getElementById("block2").textContent;
const block3 = document.getElementById("block3").textContent;
const block4 = document.getElementById("block4").textContent;
const block5 = document.getElementById("block5").textContent;
const block6 = document.getElementById("block6").textContent;
const block7 = document.getElementById("block7").textContent;
const block8 = document.getElementById("block8").textContent;
const block9 = document.getElementById("block9").textContent;

// Check for Player 1 wins (X)
if (
    (block1 === "X" && block2 === "X" && block3 === "X") ||
    (block4 === "X" && block5 === "X" && block6 === "X") ||
    (block7 === "X" && block8 === "X" && block9 === "X") ||
    (block1 === "X" && block4 === "X" && block7 === "X") ||
    (block2 === "X" && block5 === "X" && block8 === "X") ||
    (block3 === "X" && block6 === "X" && block9 === "X") ||
    (block1 === "X" && block5 === "X" && block9 === "X") ||
    (block3 === "X" && block5 === "X" && block7 === "X")
) {
    document.getElementById("playerTurn").textContent = "PLAYER 1 WINS";
}
// Check for Player 2 wins (O)
else if (
    (block1 === "O" && block2 === "O" && block3 === "O") ||
    (block4 === "O" && block5 === "O" && block6 === "O") ||
    (block7 === "O" && block8 === "O" && block9 === "O") ||
    (block1 === "O" && block4 === "O" && block7 === "O") ||
    (block2 === "O" && block5 === "O" && block8 === "O") ||
    (block3 === "O" && block6 === "O" && block9 === "O") ||
    (block1 === "O" && block5 === "O" && block9 === "O") ||
    (block3 === "O" && block5 === "O" && block7 === "O")
) {
    document.getElementById("playerTurn").textContent = "PLAYER 2 WINS";
}

const game = (function(){
    let turn = "X"

    function toggleTurn () {
        turn = turn === "X" ? "O" : "X";
    }

    function onBlockClick (blockID){
        let block = document.getElementById(blockID)

        if (block.textContent === ""){
            block.textContent = turn;
        }
        toggleTurn();
    }

    return {onBlockClick: onBlockClick}
}

   
)();