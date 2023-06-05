let currentDateTime;

updateTime(); // Updates immediately without waiting for first 1000ms.
setInterval(updateTime, 1000);

function updateTime(){
    currentDateTime = new Date();
    const hours = formatUnitTime(currentDateTime.getHours());
    const mins = formatUnitTime(currentDateTime.getMinutes());
    const secs = formatUnitTime(currentDateTime.getSeconds());

    // String interpolation with template literals
    const currentTimeString = `${hours}${mins}${secs}`;
    document.querySelectorAll(".digit").forEach((digit, index) => {
        digit.textContent = currentTimeString.charAt(index);
    });
}

function formatUnitTime(unitOfTime) {
    return unitOfTime < 10 ? `0${unitOfTime}` : `${unitOfTime}`;
}