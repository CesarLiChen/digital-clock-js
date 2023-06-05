let currentDateTime;

setInterval(updateTime, 1000);

function updateTime(){
    currentDateTime = new Date();
    const hours = formatUnitTime(currentDateTime.getHours());
    const mins = formatUnitTime(currentDateTime.getMinutes());
    const secs = formatUnitTime(currentDateTime.getSeconds());

    // String interpolation with template literals
    const currentTimeString = `${hours}:${mins}:${secs}`;
    console.log(currentTimeString);
}

function formatUnitTime(unitOfTime) {
    return unitOfTime < 10 ? `0${unitOfTime}` : `${unitOfTime}`;
}