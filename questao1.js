/* 
    Dado um array de números inteiros, retorne os índices dos
    dois números de forma que eles se somem a um alvo
    específico.
    Você pode assumir que cada entrada teria exatamente uma
    solução, e você não pode usar o mesmo elemento duas
    vezes
    nums = [2, 7, 11, 15], alvo = 9
    return [0, 1]
*/

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

findTarget = (array, target) => {
    array.some((el, index) => {
        for(let i = 0; i < array.length; i++){
            let item = array[i];
            if(el + item === target){
                let res = [index, i];
                console.log(res);
                return true;
            }
        }
    });
}

rl.question('Números: ', (nums) => {
    rl.question('Alvo: ', (alvo) => {
        findTarget(JSON.parse(nums), parseInt(alvo));
        rl.close();
    });
});

rl.on("close", function() {
    process.exit(0);
});