let currentDateTime;

setInterval(updateTime, 1000);

function updateTime(){
    currentDateTime = new Date();
    const hours = currentDateTime.getHours();
    const mins = currentDateTime.getMinutes();
    const secs = currentDateTime.getSeconds();

    const currentTimeString = `${hours}:${mins}:${secs}`;
    console.log(currentTimeString);
}