const coffeeShop = {

    branch: "Warrington",
    drinks: [

        "Tea", 2.59,
        "Black Coffee", 3.00,
        "Iced Tea", 2,
        "Pepsi", 2.00,

    ],
    food: [

        "Toastie", 1.50,
        "Wrap", 2.50,
        "Cake", 4.50,
        "Sandwich", 4.20
    ],
    drinksOrdered(drink) {

        for (let i = 0; i < this.drinks.length; i++) {
            if(drink == this.drinks[i]) {
                console.log(`You have ordered ${this.drinks} and it will cost ${this.drinks[i+1]}`);
            }
        }
    },
    foodOrdered(foods){

        for (let i = 0; 1 < this.foods.length; j++) {
            console.log(`You have ordered a ${this.foods[j]} and it will cost ${this.food[j+1]}`);
        }
    }
}

coffeeShop.drinksOrdered(Pepsi);