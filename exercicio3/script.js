const nome = String(prompt(`Qual seu nome?`)).toLowerCase();
let idade = Number(prompt(`Qual tua idade?`));

/*if(nome === "José"){
	console.log("Oi, Zé!");
} else {
	console.log("Olá, "+nome);
}*/

nome === `josé` ? console.log(`Oi, Zé!`) : console.log(`Olá ${nome}!`);

/*if(idade >= 18){
	console.log("pode tirar carteira de motorista!");
} else {
	console.log("Ainda não pode tirar carteira de motorista");
}
*/
idade >= 18 ? console.log(`Pode tirar carta!`) : console.log(`Vê se cresce!`);