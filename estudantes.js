const Aluno = require("./aluno");

let aluno1 = new Aluno("Daniel Fontoura", 0, [10, 9, 7, 8, 9]);
let aluno2 = new Aluno("Gabriel Rizzo", 0, [10, 8, 10, 6, 7]);
let aluno3 = new Aluno("Johny Wesley", 1, [8, 10, 8, 6, 7]);
let aluno4 = new Aluno("Thiago Vilela", 2, [9, 7, 5, 7, 9]);
let aluno5 = new Aluno("Vinicius Almeida", 4, [7, 9, 6, 8, 9]);

module.exports = [aluno1, aluno2, aluno3, aluno4, aluno5];
