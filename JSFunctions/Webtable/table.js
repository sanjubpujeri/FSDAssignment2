let employees = [{id : 201, Name : " Sanju", Sal : 45000}, {id : 202, Name : " Ajay", Sal : 55000}, {id : 203, Name : " Rijo", Sal : 60000}]

function execute(){
    let rows = "";
    for ( emp of employees){
        rows = rows + `<tr>  <td>${emp.id}</td>
                           <td>${emp.name}</td>
                           <td>${emp.sal}</td>
                     </tr>`;
    }
    document.getElementById("data").innerHTML = rows;
}