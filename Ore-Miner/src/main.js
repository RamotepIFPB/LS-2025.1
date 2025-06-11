
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

// Testando:
observado.porta = true;  // 👉 "A porta está aberta"
observado.porta = false; // 👉 "A porta está fechada"