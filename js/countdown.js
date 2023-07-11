const countdown = () => {
  const countDate = new Date("July 21, 2023 14:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const textDays = Math.floor(gap / days);
  const textHours = Math.floor((gap % days) / hours);
  const textMinutes = Math.floor((gap % hours) / minutes);
  const textSeconds = Math.floor((gap % minutes) / seconds);

  const countdownElement = document.getElementById("countdown");
  if (gap > 0) {
    countdownElement.innerHTML = `
      <div>${textDays}<span>Dni</span></div>
      <div>${textHours}<span>Godziny</span></div>
      <div>${textMinutes}<span>Minuty</span></div>
      <div>${textSeconds}<span>Sekundy</span></div>
    `;
  } else {
    clearInterval(intervalId);
    // Co sie gapisz, to i tak jest placeholder.
    // Poczekaj na koniec licznika to się dowiesz co się stanie 19 Maja 
    countdownElement.innerHTML = '<p class="pausechamp">STREAM JUZ TRWA!</p>';
    
  }
};

const intervalId = setInterval(countdown, 1000);