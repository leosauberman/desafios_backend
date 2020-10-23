/* 
    Comprar e vender uma ação com o lucro máximo.
    Input: [7,1,5,3,6,4]
    Output: 5 (Comprou no dia 2 (preço igual a 1) e vendeu no dia 5 (preço igual a 6), lucro foi de 6 – 1 = 5
    
    Input: [7,6,4,3,1]
    Output: 0 (Nesse caso nenhuma transação deve ser feita, lucro máximo igual a 0)
*/

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

maiorLucro = (array) => {
    maior = 0;

    array.forEach((val1, id1) => {
        array.forEach((val2, id2) => {
            if(id2 > id1){
                if(val2 - val1 > maior){
                    maior = val2 - val1;
                }
            }
        })
    })

    return maior;
}

rl.question("Valores: ", (input) => {
    let seq = JSON.parse(input);
    console.log(maiorLucro(seq));
    rl.close();
})


rl.on("close", () => {
    process.exit(0);
})