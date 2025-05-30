let tarefas = ['Estudar JavaScript', 'Fazer exercícios de matemática', 'Lavar a louça', 'Comprar mercado', 'Ir à academia', 'Ler um livro', 'Fazer revisão para o teste', 'Limpar o quarto', 'Estudar para concurso', 'Organizar o computador'];
// push adiciona
console.log("Antes do push");

console.table(tarefas);

tarefas.push ('Jogar warzone','Fazer cardio de 30min')

console.table(tarefas)

// pop remove

console.log('--------------------------------');

console.log
("Antes do pop");
console.table(tarefas);

let estiloRemovido = tarefas.pop();

console.log("Depois do pop: Ultima tarefa removida");

console.table(tarefas)

console.log("----------------------------------");

//unshift adicionar no inicio

console.log
("Antes do UnShift");
console.table(tarefas);

tarefas.unshift("Tomar remedio")

console.log("Depois do Unshift");
console.table(tarefas);

console.log("----------------------------------");

// Shift remove a primeira tarefa
console.log
("Antes do Shift");
console.table(tarefas);

let estiloRemovidoo = tarefas.shift();

console.log("Depois do shift");
console.table(tarefas);

console.log
("Estilo Removido:", estiloRemovidoo);








