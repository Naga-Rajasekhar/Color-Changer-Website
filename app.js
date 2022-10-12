const button = document.querySelector("#button");
const randomColorGenerator = () => {
  let value = "1234567890ABCDEF";
  let colorValue = "#";
  for (let i = 0; i < 6; i++) {
    colorValue = colorValue + value[Math.ceil(Math.random() * 16)];
  }
  return colorValue;
};

function changeColor() {
  document.querySelector("#canvas").style.backgroundColor =
    randomColorGenerator();
}

button.addEventListener("click", changeColor);
