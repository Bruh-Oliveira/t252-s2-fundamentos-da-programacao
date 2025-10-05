console.log("Bem-vindo ao Campeonato de Filmes!");
console.log("===========================================");

// defininindo como os filmes devem aparecer
interface Filme {
    titulo: string;
    nota: number;
}

// lista de filmes participantes do campeonato com suas respectivas notas
const filmes: Filme[] = [
    { titulo: "Amelie Poulain", nota: 8.5 },
    { titulo: "Fleabag", nota: 9.0 },
    { titulo: "Rei Leao", nota: 8.8 },
    { titulo: "Procurando Nemo", nota: 8.1 },
    { titulo: "Greys Anatomy", nota: 8.7 }
];
 
// Mostrar todos os participantes
console.log("Filmes Participantes:");
console.log("-------------------------------");
filmes.forEach((filme, index) => {
  console.log(`${index + 1}. ${filme.titulo} - Nota: ${filme.nota}`);
});
console.log (`total de filmes participantes: ${filmes.length}`);
console.log("Preparando para iniciar o campeonato...");

//ETAPA 2: FUNCAO DE COMPARACAO
function compararFilmes(filmeA: Filme, filmeB: Filme): Filme {
    console.log(`\nCONFRONTO: ${filmeA.titulo} vs ${filmeB.titulo}`);
    console.log(`   ${filmeA.titulo}: ${filmeA.nota} | ${filmeB.titulo}: ${filmeB.nota}`);

    if (filmeA.nota > filmeB.nota) {
        console.log(`   VENCEDOR: ${filmeA.titulo} (nota maior)`);
        return filmeA;
    } else if (filmeB.nota > filmeA.nota) {
        console.log(`   VENCEDOR: ${filmeB.titulo} (nota maior)`);
        return filmeB;
    } else {
        // EMPATE! Decide por ordem alfabética
        if (filmeA.titulo < filmeB.titulo) {
            console.log(`   EMPATE! Vencedor por ordem alfabética: ${filmeA.titulo}`);
            return filmeA;
        } else {
            console.log(`   EMPATE! Vencedor por ordem alfabética: ${filmeB.titulo}`);
            return filmeB;
        }
    }
}

// TESTAR NOSSA FUNCAO DE COMPARACAO
console.log("\nTESTANDO A FUNÇÃO DE COMPARAÇÃO:");
console.log("===================================");

// Teste 1: Fleabag vs Amelie (Fleabag deve ganhar - nota maior)
compararFilmes(filmes[1], filmes[0]);

// Teste 2: Rei Leao vs Greys Anatomy (Rei Leao deve ganhar - nota maior)
compararFilmes(filmes[2], filmes[4]);

// Teste 3: Criar um EMPATE artificial com SEUS filmes
console.log("\nTESTE DE EMPATE (notas iguais):");
// Criamos dois filmes temporários com mesma nota para testar o empate
const filmeTeste1 = { titulo: "Amelie Poulain", nota: 8.5 };
const filmeTeste2 = { titulo: "Fleabag", nota: 8.5 }; // mesma nota!
compararFilmes(filmeTeste1, filmeTeste2);

// ETAPA 3: PRIMEIRA FASE DO CAMPEONATO
console.log("\n\nPRIMEIRA FASE DO CAMPEONATO:");
console.log("============================");
console.log("Confrontos: Início da lista vs Final da lista");

const vencedoresPrimeiraFase: Filme[] = [];
const metade = Math.floor(filmes.length / 2);

for (let i = 0; i < metade; i++) {
    const filmeInicio = filmes[i];
    const filmeFim = filmes[filmes.length - 1 - i];
    
    console.log(`\n--- Partida ${i + 1} ---`);
    const vencedor = compararFilmes(filmeInicio, filmeFim);
    vencedoresPrimeiraFase.push(vencedor);
}

// Se número ímpar, o filme do meio avança automaticamente
if (filmes.length % 2 !== 0) {
    const filmeDoMeio = filmes[metade];
    vencedoresPrimeiraFase.push(filmeDoMeio);
    console.log(`\n${filmeDoMeio.titulo} avança automaticamente para a próxima fase`);
}

console.log("\nVENCEDORES DA PRIMEIRA FASE:");
vencedoresPrimeiraFase.forEach((vencedor, index) => {
    console.log(`${index + 1}. ${vencedor.titulo} - Nota: ${vencedor.nota}`);
});

// ETAPA 4: SEMIFINAL
console.log("\n\nSEMIFINAL:");
console.log("===========");
console.log("Confrontos entre os vencedores da primeira fase");

const finalistas: Filme[] = [];

for (let i = 0; i < vencedoresPrimeiraFase.length; i += 2) {
    if (i + 1 < vencedoresPrimeiraFase.length) {
        // Temos par para confronto
        const filmeA = vencedoresPrimeiraFase[i];
        const filmeB = vencedoresPrimeiraFase[i + 1];
        
        console.log(`\n--- Partida ${(i/2) + 1} ---`);
        const vencedor = compararFilmes(filmeA, filmeB);
        finalistas.push(vencedor);
    } else {
        // Número ímpar - último avança sozinho
        finalistas.push(vencedoresPrimeiraFase[i]);
        console.log(`\n${vencedoresPrimeiraFase[i].titulo} avança automaticamente para a final`);
    }
}

console.log("\nFINALISTAS:");
finalistas.forEach((finalista, index) => {
    console.log(`${index + 1}. ${finalista.titulo} - Nota: ${finalista.nota}`);
});

// ETAPA 5: FASE FINAL
console.log("\n\nGRANDE FINAL:");
console.log("=============");
console.log(`${finalistas[0].titulo} vs ${finalistas[1].titulo}`);

const campeao = compararFilmes(finalistas[0], finalistas[1]);
const vice = campeao === finalistas[0] ? finalistas[1] : finalistas[0];

// RESULTADO FINAL
console.log("\nRESULTADO FINAL:");
console.log("================");
console.log(`🏆 CAMPEÃO: ${campeao.titulo} - Nota: ${campeao.nota}`);
console.log(`🥈 VICE-CAMPEÃO: ${vice.titulo} - Nota: ${vice.nota}`);