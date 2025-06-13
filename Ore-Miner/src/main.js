
const estado = {
  refresh: false
};

const observado = new Proxy(estado, {
  set(obj, prop, value) {
    obj[prop] = value;

    if (prop === "refresh") {
      if (value === true) {
        console.log("A porta está aberta");
      } else {
        console.log("A porta está fechada");
      }
    }

    return true;
  }
});

const botao = document.getElementById("start");
const description = document.getElementById("description");
const highscore = document.getElementById("highscore");
const minerio = document.getElementById("minerio");
const minerio_img = document.querySelector("#minerio img");
const score = document.getElementById("score")
var scorenumber = 0

botao.addEventListener("click", function () {
  description.style.display = "none";
  botao.style.display = "none";
  highscore.style.display = "none"
  minerio.style.display = "block";
  minerio_img.style.display = "block";
  score.style.display = "block";
  setTimeout(function () {
    description.style.display = "block";
    botao.style.display = "inline-block";
    highscore.style.display = "block"
    minerio.style.display = "none";
    minerio_img.style.display = "none";
    score.style.display = "none";
    scorenumber = 0
    score.textContent = "SCORE: " + scorenumber;
  }, 10000)
});

let animationTimeout;

minerio.addEventListener("click", function () {
  scorenumber = scorenumber + 10;
  score.textContent = "SCORE: " + scorenumber;
  console.log(scorenumber);
  minerio_img.classList.remove('shake');

  requestAnimationFrame(() => {
    minerio_img.classList.add('shake');
  });

  const ore = Math.floor(Math.random() * 5) + 1;
  if (ore == 1) {
    minerio_img.src = "../images/iron.png"
  }
  if (ore == 2) {
    minerio_img.src = "../images/coal.png"
  }
  if (ore == 3) {
    minerio_img.src = "../images/rock.png"
  }
  if (ore == 4) {
    minerio_img.src = "../images/rock.png"
  }
  if (ore == 5) {
    minerio_img.src = "../images/rock.png"
  }

  clearTimeout(animationTimeout);
  animationTimeout = setTimeout(function () {
    minerio_img.classList.remove('shake');
  }, 500);
})

// Testando:
observado.refresh = true;  // 👉 "A porta está aberta"
observado.refresh = false; // 👉 "A porta está fechada"

const randomNumber = Math.floor(Math.random() * 5) + 1;
console.log(randomNumber);
