/* 
    Dada uma sequencia de brackets definir se está balanceada ou não
    {[()]} SIM
    {[(])} NAO
    {{[[(())]]}} SIM
*/

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const brackets = {
    chaves: ['{', '}'],
    colchetes: ['[', ']'],
    parenteses: ['(', ')'] 
}

compareSameLenArrays = (arr1, arr2) => {
    return arr1.every((el, index) => el === arr2[index]);
}

isBalanced = (entry) => {
    if(entry.length % 2 !== 0) return false;

    aux = []
    result = true;

    for(let i = 0; i < entry.length/2; i++){
        aux.push([].concat(entry[i], entry[entry.length - i - 1]));
    }

    aux.some((el) => {
        switch (el[0]) {
            case '{':
                result *= compareSameLenArrays(el, brackets.chaves);
                break;
            case '[':
                result *= compareSameLenArrays(el, brackets.colchetes);
                break;
            case '(':
                result *= compareSameLenArrays(el, brackets.parenteses);
                break;
            default:
                break;
        }
    })

    return result;
}


rl.question("Sequencia: ", (input) => {
    let sequencia = Array.from(input);
    isBalanced(sequencia) ? console.log('SIM') : console.log('NÃO');
    rl.close();
});

rl.on("close", () => {
    process.exit(0);
})