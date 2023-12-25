let clickCount = 0;

function handleClick() {
    clickCount++;

    if (clickCount === 3) {
        window.location.href = "/console.html";
    }
}