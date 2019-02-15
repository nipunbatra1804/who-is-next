import names from "./names.js";
import rng from "./randomizer.js";

const getName = (names) => {
  const max = names.length - 1;
  const index = rng.range(max).random()
  return names[index];
};

const getNonRecurringName = () => {
  const currentName = getCurrentNameElement();
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
  const isClickEvent = event.type === "click";
  const isEnterKeypress = event.type === "keypress" && event.key === "Enter";
  const isTouchEvent = event.type === "touchstart";
  const isWantedEvent = isClickEvent || isEnterKeypress || isTouchEvent;

  if (!isWantedEvent) return;

  const name = getNonRecurringName();
  removeNameElement();

  const nameElement = createNameElement(name);
  addNameElement(nameElement);
};

document.ontouchstart = e => e.preventDefault();

document.addEventListener("click", handleEvent);
document.addEventListener("keypress", handleEvent);
document.addEventListener("touchstart", handleEvent);
