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

            cell1.innerHTML=sname;
            cell2.innerHTML=roll;
            cell3.innerHTML=dept;
            cell4.innerHTML=year;
            cell5.innerHTML=birthday;
            cell6.innerHTML=gender;
            cell7.innerHTML = '<input type="button" value="delete" onclick="deletedata(this);">';
            



  };
  function deletedata(btn) {
    let sure = confirm("Do want to delete this row?");
    if (sure){
      var d = btn.parentNode.parentNode;
      // console.log(btn.parentNode.parentNode);
      d.parentNode.removeChild(d);
  } } 
    
  