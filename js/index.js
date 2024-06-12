const leftPlayer = document.querySelector(".left-player");
const rightPlayer = document.querySelector(".right-player");
const zarik = document.querySelector(".zarik");
const rollDise = document.getElementById("roll-dice");
const save = document.getElementById("save");
const player1 = document.getElementById("player1");
let toggl = true;
rollDise.addEventListener("click", () => {
  //   if (toggl) {
  //     leftPlayer.style.backgroundColor = "rgba(197, 128, 128, 0.9)";
  //     rightPlayer.style.backgroundColor = "rgba(195, 165, 165, 0.9)";
  //   } else {
  //     leftPlayer.style.backgroundColor = "rgba(195, 165, 165, 0.9)";
  //     rightPlayer.style.backgroundColor = "rgba(197, 128, 128, 0.9)";
  //   }
  //   toggl = !toggl;
  renderBtn();
});
save.addEventListener("click", () => {
  player1.textContent = eval(player1.textContent + zarik.textContent);
  renderBtn();
});
function renderBtn() {
  zarik.style.display = "flex";
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  switch (randomNumber) {
    case 1:
      zarik.textContent = 1;
      break;
    case 2:
      zarik.textContent = 2;
      break;
    case 3:
      zarik.textContent = 3;
      break;
    case 4:
      zarik.textContent = 4;
      break;
    case 5:
      zarik.textContent = 5;
      break;
    case 6:
      zarik.textContent = 6;
      break;
    default:
      break;
  }
}
