const Aluno = require("./aluno");
const curso = require("./curso");

let aluno6 = new Aluno("Joaozinho", 10, [4, 3, 6, 7, 9]);

curso.adicionarEstudante(aluno6);

console.log(curso.verificaTodos());
