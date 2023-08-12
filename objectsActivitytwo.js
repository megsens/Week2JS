const pets = {

    name: "Rufus",
    typeOfPet: "Terrier",
    age: 2,
    color: "Black",
    eat: "Beef",
    drink: "Water",

    drinkAndEat(drink) {

        for (let i = 0; i < this.drinkAndEat.length; i++) {
            if(drink == this.drinks[i]) {
                console.log(`${this.name} is eating ${this.eat} and is drinking ${this.drink[i+1]}`);
            }
        }
    },
    }

pets.drinkAndEat(pets);