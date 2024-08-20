const counter = document.getElementById("score");
let count = 0;

const divdiv = document.getElementsByTagName("div")[0];
for (let i = 0; i < 9; i++) {
  const pipes = document.createElement("div");
  pipes.style.backgroundImage = 'url("pipe.png")';
  pipes.style.width = "fitcontent";
  pipes.style.backgroundSize = "cover";
  pipes.style.backgroundPosition = "center";
  const mole = document.createElement("div");
  mole.className = "mole";
  mole.onclick = function () {
    setTimeout(() => {
        mole.style.display = "none";
      }, 0);
    count++;
    counter.innerHTML = count;
  };
  pipes.appendChild(mole);
  const plant = document.createElement("div");
  plant.className = "plants";
  plant.onclick = function () {
    setTimeout(() => {
        plant.style.display = "none";
      }, 0);
    count -= 2;
    counter.innerHTML = count;
  };
  pipes.appendChild(plant);
  divdiv.appendChild(pipes);
}
document.body.appendChild(divdiv);
function getRandomInt() {
  return Math.floor(Math.random() * 9);
}
const randomPipeIndex = getRandomInt();
function popMole() {
  const pipes = divdiv.children;
  const selectedPipe = pipes[randomPipeIndex];
  const mole = selectedPipe.querySelector(".mole");
  mole.style.display = "block";
  setTimeout(() => {
    mole.style.display = "none";
  }, 1000);
}
function popPlant() {
  const randomPipeIndex2 = getRandomInt();
  if (randomPipeIndex === randomPipeIndex2) {
    randomPipeIndex - 1;
  }
  // do {
  //     randomPipeIndex2 = getRandomInt();
  // } while (randomPipeIndex === randomPipeIndex2]);
  const pipes2 = divdiv.children;
  const selectedPipe2 = pipes2[randomPipeIndex2];
  const plant = selectedPipe2.querySelector(".plants");
  plant.style.display = "block";
  setTimeout(() => {
    plant.style.display = "none";
  }, 3000);
}
setInterval(popMole, 2000);
setInterval(popPlant, 5000);
