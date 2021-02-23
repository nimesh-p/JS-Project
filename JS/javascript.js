valid_name = [];
valid_roll = [];

window.onload = function () {
  var years = document.getElementById("year");

  var myDate = new Date();
  var currentYear = myDate.getFullYear();
  for (var i = 1990; i <= currentYear; i++) {
    var option = document.createElement("option");
    option.innerHTML = i;
    years.appendChild(option);
  }
};

function unique_name(sname) {
  if (valid_name.length > 0) {
    valid_name.forEach(function (usr_name) {
      if (sname.toLowerCase() == usr_name.toLowerCase()) {
        document.getElementById("vname").innerHTML = " **Name Must Be Unique";
        throw new Error("Name Error!");
      }
    });
  }
}

function unique_roll(roll) {
  if (valid_roll.length > 0) {
    valid_roll.forEach(function (usr_roll) {
      if (roll == usr_roll) {
        document.getElementById("rn").innerHTML =
          " **Roll number Must be Unique";
        throw new Error("Name Error!");
      }
    });
  }
}

function testCharInput() {
  var sname = document.getElementById("sname").value;

  if (sname == "") {
    document.getElementById("vname").innerHTML =
      " ** Please fill the username field";
    return false;
  } else {
    var namereg = /^[A-Za-z\W]+$/;
    if (!sname.match(namereg)) {
      document.getElementById("vname").innerHTML =
        " ** Plese enter characters  only..";
      return false;
    } 
    else {
      document.getElementById("vname").innerHTML = "";
      return true;
    }
  }
}
function testIntInput() {
  var roll = document.getElementById("roll").value;
  if (roll == "") {
    document.getElementById("rn").innerHTML = " ** Please fill the Roll No";
    return false;
  } else {
    if (isNaN(roll)) {
      document.getElementById("rn").innerHTML = " ** only Numbers are allowed";
      return false;
    }
     else {
      document.getElementById("rn").innerHTML = "";
      return true;
    }
  }
}
function testselInput() {
  var dept = document.getElementById("dept").value;
  if (dept == "") {
    document.getElementById("dpt").innerHTML =
      " ** Please Select Department field";
      return false;
  } else {
    document.getElementById("dpt").innerHTML = "";
    return true;
  }
}

function testInput() {
  var birthday = document.getElementById("birthday").value;
  if (birthday == "") {
    document.getElementById("birth").innerHTML = " ** Please Select birthdate";
    return false;
  } else {
    document.getElementById("birth").innerHTML = "";
    return true;
  }
}

function validation() {
  var sname = document.getElementById("sname").value;
  var roll = document.getElementById("roll").value;
  var dept = document.getElementById("dept").value;
  // var yrs = document.getElementById('year').value;
  var birthday = document.getElementById("birthday").value;

  if (testCharInput() && testIntInput() && testselInput() && testInput()) {
    var sname = document.getElementById("sname").value;
    var roll = document.getElementById("roll").value;
    var dept = document.getElementById("dept").value;
    var year = document.getElementById("year").value;
    var birthday = document.getElementById("birthday").value;
    var gender = document.querySelector('input[name="Gender"]:checked').value;

    var table = document.getElementsByTagName("table")[0];
    unique_name(sname);
    unique_roll(roll);
    var newRow = table.insertRow(1);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    var cell8 = newRow.insertCell(7);

    var cell9 = newRow.insertCell(8);

    // var cell10=newRow.insertCell(9);

    cell1.innerHTML = sname;
    valid_name.push(sname);
    // console.log(valid_name)
    cell2.innerHTML = roll;
    valid_roll.push(roll);
    cell3.innerHTML = dept;
    cell4.innerHTML = year;
    cell5.innerHTML = birthday;
    cell6.innerHTML = gender;
    cell7.innerHTML = '<input type="checkbox" class="checked">';
    cell8.innerHTML =
      '<button type="button" class="dlt" value="delete" onclick="deletedata(this);">Delete</button>';
    cell9.innerHTML = `<button type="button" class="update" onclick="editRow(this)">Edit</button>`;
  }
  // cell9.innerHTML = '<input type="button" value="Edit" onclick="SelectRow(this);">';
  // cell10.innerHTML ='<input type="button" value="Done" onclick="EditRow(this);">';
}

function deletedata() {
  var sure = window.confirm("Are you sure you want to delete Selected records");
  if (sure) {
    var checkedbox = document.querySelectorAll(".checked");
    for (var i = 0; i < checkedbox.length; i++) {
      if (checkedbox[i].checked) {
        checkedbox[i].parentNode.parentNode.remove();
      }
    }
  }
}

function editRow(newRow) {
  var submit = document.getElementById("register");
  submit.disabled = true;
  // var muldelete = document.getElementById('muldelete');
  // muldelete.disabled=true;
  document.getElementById("sname").value =
    newRow.parentNode.parentNode.cells[0].innerHTML;
    
  document.getElementById("roll").value =
    newRow.parentNode.parentNode.cells[1].innerHTML;
  document.querySelector("#dept").value =
    newRow.parentNode.parentNode.cells[2].innerHTML;
  document.querySelector("#year").value =
    newRow.parentNode.parentNode.cells[3].innerHTML;
  document.getElementById("birthday").value =
    newRow.parentNode.parentNode.cells[4].innerHTML;
  document.querySelector("input[name='Gender']:checked").value =
    newRow.parentNode.parentNode.cells[5].innerHTML;

  var update_btn = document.querySelector(".new-btn");
  update_btn.innerHTML =
    '<button type="button" value="Update"  class="update_btn">Update</button>';

  var new_update = document.querySelector(".update_btn");
  new_update.addEventListener("click", function () {
    submit.disabled = false;
    // muldelete.disabled=false;
    if (testCharInput() && testIntInput() && testselInput() && testInput()){
    newRow.parentNode.parentNode.cells[0].innerHTML = document.getElementById(
      "sname"
    ).value;
    valid_name.push(sname);
    newRow.parentNode.parentNode.cells[1].innerHTML = document.getElementById(
      "roll"
    ).value;
    newRow.parentNode.parentNode.cells[2].innerHTML = document.querySelector(
      "#dept"
    ).value;
    newRow.parentNode.parentNode.cells[3].innerHTML = document.querySelector(
      "#year"
    ).value;
    newRow.parentNode.parentNode.cells[4].innerHTML = document.getElementById(
      "birthday"
    ).value;
    newRow.parentNode.parentNode.cells[5].innerHTML = document.querySelector(
      "input[name='Gender']:checked"
    ).value;
    } 
  });
}

// function updation(){
//   let update_btn = document.querySelectorAll('.update');
//   Array.from(update_btn).forEach(function(btn) {
//     btn.addEventListener('click', function(e) {

//       let regBtn = document.getElementById('register')
//       regBtn.disabled = true
//       let newRow = e.target.parentElement.parentElement;
//       let len = newRow .cells.length;
//       sname.value = newRow .cells[0].innerText;

//       roll.value = Number(newRow .cells[1].innerText);
//       dept.value = newRow .cells[2].innerText;
//       year.value = newRow .cells[3].innerText;
//       birthday.value =newRow .cells[4].innerText;
//       Gender.value = newRow .cells[5].innerText;

//       let new_btn = document.querySelector('.new-btn')
//       new_btn.innerHTML = '<button type="button" class="new_update">Update</button>'

//       let new_update = document.querySelector('.new_update')
//       new_update.addEventListener('click', function() {

//         regBtn.disabled = false
//         newRow .cells[0].innerText = sname.value;
//         newRow .cells[1].innerText = roll.value;
//         newRow .cells[2].innerText = dept.value;
//         newRow .cells[3].innerText = year.value;
//         newRow .cells[4].innerText = birthday.value;
//         newRow .cells[5].innerText = document.querySelector('input[name="Gender"]:checked').value;
//       });
//     });
//   });
// }
