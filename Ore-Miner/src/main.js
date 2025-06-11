
const estado = {
  porta: false
};

const observado = new Proxy(estado, {
  set(obj, prop, value) {
    obj[prop] = value;

    if (prop === "porta") {
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

botao.addEventListener("click", function () {
  description.style.display = "none";
  setTimeout(function () {
    description.style.display = "block";
  }, 10000)
});

// Testando:
observado.porta = true;  // 👉 "A porta está aberta"
observado.porta = false; // 👉 "A porta está fechada"
