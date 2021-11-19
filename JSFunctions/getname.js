let emp = {
    name : "Sanju",
    sal : 45000,
    getDetailes : function(){
        console.log("hello sanju good morning");

    },

};
console.log(emp.name);
console.log(emp.sal);
console.log(emp.email);//if we call the object proprty which is not exist we will get the error as undefined//
emp.getDetailes();


