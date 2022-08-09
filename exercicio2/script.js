const nacionalidade = String(prompt(`Escreva aqui sua nacionalidade!`)).toLowerCase();

//let nacionalidadeCorrigida = nacionalidade.toLowerCase();

switch(nacionalidade){

case `brasileira`:
    console.log(`Sua nacionalidade é: ${nacionalidade}!`)
    break;
case `argentina`:
    console.log(`Sua nacionalidade é: ${nacionalidade} !`)
    break;
case `uruguaia`:
    console.log(`Sua nacionalidade é: ${nacionalidade}!`)
    break;
case `chilena`:
    console.log(`Sua nacionalidade é: ${nacionalidade}!`)
    break;
case `colombiana`:
    console.log(`Sua nacionalidade é: ${nacionalidade}!`)
    break;
default:
    console.log(`Nacionalidade não encontrada!`) }
/*nacionalidade === `argentina` ||
nacionalidade === `uruguaia` ||
nacionalidade === `chilena` ||
nacionalidade === `colombiana`){
    console.log(`Sua nacionalidade é: ${nacionalidade}`)
}else{
    console.log(`Nacionalidade não encontrada`);
}*/
