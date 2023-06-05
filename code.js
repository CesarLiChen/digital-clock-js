let currentDateTime;
let is24Hour = true;
const timeConventionChangeButton = document.querySelector(".button");
const timeConventionDisplay = document.querySelector(".hr");

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

function convert24HourToAMPM(hour) {
    if(hour > 12) {
        return hour - 12;
    } else if(hour === 0) {
        return 12;
    } else {
        return hour;
    }
}

timeConventionChangeButton.addEventListener("click", () => {
    is24Hour = !is24Hour;
    timeConventionDisplay.textContent = is24Hour ? "24" : (currentDateTime.getHours > 11 ? "PM" : "AM");
});
