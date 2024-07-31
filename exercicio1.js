class Carro {
    marca;
    cor;
    combustivel_por_km;

    constructor (marca, nome, combustivel_por_km){
        this.marca = marca;
        this.nome = nome;
        this.combustivel_por_km = combustivel_por_km;
    }

    calcula_gasto (distancia, preco_combustivel){
        const litros = distancia / this.combustivel_por_km;
        const gasto = litros * preco_combustivel;
        return `Você gasta R$${gasto.toFixed(2)} para percorrer ${distancia}km`
    }
}

const siena = new Carro('Fiat', 'vermelha', 10);
console.log(siena.calcula_gasto(100, 5.90))