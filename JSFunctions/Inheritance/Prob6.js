class Central{
    tax = 18;
    getTaxDetailes(){
        console.log("Central govt class");

    }
}

class KA extends Central(){
    tax=20;
    getTaxDetailes(){
        console.log("KA Govt Class");

    }
}

let obj = new KA();
console.log(obj.tax);
