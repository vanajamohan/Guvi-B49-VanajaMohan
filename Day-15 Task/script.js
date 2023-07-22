const form = document.getElementById("myform");
const table = document.getElementById("dataTable");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const address = document.getElementById("address").value;
  const pincode = document.getElementById("pincode").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const foodcheckboxes = document.querySelectorAll(
    'input[name="food"]:checked'
  );
  const foodChoices = Array.from(foodcheckboxes).map(
    (checkbox) => checkbox.value
  );

  if (foodChoices.length < 2) {
    alert("Please choose at least 2 food options.");
    return;
  }

  const newRow = table.insertRow(); //document.createElement("tr");
  const fnameCol = newRow.insertCell(); 
  const lnameCol = newRow.insertCell();
  const addCol = newRow.insertCell();
  const pinCol = newRow.insertCell();//document.createElement("td");
  const genderCol = newRow.insertCell(); //document.createElement("td");
  const foodCol = newRow.insertCell(); //document.createElement("td");

  fnameCol.textContent = fname;
  lnameCol.textContent = lname;
  addCol.textContent = address;
  pinCol.textContent = pincode;
  genderCol.textContent = gender;
  foodCol.textContent = foodChoices.join(", ");

  form.reset();
});
