class employee{
    emp_Id = 101;
    emp_name = "Sanju";

    getEmployee_Detailes(){
        console.log("Employee ID:" + this.emp_Id +"Employee Name :" + this.emp_name);

    }

}

let e1= new employee();
let e2= new employee();

e1.getEmployee_Detailes();
e2.getEmployee_Detailes();