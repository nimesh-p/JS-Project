window.onload = function () {
    var years = document.getElementById("year");
  
    var myDate = new Date();
    var currentYear = myDate.getFullYear();
    for (var i = 1990; i <= currentYear; i++) {
      var option = document.createElement("OPTION");
      option.innerHTML = i;
      years.appendChild(option);
    }
  };
  
  function validation(){
    var sname = document.getElementById('sname').value;
    var roll = document.getElementById('roll').value;
    var dept = document.getElementById('dept').value;
    // var yrs = document.getElementById('year').value;
    var birthday = document.getElementById('birthday').value;
    
    if(sname == ""){
        document.getElementById('vname').innerHTML =" ** Please fill the username field";
        return false;
    }
   
      var namereg = /^[A-Za-z]+$/;
      if (!sname.match(namereg)) {
        document.getElementById('vname').innerHTML =" ** Plese enter character are only..";
        return false; 
      }
    if(roll == ""){
        document.getElementById('rn').innerHTML =" ** Please fill the Roll No";
        return false;
    }
    if(isNaN(roll)){
        document.getElementById('rn').innerHTML =" ** only Numbers are allowed";
        return false;
    }

    if(dept == ""){
        document.getElementById('dpt').innerHTML =" ** Please Select Department field";
        return false;
    }
    if(birthday == ""){
      document.getElementById('birth').innerHTML =" ** Please Select birthdate";
      return false;
  }

  


            var sname = document.getElementById('sname').value;
            var roll = document.getElementById('roll').value;
            var dept = document.getElementById('dept').value;
            var year = document.getElementById('year').value;
            var birthday = document.getElementById('birthday').value;
            var gender = document.querySelector('input[name="Gender"]:checked').value;


            var table=document.getElementsByTagName('table')[0];
            var newRow=table.insertRow(1);
            

            var cell1=newRow.insertCell(0);
            var cell2=newRow.insertCell(1);
            var cell3=newRow.insertCell(2);
            var cell4=newRow.insertCell(3);
            var cell5=newRow.insertCell(4);
            var cell6=newRow.insertCell(5);
            var cell7=newRow.insertCell(6);
            var cell8=newRow.insertCell(7);
            var cell9=newRow.insertCell(8);
            var cell10=newRow.insertCell(9);


            cell1.innerHTML=sname;
            cell2.innerHTML=roll;
            cell3.innerHTML=dept;
            cell4.innerHTML=year;
            cell5.innerHTML=birthday;
            cell6.innerHTML=gender;
            cell7.innerHTML = '<input type="button" value="delete" onclick="deletedata(this);">';
            cell8.innerHTML = '<input type="checkbox" class="checked">';
            cell9.innerHTML = '<input type="button" value="Edit" onclick="SelectRow(this);">';
            cell10.innerHTML ='<input type="button" value="Done" onclick="EditRow(this);">';
  
            



}
  function deletedata(btn) {
    let sure = confirm("Do you want to delete this row?");
    if (sure){
      var d = btn.parentNode.parentNode;
       console.log(btn.parentNode.parentNode);
      d.parentNode.removeChild(d);
  } 
} 
     



  
//   function delMultiple(){
//    let sure =confirm("Do you Want to Delete All record??");
//    if(sure){ 
//   var table = document.getElementById("tb1");
// //or use :  var table = document.all.tableid;

//     for(var i = table.rows.length - 1; i > 0; i--)
//       {
//          table.deleteRow(i);
//       }
//    }
//  }
function delMultiple() {
  var sure = window.confirm("Are you sure you want to delete Selected records");
  if(sure){
    var checkedbox = document.querySelectorAll(".checked");
    for(var i = 0; i<checkedbox.length; i++){
      if(checkedbox[i].checked){
        checkedbox[i].parentNode.parentNode.remove();
      }
    }
  }
}  


 function SelectRow( newRow) {
  document.getElementById('sname').value =  newRow.parentNode.parentNode.cells[0].innerHTML; 
  document.getElementById('roll').value =  newRow.parentNode.parentNode.cells[1].innerHTML;
  document.getElementById('dept').value =  newRow.parentNode.parentNode.cells[2].innerHTML; 
  document.getElementById('year').value =  newRow.parentNode.parentNode.cells[3].innerHTML;
  document.getElementById('birthday').value = newRow.parentNode.parentNode.cells[4].innerHTML; 
  // document.querySelector('input[name="Gender"]').value = newRow.parentNode.parentNode.cells[5].innerHTML; 

}

function EditRow( newRow){
  var sname = document.getElementById('sname').value;
  var roll = document.getElementById('roll').value;
  var dept = document.getElementById('dept').value;
  var year = document.getElementById('year').value;
  var birthday = document.getElementById('birthday').value;
  // var gender= document.querySelector('input[name="Gender"]');

  newRow.parentNode.parentNode.cells[0].innerHTML =sname;
  newRow.parentNode.parentNode.cells[1].innerHTML = roll;
  newRow.parentNode.parentNode.cells[2].innerHTML = dept;
  newRow.parentNode.parentNode.cells[3].innerHTML = year;
  newRow.parentNode.parentNode.cells[4].innerHTML = birthday;
  // newRow.parentNode.parentNode.cells[5].innerHTML = gender;
  
}