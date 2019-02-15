const names = [
  "Hui Tian",
  "Pi Wei",
  "Ying Qi",
  "Sabrina",
  "Nicole",
  "Pakata",
  "Nipun",
  "Jerome",
  "Nicholas",
  "Timothy"
];

const getName = () => {
  const min = 0;
  const max = names.length - 1;
  const random = Math.random() * (max - min) + min;
  const index = Math.floor(random);
  return names[index];
};

const getNonRecurringName = () => {
  const currentName = getCurrentNameElement()
  let nextName;

  do {
    nextName = getName()
  } while (currentName === nextName)

  return nextName;
};

const getCurrentNameElement = () => {
  return document.querySelector(".animated").textContent;
}

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
