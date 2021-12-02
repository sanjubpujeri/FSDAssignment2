class Account{
    Min_Bal = 500;
    
}

class Saving_Account extends Account{}
class current_Account extends Account{
    Min_Bal = 0;
}

let Sa = new Saving_Account();
let ca = new current_Account();

console.log(Sa);
console.log(ca);
