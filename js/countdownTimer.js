const countDownDate = new Date("Nov 28, 2020 13:30:00").getTime();

const timer = setInterval(displayCountdown, 1000);

function displayCountdown() {
  
  const now = new Date().getTime();
  
  const secondsUntilWedding = (countDownDate - now) / 1000;
  
  const days = Math.floor(secondsUntilWedding / (60 * 60 * 24));
  const hours = Math.floor(secondsUntilWedding % (60 * 60 * 24) / (60 * 60));
  const minutes = Math.floor(secondsUntilWedding % (60 * 60) / 60);
  const seconds = Math.floor(secondsUntilWedding % 60);
  
  document.getElementById("counter").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  
  if (secondsUntilWedding < 0) {
    clearInterval(timer);
    document.getElementById("counter").innerHTML = "MARRIED";
  }
}