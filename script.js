class Traveler {
    constructor(name) {
        this.name = name;
        this.initalFood = 1;
        this.isHealthy = true;
    }

    hunt() {
        this.initalFood += 2
    }

    eat () {
        if (this.initalFood > 0) {
            this.initalFood --;
        } else {
            this.isHealthy = false;
        }
    }
}


class Wagon {
    constructor(capacity) {
        this.capacity = capacity;
        this.passageiros = [];
    }

    getAvailableSeatCount () {
        if (this.capacity < this.passageiros) {
            return this.capacity - this.passageiros.length;
        } 
    }

    join () {
        if (this.passageiros.length < this.capacity) {
            this.passageiros.push(1);
        }
    }

    shouldQuarantine () {
        if (this.isHealthy === false) {
            return true;
        }

    }

    totalFood() {
        return this.initalFood;
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
