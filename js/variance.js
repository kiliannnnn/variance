var total = 0, user = 0, opponent = 0;

var userInput = document.getElementById("user_input");
userInput.focus();

var leftSide = document.getElementById("left_side");
var leftSideColorInput = document.getElementById("left_side_color_param");
var leftP = leftSide.firstChild;
console.log(leftP);

var rightSide = document.getElementById("right_side");
var rightSideColorInput = document.getElementById("right_side_color_param");
var rightP = rightSide.firstChild;


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

    leftP.textContent = "0%";
    rightP.textContent = "0%";
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

    leftP.classList.add("spin");
    setTimeout(function () {
        leftP.classList.remove("spin");
    }, 1000);
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

    rightP.classList.add("spin");
    setTimeout(function () {
        rightP.classList.remove("spin");
    }, 1000);
}

function refreshDisplay() {
    leftSide.style.width = leftPercent + "%";
    rightSide.style.width = rightPercent + "%";

    leftPercent = Math.round(leftPercent * 100) / 100;
    rightPercent = Math.round(rightPercent * 100) / 100;

    leftP.innerHTML = leftPercent + "%<br>" + user + "/" + total;
    rightP.innerHTML = rightPercent + "%<br>" + opponent + "/" + total;

    userInput.focus();
}

reset();