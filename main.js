var Game = (() => {
    let scoreX = 0;
    let scoreO = 0;
    let gameValues = ["", "", "", "", "", "", "", "", ""];
    let turn
    const gameBoard = document.querySelector(".gameBoard");
    let playerOne = "Player One"
    let playerTwo = "Player Two"
    let currentPlayer = turn;
    let unbeatableBot = false;
    let scores = {
        X: 1,
        O: -1,
        tie: 0,
    }

    const render = (gameValues) => {
        for (i in gameValues) {
            document.getElementById(`${i}`).innerHTML = gameValues[i];
        };
    };

    const pickStarter = () => {
        let headsOrTails = Math.floor(Math.random() * 2)
        if (headsOrTails == 1) {
            turn = playerOne
        } else {
            turn = playerTwo
        };
    };

    const submitNames = () => {
        playerOne = document.getElementById("playerOne").value
        playerTwo = document.getElementById("playerTwo").value
        document.getElementById("playerOne").value = ""
        document.getElementById("playerTwo").value = ""
        update()
        console.log("Submitted names")
    }


    const checkValidity = (id) => {
        if (!document.getElementById(id).textContent) {
            return true
        } else {
            return false
        };
    };

    const updateTurn = () => {
        if (turn === "X") {
            turn = "O";
            currentPlayer = playerOne
        } else {
            turn = "X"
            currentPlayer = playerTwo
        };
    };

    const checkForWin = () => {
        let winner = null
        let horizontalTop = [gameValues[0], gameValues[1], gameValues[2]];
        let horizontalMiddle = [gameValues[3], gameValues[4], gameValues[5]];
        let horizontalBottom = [gameValues[6], gameValues[7], gameValues[8]];
        let verticalLeft = [gameValues[0], gameValues[3], gameValues[6]];
        let verticalMiddle = [gameValues[1], gameValues[4], gameValues[7]];
        let verticalRight = [gameValues[2], gameValues[5], gameValues[8]];
        let diagonalLeft = [gameValues[0], gameValues[4], gameValues[8]];
        let diagonalRight = [gameValues[2], gameValues[4], gameValues[6]];

        if ((horizontalTop[0] == horizontalTop[1]) && (horizontalTop[1] == horizontalTop[2]) && (horizontalTop[0] != "")) {

            if (turn == "O") {
                scoreX++;
                winner = "X"
            } else {
                scoreO++;
                winner = "O"
            };
            reset()
        };

        if ((horizontalMiddle[0] == horizontalMiddle[1]) && (horizontalMiddle[1] == horizontalMiddle[2]) && (horizontalMiddle[0] != "")) {

            if (turn == "O") {
                scoreX++;
                winner = "X"
            } else {
                scoreO++;
                winner = "O"
            };
            reset()
        };

        if ((horizontalBottom[0] == horizontalBottom[1]) && (horizontalBottom[1] == horizontalBottom[2]) && (horizontalBottom[0] != "")) {

            if (turn == "O") {
                scoreX++;
                winner = "X"
            } else {
                scoreO++;
                winner = "O"
            };
            reset()
        };

        if ((verticalLeft[0] == verticalLeft[1]) && (verticalLeft[1] == verticalLeft[2]) && (verticalLeft[0] != "")) {

            if (turn == "O") {
                scoreX++;
                winner = "X"
            } else {
                scoreO++;
                winner = "O"
            };
            reset()
        };

        if ((verticalMiddle[0] == verticalMiddle[1]) && (verticalMiddle[1] == verticalMiddle[2]) && (verticalMiddle[0] != "")) {

            if (turn == "O") {
                scoreX++;
                winner = "X"
            } else {
                scoreO++;
                winner = "O"
            };
            reset()
        };

        if ((verticalRight[0] == verticalRight[1]) && (verticalRight[1] == verticalRight[2]) && (verticalRight[0] != "")) {

            if (turn == "O") {
                scoreX++;
                winner = "X"
            } else {
                scoreO++;
                winner = "O"
            };
            reset()
        };

        if ((diagonalLeft[0] == diagonalLeft[1]) && (diagonalLeft[1] == diagonalLeft[2]) && (diagonalLeft[0] != "")) {

            if (turn == "O") {
                scoreX++;
                winner = "X"
            } else {
                scoreO++;
                winner = "O"

            };
            reset()
        };

        if ((diagonalRight[0] == diagonalRight[1]) && (diagonalRight[1] == diagonalRight[2]) && (diagonalRight[0] != "")) {

            if (turn == "O") {
                scoreX++;
                winner = "X"
            } else {
                scoreO++;
                winner = "O"
            };
            reset()
        };

    };

    const updateScore = () => {
        document.querySelector(".scoreBoard").textContent = `It is ${currentPlayer}'s turn playing ${turn}. The current score: X=${scoreX} O=${scoreO}`;
    }

    const update = () => {
        updateTurn();
        render(gameValues);
        checkForWin();
        updateScore();
        console.log("updated");
    };

    const playGame = () => {
        document.getElementById("overlay").classList = ""
        gameValues = ["", "", "", "", "", "", "", "", ""];
        update()
    }

    const resetScore = () => {
        scoreO = "0";
        scoreX = "0";
        playGame()
    }

    const reset = () => {
        let winner = turn == playerOne ? playerTwo : playerOne || turn
        document.getElementById("overlay").classList = "displayOff block"
        document.querySelector(".endGameText").textContent = `Player "${winner}" Has won! Play again?`
        return 1;
    };

    const makeComputerMove = () => {
        unbeatableBot = document.getElementById("toughness").checked
        let availableCells = []
        for (i in gameValues) {
            if (gameValues[i] == "") {
                availableCells.push(i)
            }
        }
        if (unbeatableBot) {


            unbeatableGimmick()

        } else {
            let randomCell = Math.floor(Math.random() * availableCells.length)
            gameValues[availableCells[randomCell]] = turn;
            update()
        }
    }

    const unbeatableGimmick = () => {
        giveUp = confirm("Do you want to give up?")
        if (giveUp) {
            gameValues = [turn, turn, turn, turn, turn, turn, turn, turn, turn, ]
            update()
        } else {
            confirmation = confirm("Are you sure?")
            if (confirmation) {
                unbeatableGimmick()
            } else {
                gameValues = [turn, turn, turn, turn, turn, turn, turn, turn, turn, ]
                update()
            }
        }
    }


    const one = () => {
        if (checkValidity(0)) {
            gameValues.splice(0, 1, turn)
            update()
        }
    }

    const two = () => {
        if (checkValidity(1)) {
            gameValues.splice(1, 1, turn)
            update()
        }
    }
    const three = () => {
        if (checkValidity(2)) {
            gameValues.splice(2, 1, turn)
            update()
        }
    }
    const four = () => {
        if (checkValidity(3)) {
            gameValues.splice(3, 1, turn)
            update()
        }
    }
    const five = () => {
        if (checkValidity(4)) {
            gameValues.splice(4, 1, turn)
            update()
        }
    }
    const six = () => {
        if (checkValidity(5)) {
            gameValues.splice(5, 1, turn)
            update()
        }
    }
    const seven = () => {
        if (checkValidity(6)) {
            gameValues.splice(6, 1, turn)
            update()
        }
    }
    const eigth = () => {
        if (checkValidity(7)) {
            gameValues.splice(7, 1, turn)
            update()
        }
    }
    const nine = () => {
        if (checkValidity(8)) {
            gameValues.splice(8, 1, turn)
            update()
        }
    }

    return {
        update,
        pickStarter,
        reset,
        playGame,
        one,
        two,
        three,
        four,
        five,
        six,
        seven,
        eigth,
        nine,
        resetScore,
        submitNames,
        makeComputerMove,
    };

})();

Game.pickStarter()
Game.update()