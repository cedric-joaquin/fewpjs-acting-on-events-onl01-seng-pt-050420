let dodger = document.getElementById("dodger")

function moveDodgerLeft() {
    let leftNumber = dodger.style.left.replace("px", "")
    let left = parseInt(leftNumber, 10)

    if (left > 0) {
        dodger.style.left = `${left - 1}px`
    }
}

function moveDodgerRight() {
    let leftNumber = dodger.style.left.replace("px", "")
    let right = parseInt(leftNumber, 10) + 40

    if (right < 360) {
        dodger.style.left = `${parseInt(leftNumber,10) + 1}px`
    }
}