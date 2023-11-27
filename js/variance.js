var total = 0, user = 0, opponent = 0;

var userInput = document.getElementById("user_input");
userInput.focus();

var leftSide = document.getElementById("left_side");
var leftSideColorInput = document.getElementById("left_side_color_param");

var rightSide = document.getElementById("right_side");
var rightSideColorInput = document.getElementById("right_side_color_param");


function changeColorLeftSide() {
    leftSide.style.backgroundColor = leftSideColorInput.value;
}

function changeColorRightSide() {
    rightSide.style.backgroundColor = rightSideColorInput.value;
}

function reset() {
    total = 0;
    user = 0;
    opponent = 0;
    leftSide.style.width = 50 + "%";
    rightSide.style.width = 50 + "%";

    leftSide.innerHTML = 0 + "%";
    rightSide.innerHTML = 0 + "%";
}

function giveToLeftSide() {
    if (userInput.value == "") {
        return;
    }
    else {
        value = parseFloat(userInput.value)
        total += value;
        user += value;
        userInput.value = "";
        leftPercent = (user / total) * 100;
        rightPercent = 100 - leftPercent;
        refreshDisplay();
    }
}

function giveToRightSide() {
    if (userInput.value == "") {
        return;
    }
    else {
        value = parseFloat(userInput.value);
        total += value;
        opponent += value;
        userInput.value = "";
        rightPercent = (opponent / total) * 100;
        leftPercent = 100 - rightPercent;
        refreshDisplay();
    }
}

function refreshDisplay() {
    leftSide.style.width = leftPercent + "%";
    rightSide.style.width = rightPercent + "%";

    leftSide.innerHTML = leftPercent + "%<br>" + user + "/" + total;
    rightSide.innerHTML = rightPercent + "%<br>" + opponent + "/" + total;

    userInput.focus();
}

reset();