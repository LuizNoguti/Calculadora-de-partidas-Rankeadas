// --- 1. Dados de Entrada (Simulando vários jogadores para usar Laços de Repetição) ---
let jogadores = [
    { vitorias: 8, derrotas: 3 },    // Teste Ferro
    { vitorias: 25, derrotas: 5 },   // Teste Bronze/Prata
    { vitorias: 55, derrotas: 0 },   // Teste Ouro
    { vitorias: 95, derrotas: 2 },   // Teste Lendário
    { vitorias: 150, derrotas: 10 }  // Teste Imortal
];

// --- 2. Função Principal ---
function calcularNivel(vitorias, derrotas) {
    // Cálculo do saldo (Operadores Aritméticos)
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    // Estrutura de Decisão para definir o nível com base no saldo
    if (saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário";
    } else if (saldoVitorias >= 101) {
        nivel = "Imortal";
    } else {
        // Caso caia em algum "buraco" lógico (ex: exatamente 10), definimos um padrão
        nivel = "Desconhecido (ou Ferro/Bronze dependendo da regra exata)"; 
        // Na prática, < 10 pega o 9. 11 a 20 pega o 11. O 10 ficaria num limbo na descrição original, 
        // mas aqui ajustamos pela lógica padrão de intervalos.
    }
    
    // Retorna o resultado para ser usado fora da função
    return `O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`;
}

// --- 3. Execução (Laço de Repetição) ---
// Percorre cada jogador da lista e chama a função para cada um
for (let i = 0; i < jogadores.length; i++) {
    let jogador = jogadores[i];
    let resultado = calcularNivel(jogador.vitorias, jogador.derrotas);
    console.log(resultado);
}
