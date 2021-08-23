class Traveler {
    constructor(name) {
        this.name = name;
        this.initalFood = 1;
        this.isHealthy = true;
    }

    hunt() {
        return this.initalFood += 2
    }

    eat() {
        if (this.initalFood > 0) {
            return this.initalFood--;
        } else {
            return this.isHealthy = false;
        }
    }
}


class Wagon {
    constructor(capacity) {
        this.capacity = capacity;
        this.passageiros = [];
    }

    getAvailableSeatCount() {
        
        return this.capacity - this.passageiros.length;
    
    }

    join(passageiro) {
        
        if (this.passageiros.length < this.capacity && this.capacity > 0) {
             return this.passageiros.push(passageiro);
        } else {
            return this.capacity
        }
    }

    shouldQuarantine() {
        let travelerSick = false;
        this.passageiros.filter((passageiro)=>{
            if (passageiro.isHealthy === false) {
                travelerSick = true;
            }
        })
        return travelerSick;
    }

    totalFood() {
        console.log(this.passageiros)
        return this.passageiros.reduce((acc,passageiro) => {
            return acc + passageiro.initalFood
        },0)
        
    }
}



// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');

console.log(`${wagon.getAvailableSeatCount()} should be 2`);

wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);

wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);

henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)

console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);
