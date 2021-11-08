
function superbowlWin(array) {
    let winEl = array.find(element => element.result === "W");
    if (winEl) {
        return winEl.year;
    } else {
        return undefined;
    }
}