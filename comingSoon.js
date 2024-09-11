// Countdown logic
const countdown = () => {
    const endDate = new Date("November 14, 2024 23:59:59").getTime();
    const now = new Date().getTime();
    const timeLeft = endDate - now;
  
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
  
    if (timeLeft < 0) {
      clearInterval(timerInterval);
      document.querySelector(".coming-soon-text").innerHTML = "We're Live!";
      document.querySelector(".countdown").style.display = "none";
    }
  };
  
  // Update countdown every second
  const timerInterval = setInterval(countdown, 1000);
  