document.addEventListener("DOMContentLoaded", function(){
    // Set the target date 
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 10);

    // Update the countdown every second 
    setInterval(updateCountdown, 1000);

    function updateCountdown() {
        const currentDate = new Date();
        const timeDifference = targetDate - currentDate;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60) / (1000 *60)));
        const seconds = Math.floor((timeDifference % (1000 * 60) / 1000));



        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
    
    }
});