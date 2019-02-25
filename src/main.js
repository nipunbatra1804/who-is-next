import names from "./names.js";
import rng from "./randomizer.js";

const getName = names => {
  const max = names.length - 1;
  const index = rng.range(max).random();
  return names[index];
};

const getNonRecurringName = currentName => {
  let nextName;

  do {
    nextName = getName(names);
  } while (currentName === nextName);

  return nextName;
};

const getCurrentNameElement = () => {
  return document.querySelector(".animated").textContent;
};

const removeNameElement = () => {
  const div = document.querySelector(".animated");
  div.remove();
};

const createNameElement = name => {
  const div = document.createElement("div");
  div.classList.add("animated", "bounceIn");
  div.textContent = name;
  return div;
};

const addNameElement = div => {
  const main = document.querySelector("main");
  const footer = document.querySelector("footer");
  main.insertBefore(div, footer);
};

const handleEvent = event => {
  const keyboard = {
    enter: 13,
    space: 32
  };

  const isClickEvent = event.type === "click";
  const isTouchEvent = event.type === "touchstart";
  const isSpaceKey = event.type === "keypress" && event.which == keyboard.space;
  const isEnterKey =
    event.type === "keypress" && event.which === keyboard.enter;

  const isWantedEvent =
    isClickEvent || isEnterKey || isSpaceKey || isTouchEvent;

  if (!isWantedEvent) return;

  const currentName = getCurrentNameElement();
  const name = getNonRecurringName(currentName);
  removeNameElement();

  const nameElement = createNameElement(name);
  addNameElement(nameElement);
};

document.ontouchstart = e => e.preventDefault();

document.addEventListener("click", handleEvent);
document.addEventListener("keypress", handleEvent);
document.addEventListener("touchstart", handleEvent);
