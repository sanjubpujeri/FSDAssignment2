class employee{
    emp_Id;
    emp_Name;
    constructor(a,b){
        this.emp_Id = a;
        this.emp_Name = b;
        console.log("Executing Automatically");
    }
}
let obj1= new employee(101, "Rahul");
let obj2= new employee(102, "Priyanka");

console.log(obj1);
console.log(obj2);