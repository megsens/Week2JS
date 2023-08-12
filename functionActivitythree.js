// Activity Three - Create a cash machine that dispenses
// cash IF your PIN Number is correct and your balance is equal
// to, or more than, the amount you're trying to withdraw

const cashMachine = {
    PINNum: 1998,
    balanceAmount: 1500,
    withdraw(balanceAmount,PINNum) {

        if (PINNum != this.PINNum) {
            console.log(`Incorrect PIN. Please try again!`);
                return;
        }
        if (balanceAmount <= 0) {
            console.log(`The amount you have requested is invalid, please try again!`);
                return; 
        }
        if (amount > this.balanceAmount) {
            console.log(`Insufficient Balance!`);
                return;
        }
        this.balanceAmount -= amount;
        console.log(`Withdrawal successful. Your remaining balance is: ${this.balanceAmount}!`);
        }
    };

    // TEST:

    cashMachine.withdraw(500, 1998);
    cashMachine.withdraw(24, 1998);
    cashMachine.withdraw(90, 1897);
    cashMachine.withdraw(10, 1998);
    cashMachine.withdraw(45, 1998);