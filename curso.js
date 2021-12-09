const estudantes = require("./estudantes");

// console.log(estudantes);

module.exports = curso = {
  nomeDoCurso: "Full stack",
  notaDeAprovacao: 7,
  faltasMaximas: 5,
  estudantes: [
    estudantes[0],
    estudantes[1],
    estudantes[2],
    estudantes[3],
    estudantes[4],
  ],
  adicionarEstudante: (aluno) => {
    curso.estudantes.push(aluno);
  },
  verificaUm: (aluno) => {
    let percent = (curso.notaDeAprovacao * 10) / 100;
    if (
      (aluno.calcularMedia() >= curso.notaDeAprovacao &&
        aluno.qtdFaltas <= curso.faltasMaximas) ||
      (aluno.qtdFaltas == curso.faltasMaximas &&
        aluno.calcularMedia() + percent >= curso.notaDeAprovacao)
    ) {
      return true;
    } else {
      return false;
    }
  },
  verificaTodos: () => {
    let result = [];
    curso.estudantes.forEach((element) => {
      result.push(curso.verificaUm(element));
    });
    return result;
  },
};
