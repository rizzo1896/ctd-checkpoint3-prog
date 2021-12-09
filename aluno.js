function Aluno(nome, falta, nota = []) {
  this.nome = nome;
  this.qtdFaltas = falta;
  this.nota = nota;
  this.calcularMedia = () => {
    let res = this.nota.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );

    return (res / this.nota.length).toFixed(1);
  };

  this.falta = () => {
    this.qtdFaltas += 1;
    return "falta adicionada";
  };
}

module.exports = Aluno;
