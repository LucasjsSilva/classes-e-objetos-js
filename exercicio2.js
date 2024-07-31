class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcular_imc(){
        return this.peso / Math.pow(this.altura, 2)
    }

    classificar_IMC(){
        const imc = this.calcular_imc()
        if (imc < 18.5){
            return `Com o IMC de ${imc.toFixed(2)} estou abaixo do peso`
        }else if (imc >= 18.5 && imc <= 25){
            return `Com o IMC de ${imc.toFixed(2)} estou com o peso normal`
        }else if (imc >= 25 && imc <= 30){
            return `Com o IMC de ${imc.toFixed(2)} estou acima do peso`
        }else if (imc >= 30 && imc <= 40){
            return `Com o IMC de ${imc.toFixed(2)} estou obeso`
        }else{
            return `Com o IMC de ${imc.toFixed(2)} estou com obesidade grave`
        }
    }
}

console.log(new Pessoa('jose', 70, 1))