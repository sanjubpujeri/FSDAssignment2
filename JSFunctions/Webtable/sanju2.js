let employees = [{
    "Phonenumber": "748-819-5266",
    "name": "Pat"
  }, {
    "Phonenumber": "194-998-1880",
    "name": "Warner"
  }, {
    "Phonenumber": "736-165-1471",
    "name": "Alair"
  }, {
    "Phonenumber": "718-481-3687",
    "name": "Victor"
  }, {
    "Phonenumber": "730-962-1411",
    "name": "Brinna"
  }]

function swati(){
    let rows  = "";
   
    for (emp of employees){
        
        rows = rows + `<tr>

                              <td>${emp.name}</td>
                              <td>${emp.Phonenumber}</td>

        </tr>`;
    }
document.getElementById("Shiva").innerHTML = rows ;
}