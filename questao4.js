/* 
    Dados n inteiros não negativos representando um mapa de
    elevação onde a largura de cada barra é 1, calcule quanta
    água é capaz de reter após a chuva.

    Input: [0,1,0,2,1,0,1,3,2,1,2,1]
    Output: 6
*/

const { count } = require("console");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

accumulateRain = (mapa) => {
    let matrixAux = [];
    let cont = 0
    let colLen = mapa.reduce((a,b) => Math.max(a, b));
    let rowLen = mapa.length;
    let blocoAux = -1;

    for(let i = 0; i < colLen; i++){
        let aux = [];
        for(let j = 0; j < rowLen; j++){
            aux.push((mapa[j] > i)*1);
        }
        matrixAux.push(aux);
    }

    for(let i = 0; i < colLen; i++){
        for(let j = 0; j < rowLen; j++){
            if(matrixAux[i][j] !== 0){
                if(blocoAux == -1 && j+1 < rowLen && matrixAux[i][j+1] == 0){
                    blocoAux = j;
                }
                else if(blocoAux != -1){
                    cont += j - blocoAux-1;
                    if(matrixAux[i][j+1] == 0){
                        blocoAux = j;
                    }
                    else{
                        blocoAux = -1;
                    }
                }
            }
        }
        blocoAux = -1;
    }
    return cont;
}

rl.question("Mapa: ", (input) => {4
    let mapa = JSON.parse(input);
    console.log(accumulateRain(mapa));
    rl.close();
});

rl.on("close", () => {
    process.exit(0);
})