class Prova{
  constructor(respostas) {
      this.respostas = respostas;
      this.prespostas = ["a", "b", "a", "c", "d"];
      this.peso = 2;
  }

  MostrarNota() {
    let indice = 0;
      var nota = 0;
      for (let resposta of this.respostas) {
        if (resposta == this.prespostas[indice]) {
          nota = nota + this.peso;                
        }
        indice = indice + 1;
      }
      console.log("Nota do aluno:", nota);
  }
}

const Prova1 = new Prova(["a", "b", "b", "b", "b"])
Prova1.MostrarNota();