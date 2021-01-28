var listen, speak, read, write

function getData() {
    listen = parseFloat(document.getElementById('listening').value);
    read = parseFloat(document.getElementById('reading').value);
    write = parseFloat(document.getElementById('writing').value);
    speak = parseFloat(document.getElementById('speaking').value);

}

function totalScore() {
    getData()
    if (listen == null){
        score.innerHTML("hello")
        break
    }
    total = ((listen+speak+write+read)/4)
    total = roundToNearest(total, 0.5)
    score.innerHTML = total
    feed(total)
}

function feed(total){
    if (total<5){
        feedback.innerHTML = "hello you are fail "
    }
    else {
        feedback.innerHTML = "hello you are pass "       
    }
}

function roundToNearest(numToRound, numToRoundTo) {
    numToRoundTo = 1 / (numToRoundTo);
    return Math.round(numToRound * numToRoundTo) / numToRoundTo;
}

function formValidate(){
    if (listen == null || read == null || write == null || speak == null)
    {
  
        return false
    }
}



