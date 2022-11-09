const hoursHand = document.querySelector(".hand.hours");
const minutesHand = document.querySelector(".hand.minutes");
const secondsHand = document.querySelector(".hand.seconds");

const setRotation = (element, rotationPercentage) => {
  element.style.setProperty(
    "--rotation",
    rotationPercentage * 360
  ); /*multiplica por 360 para converter a porcentaem pelo valor que vai ser a rotação */
};

const setClock = () => {
  const currentDate = new Date(); /*pegar a data atual*/

  const secondsPercentage =
    currentDate.getSeconds() / 60; /*divide por 60 para saber a rotação*/
  const minutesPercentage =
    (secondsPercentage + currentDate.getMinutes()) /
    60; /*mudar a medida que o ponteiro de segundos muda */
  const hoursPercentage =
    (minutesPercentage + currentDate.getHours()) /
    12; /*mudar a medida q o ponteiro de minutos mude */

  setRotation(secondsHand, secondsPercentage);
  setRotation(minutesHand, minutesPercentage);
  setRotation(hoursHand, hoursPercentage);
};

setClock();

setInterval(setClock, 1000);
