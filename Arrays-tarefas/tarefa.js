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

console.log("---------------------------------");

// includes verifica a existencia

console.log("A lista inclui 'Ir a academia' ?", tarefas.includes('Ir à academia'));

if (tarefas.includes = true) {
    console.log(`A tarefa já está na lista`);
    
} 
else  {

tarefas.push("Ir à academia")
console.log(`A tarefa foi adicionada`);

console.table(tarefas)

}

console.log("--------------------------");

// join adiciona elementos a string

console.log("Tarefas como String: ", tarefas.join(", "));

console.log("--------------------");


// Slice extrair elementos 

console.log(" Extrair parte das tarefas (índices 2 ao 4):", tarefas.slice(2, 5));

console.log("------------------");


// Splice altera a lista em um indice expecifico

console.log("Antes do splice:");
console.table(tarefas);


let elementosRemovidos = tarefas.splice(3, 1);
let termoAdicionado = tarefas.splice(3,0, `Dar banho ao gato`)

console.log("Depois do splice");
console.table(tarefas);

console.log(`---------------------------`);

// Concatena listas de tarefas

let tarefa1 = ["Dormir","Jantar","Acordar"]

let tarefa2 = ["Ir ao Sesi","pegar a perua","Chegar no senai"]

console.log("tarefa combinada:", tarefa1.concat(tarefa2));

console.log(`------------------------------`);

// Map mapeia a lista inteira

let novaPalavra = tarefas.map(Item=>"Fazer: "+ Item)

console.log(novaPalavra);























