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

const removeName = () => {
  const div = document.querySelector(".animated");
  div.remove();
};

const createName = () => {
  const div = document.createElement("div");
  div.classList.add("animated", "bounceIn");
  div.textContent = getName();
  return div;
};

const addName = (div) => {
  const main = document.querySelector("main");
  main.appendChild(div);
};

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  removeName();
  addName(createName());
});

document.addEventListener("keypress", event => {
  if (event.key !== "Enter") return;
  removeName();
  addName(createName());
});
