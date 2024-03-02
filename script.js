// yellow #C9B458
// green #6AAB64
// light grey #D4D6DA
// dark grey #787C7E
var currentRow = 1;
var currentCol = 1;
var won = false;
alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P','Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X','Y', 'Z'];

var currentWord;

function reset() {
    // resets guess boxes
    for (var row = 1; row <= 6; row++) {
        for (var col = 1; col <= 5; col++) {
            id = "row" + row.toString() + "col" + col.toString();
            // border: 2px solid #D4D6DA;
            // bg white
            // color white
            document.getElementById(id).style.border="2px solid #D4D6DA";
            document.getElementById(id).style.backgroundColor ="white";
            document.getElementById(id).style.color = "black";
            document.getElementById(id).innerHTML = "";
        }
    }

    // resets keyboard
    for (var i = 1; i <= 26; i++) {
        id = alphabet[i-1];
        // background-color: #D4D6DA;
        // border: 3px solid white;
        document.getElementById(id).style.backgroundColor = "#D4D6DA";
        document.getElementById(id).style.border = "3px solid white";
        document.getElementById(id).style.color = "black";
    }
    currentRow = 1;
    currentCol = 1;
    won = false;
}

function getWord(){
    var word = prompt("What 5-letter word would you like to use?")
    if (word.length != 5) {
        alert("That word is not five letters. Please try another.")
        getWord();
    } else {
        currentWord = word.toUpperCase();
    }
    reset();
}

document.addEventListener('keydown', function(event) {
    if (event.key == 'a' || event.key == 'A') {
        letter('A');
    } else if (event.key == 'b' || event.key == 'B') {
        letter('B');
    } else if (event.key == 'c' || event.key == 'C') {
        letter('C');
    } else if (event.key == 'd' || event.key == 'D') {
        letter('D');
    } else if (event.key == 'e' || event.key == 'E') {
        letter('E');
    } else if (event.key == 'f' || event.key == 'F') {
        letter('F');
    } else if (event.key == 'g' || event.key == 'G') {
        letter('G');
    } else if (event.key == 'h' || event.key == 'H') {
        letter('H');
    } else if (event.key == 'i' || event.key == 'I') {
        letter('I');
    } else if (event.key == 'j' || event.key == 'J') {
        letter('J');
    } else if (event.key == 'k' || event.key == 'K') {
        letter('K');
    } else if (event.key == 'l' || event.key == 'L') {
        letter('L');
    } else if (event.key == 'm' || event.key == 'M') {
        letter('M');
    } else if (event.key == 'n' || event.key == 'N') {
        letter('N');
    } else if (event.key == 'o' || event.key == 'O') {
        letter('O');
    } else if (event.key == 'p' || event.key == 'P') {
        letter('P');
    } else if (event.key == 'q' || event.key == 'Q') {
        letter('Q');
    } else if (event.key == 'r' || event.key == 'R') {
        letter('R');
    } else if (event.key == 's' || event.key == 'S') {
        letter('S');
    } else if (event.key == 't' || event.key == 'T') {
        letter('T');
    } else if (event.key == 'u' || event.key == 'U') {
        letter('U');
    } else if (event.key == 'v' || event.key == 'V') {
        letter('V');
    } else if (event.key == 'w' || event.key == 'W') {
        letter('W');
    } else if (event.key == 'x' || event.key == 'X') {
        letter('X');
    } else if (event.key == 'y' || event.key == 'Y') {
        letter('Y');
    } else if (event.key == 'z' || event.key == 'Z') {
        letter('Z');
    } else if (event.key === 'Enter') {
        enter();
    } else if (event.key === 'Backspace') {
        deleteLetter();
    }
  });

function letter(letter){
    if (currentRow < 7 && currentCol < 6 && won == false && currentWord != null) {
        id = "row" + currentRow.toString() + "col" + currentCol.toString() 
        document.getElementById(id).innerHTML = letter;
        document.getElementById(id).style.borderColor='grey';
        currentCol++;
    }
}
function deleteLetter() {
    if (currentCol > 1) {
        currentCol--;
        id = "row" + currentRow.toString() + "col" + currentCol.toString() 
        document.getElementById(id).innerHTML = "";
        document.getElementById(id).style.borderColor = "#D4D6DA";
    }
}
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

//function enter() {
const enter = async () => {
    if (currentCol == 6) {
        id = "row" + currentRow.toString() + "col";
        for (var i = 1; i <= 5; i++) {
            // time
            if (document.getElementById(id+i).innerHTML == currentWord.charAt(i-1)){
                correct(id+i);
            } else if (checkWrongLocation(id,i)) {
                wrongLocation(id+i)
            } else {
                wrong(id+i);
            }
            await sleep(225)
        }
        won = checkWin();
        if (won == true) {
            alert("Congrats you won!!");
        } else if (currentRow == 6) {
            alert("You lost!! The words was "+currentWord);
        }
        // reset row
        currentRow++;
        currentCol = 1;
    }
}
function checkWrongLocation(id, currentCol) {
    var letter = document.getElementById(id+currentCol.toString()).innerHTML;
    var returnVal = false;
    for(var i = 1; i <= 5; i++) {
        if (i == (currentCol)) {
            continue;
        }
        if (currentWord.charAt(i-1) == letter) {
            returnVal = true;
            break;
        }
    }
    return returnVal;
}
function correct(id) {
    document.getElementById(id).style.backgroundColor='#6AAB64'; // green
    document.getElementById(id).style.color='white';
    document.getElementById(id).style.borderColor = '#6AAB64';
    document.getElementById(document.getElementById(id).innerHTML).style.backgroundColor = '#6AAB64';
    document.getElementById(document.getElementById(id).innerHTML).style.color = 'white';
}
function wrongLocation(id) {
    document.getElementById(id).style.backgroundColor='#C9B458'; // yellow
    document.getElementById(id).style.color='white';
    document.getElementById(id).style.borderColor = '#C9B458';
    document.getElementById(document.getElementById(id).innerHTML).style.backgroundColor = '#C9B458';
    document.getElementById(document.getElementById(id).innerHTML).style.color = 'white';
}
function wrong(id) {
    document.getElementById(id).style.backgroundColor='#787C7E'; // dark grey
    document.getElementById(id).style.color='white';
    document.getElementById(id).style.borderColor = '#787C7E';
    document.getElementById(document.getElementById(id).innerHTML).style.backgroundColor = '#787C7E';
    document.getElementById(document.getElementById(id).innerHTML).style.color = 'white';
}
function checkWin(){
    var returnVal = true;
    for (var i = 1; i <= 5; i++) {
        id = "row" + currentRow.toString() + "col" + i.toString();
        if (document.getElementById(id).innerHTML != currentWord.charAt(i-1)){
            returnVal = false;
        }
    }
    return returnVal;
}
