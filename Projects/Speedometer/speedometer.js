const changeNum = () => {
  const velocity = document.getElementById('velo').value
  console.log(velocity)
  const degrees = Math.round((velocity / 100) * 180);
  const root = document.querySelector(":root");
  let title = document.querySelector(".loader__title");

  let currentNumber = title.innerText;
  
  setInterval(() => {
     if (currentNumber < velocity) {
      currentNumber++;
      title.innerText = currentNumber;
    } else if (currentNumber > velocity) {
      currentNumber--;
      title.innerText = currentNumber;
    }
  }, 3);

  root.style.setProperty("--rotation", `${degrees}deg`);
};


setInterval(() => {
  changeNum();
}, 1500);
