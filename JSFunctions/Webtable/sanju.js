let employees = [{"id":1,"name":"Florie","sal":"$8.24"},
{"id":2,"name":"Paolina","sal":"$9.84"},
{"id":3,"name":"Merrill","sal":"$7.00"},
{"id":4,"name":"Rosy","sal":"$2.15"},
{"id":5,"name":"Janis","sal":"$4.35"}]

function swati(){
    let rows = "";
    for(emp of employees){
        rows = rows + `<tr>
        <td>${emp.id}</td>
        <td>${emp.name}</td>
        <td>${emp.sal}</td>
     </tr>`;
    }
    document.getElementById("Sanju").innerHTML = rows;
}