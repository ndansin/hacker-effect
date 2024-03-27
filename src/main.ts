import "./style.scss";

document.querySelector<HTMLDivElement>("#app")!.onmouseover = (
  event: MouseEvent
) => {
  let iteration = 0;
  const letters = event?.target?.innerText.split("");
  const fun = 3;

  const interval = setInterval(() => {
    if(fun + letters.length < iteration) {
      clearInterval(interval);
    }

    event!.target!.innerText = letters
    .map((letter, index) => {
      if (" " === letter || fun + index < iteration) {
        return letter;
      }

      return randomLetter();
    })
    .join("");
    iteration++;
  }, 35);

};

function randomLetter() {
  return String.fromCharCode("A".charCodeAt() + Math.floor(Math.random() * 26));
}
