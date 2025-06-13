
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
const lj_img1 = document.getElementById("powerup-1")
const lj_img2 = document.getElementById("powerup-2")
const lj_img3 = document.getElementById("powerup-3")
const lj_bt1 = document.getElementById("pw-1")
const lj_bt2 = document.getElementById("pw-2")
const lj_bt3 = document.getElementById("pw-3")
const lj_pc1 = document.getElementById("preco-1")
const lj_pc2 = document.getElementById("preco-2")
const lj_pc3 = document.getElementById("preco-3")
var luck_upgrades = 1
var speed_upgrades = 1
var multiplier_upgrades = 1
var m_atual = 3
var scorenumber = 0
var HP = 4
var minerio_atual = "pedra"
import { carregar_Luck } from "./info-storage.js"
import { carregar_Speed } from "./info-storage.js"
import { valor_minerios } from "./info-storage.js"
import { hp_minerios } from "./info-storage.js"

botao.addEventListener("click", function () {
  description.style.display = "none";
  botao.style.display = "none";
  highscore.style.display = "none"
  minerio.style.display = "block";
  minerio_img.style.display = "block";
  score.style.display = "block";
  lj_img1.style.display = "block";
  lj_img2.style.display = "block";
  lj_img3.style.display = "block";
  lj_bt1.style.display = "block";
  lj_bt2.style.display = "block";
  lj_bt3.style.display = "block";
  lj_pc1.style.display = "block";
  lj_pc2.style.display = "block";
  lj_pc3.style.display = "block";
  const upgrade1 = Math.floor(Math.random() * 2) + 1;
  const upgrade2 = Math.floor(Math.random() * 2) + 1;
  const upgrade3 = Math.floor(Math.random() * 2) + 1;
  if (upgrade1 == 1) {
    carregar_Luck("pw-1", luck_upgrades)
  }
  if (upgrade1 == 2) {
    carregar_Speed("pw-1", speed_upgrades)
  }
  if (upgrade2 == 1) {
    carregar_Luck("pw-2", luck_upgrades)
  }
  if (upgrade2 == 2) {
    carregar_Speed("pw-2", speed_upgrades)
  }
  if (upgrade3 == 1) {
    carregar_Luck("pw-3", luck_upgrades)
  }
  if (upgrade3 == 2) {
    carregar_Speed("pw-3", speed_upgrades)
  }
  
  setTimeout(function () {
    description.style.display = "block";
    botao.style.display = "inline-block";
    highscore.style.display = "block"
    minerio.style.display = "none";
    minerio_img.style.display = "none";
    score.style.display = "none";
    score.style.display = "none";
    lj_img1.style.display = "none";
    lj_img2.style.display = "none";
    lj_img3.style.display = "none";
    lj_bt1.style.display = "none";
    lj_bt2.style.display = "none";
    lj_bt3.style.display = "none";
    lj_pc1.style.display = "none";
    lj_pc2.style.display = "none";
    lj_pc3.style.display = "none";

    scorenumber = 0
    score.textContent = "SCORE: " + scorenumber;
  }, 10000)
});

let animationTimeout;

minerio.addEventListener("click", function () {
  if (HP > 0) {
    HP = HP - 1
    scorenumber = scorenumber + 1;
  } else {
    if (minerio_atual == "pedra") {
      const preço = Number(valor_minerios.filter((elemento, indice) => indice == 0));
      scorenumber = scorenumber + preço
    }
    if (minerio_atual == "carvao") {
      const preço = Number(valor_minerios.filter((elemento, indice) => indice == 1));
      console.log(preço)
      scorenumber = scorenumber + preço
    }
    if (minerio_atual == "ferro") {
      const preço = Number(valor_minerios.filter((elemento, indice) => indice == 2));
      scorenumber = scorenumber + preço
    }
    const ore = Math.floor(Math.random() * 5) + 1;
    if (ore == 1) {
      minerio_img.src = "../images/iron.png";
      minerio_atual = "ferro"
      const durabilidade = Number(hp_minerios.filter((elemento, indice) => indice == 2));
      HP = durabilidade
    }
    if (ore == 2) {
      minerio_img.src = "../images/coal.png";
      minerio_atual = "carvao"
      const durabilidade = Number(hp_minerios.filter((elemento, indice) => indice == 1));
      HP = durabilidade
    }
    if (ore == 3) {
      minerio_img.src = "../images/rock.png";
      minerio_atual = "pedra"
      const durabilidade = Number(hp_minerios.filter((elemento, indice) => indice == 0));
      HP = durabilidade
    }
    if (ore == 4) {
      minerio_img.src = "../images/rock.png";
      minerio_atual = "pedra"
      const durabilidade = Number(hp_minerios.filter((elemento, indice) => indice == 0));
      HP = durabilidade
    }
    if (ore == 5) {
      minerio_img.src = "../images/rock.png";
      minerio_atual = "pedra"
      const durabilidade = Number(hp_minerios.filter((elemento, indice) => indice == 0));
      HP = durabilidade
    }
  }
  score.textContent = "SCORE: " + scorenumber;
  console.log(scorenumber);
  minerio_img.classList.remove('shake');

  requestAnimationFrame(() => {
    minerio_img.classList.add('shake');
  });

  const ore = Math.floor(Math.random() * 5) + 1;

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
