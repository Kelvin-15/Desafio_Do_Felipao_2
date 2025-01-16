function calcularRankeadas(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    let saldoVitorias = vitorias - derrotas
    let nivel

    // Determina o nível com base no número de vitórias
    if (vitorias < 10) {
        nivel = "Ferro"
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze"
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata"
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro"
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante"
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário"
    } else {
        nivel = "Imortal"
    }

    // Retorna a mensagem formatada
    return `O Herói tem de saldo de ${saldoVitorias} Vitórias e está no nível ${nivel}`
}

// Exemplo de uso
let resultado = calcularRankeadas(85, 10); // Passando número de vitórias e derrotas
console.log(resultado) // Saída: O Herói tem de saldo de 75 Vitórias e está no nível Diamante

