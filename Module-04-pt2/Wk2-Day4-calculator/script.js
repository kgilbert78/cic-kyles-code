function numButtonPressed(num) {
    console.log(num);
    const screenDiv = document.getElementById("screen");
    if (screenDiv.innerHTML === "0") {
        screenDiv.innerHTML = num;
    } else {
        screenDiv = screenDiv.innerHTML + num;
    }
}