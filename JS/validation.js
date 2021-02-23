 
  function testCharInput() {
    var sname = document.getElementById("sname").value;
    
    if (sname == "") {
      document.getElementById("vname").innerHTML = " ** Please fill the username field";
      return false;
    } else {
      var namereg = /^[A-Za-z\W]+$/;
      if (!sname.match(namereg)) {
        document.getElementById("vname").innerHTML = " ** Plese enter characters  only..";
        return false;
      } else{
        document.getElementById("vname").innerHTML ="";
        return false;
      }
    }
  }
 function testIntInput(){
  var roll = document.getElementById('roll').value;
  if(roll == ""){
    
    document.getElementById('rn').innerHTML =" ** Please fill the Roll No";
    return false;
  }else{
  if(isNaN(roll)){
    document.getElementById('rn').innerHTML =" ** only Numbers are allowed";
    return false;
}
else{
  document.getElementById("rn").innerHTML ="";
  return false;
}
}
}
function testselInput(){
  var dept = document.getElementById('dept').value;
  if(dept == ""){
         document.getElementById('dpt').innerHTML =" ** Please Select Department field";
          return false;
      }
    else{
      document.getElementById("dpt").innerHTML ="";
      return false;
    }
 }  

 function testInput(){
  var birthday = document.getElementById('birthday').value;
  if(birthday == ""){
    document.getElementById('birth').innerHTML =" ** Please Select birthdate";
    return false;
  }else{
    document.getElementById("birth").innerHTML ="";
    return false;
  }

 }







































  // function validation(){
  //   var sname = document.getElementById('sname').value;
  //   var roll = document.getElementById('roll').value;
  //   var dept = document.getElementById('dept').value;
  //   // var yrs = document.getElementById('year').value;
  //   var birthday = document.getElementById('birthday').value;



  //   if(passid_validation())
  //               {
  //               if(allLetter(uname))
  //               {
  //               if(alphanumeric(uadd))
  //               { 
  //               if(countryselect(ucountry))
  //               {
  //               if(allnumeric(uzip))
  //               {
  //               if(ValidateEmail(uemail))
  //               {
  //               if(validsex(umsex,ufsex))
  //               {
  //               }
  //               } 


  //               function userid_validation(uid,mx,my)
  //               {
  //               var uid_len = uid.value.length;
  //               if (uid_len == 0 || uid_len >= my || uid_len < mx)
  //               {
  //               alert("User Id should not be empty / length be between "+mx+" to "+my);
  //               uid.focus();
  //               return false;
  //               }
  //               return true;
  //               }           
  //           }

  //   if(sname == ""){
  //       document.getElementById('vname').innerHTML =" ** Please fill the username field";
  //       return false;
  //   }
  //   // // if(sname=cell1){
  //   //   {
  //   //  document.getElementById('vname').innerHTML =document.getElementById('sname').value;
  //   //  document.getElementById('vname').innerHTML =cell1;
  //   //   // return false; 
  //   // }
    
  //     var namereg = /^[A-Za-z]+$/;
  //     if (!sname.match(namereg)) {
  //       document.getElementById('vname').innerHTML =" ** Plese enter character are only..";
  //       return false; 
  //     }
  //   if(roll == ""){
  //       document.getElementById('rn').innerHTML =" ** Please fill the Roll No";
  //       return false;
  //   }
  //   if((roll.length <= 1) || (roll.length >5)) {
  //     document.getElementById('rn').innerHTML =" ** Roll Number Should Not less than One Digit and More Than Five Digit";
  //     return false;
  //   }
  //   if(isNaN(roll)){
  //       document.getElementById('rn').innerHTML =" ** only Numbers are allowed";
  //       return false;
  //   }

  //   if(dept == ""){
  //       document.getElementById('dpt').innerHTML =" ** Please Select Department field";
  //       return false;
  //   }
  //   if(birthday == ""){
  //     document.getElementById('birth').innerHTML =" ** Please Select birthdate";
  //     return false;
  // }
                      