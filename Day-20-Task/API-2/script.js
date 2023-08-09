

async function fetchurl() {
    const apiUrl = "https://www.balldontlie.io/api/v1/players";
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data);
   
      for (var i = 0; i < 3; i++) {
         let Id = data[i].id; 
         let FirstName = data[i].first_name;
         let LastName = data[i].last_name;
         let Position = data[i].position;
         let City = data[i].team.city;
    

        //  console.log(number);
        //  console.log(chapgrp_tam);
        //  console.log(chap_tam);
        //  console.log(line1);
        //  console.log(line2);
        //  console.log(tam_exp);

       
         const para1 = document.createElement("p");
         para1.setAttribute("class","para1class");
         para1.innerHTML = `Person ID :  ${Id}`;
         const para2 = document.createElement("p");
         para2.setAttribute("class","para2class");
         para2.innerHTML = `First Name :  ${FirstName} ${chapgrp_tam}`;
         const para3 = document.createElement("p");
         para3.setAttribute("class","para3class");
         para3.innerHTML = `Last Name : ${LastName}`;
         const para4 = document.createElement("p");

         para4.setAttribute("class","para4class");
         para4.style.color = "Red";
         para4.innerHTML = `Position : ${Position}`;
         const para5 = document.createElement("p");

         para5.setAttribute("class","para5class");
         para5.innerHTML = `City : ${City}`;

       
         const maindiv = document.getElementById("main");
         tamildiv.append(para1,para2,para3,para4,para5,para6);             
          

         
      }
      }
    catch (err) {
      console.log("Error fetching Data: ", err);
    }
  
}
  fetchurl();