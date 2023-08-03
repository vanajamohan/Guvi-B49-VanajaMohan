

  async function fetchurl() {
    const apiUrl = "https://api-thirukkural.vercel.app/api?num=1";
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data);
   
       
         let number = data.number; 
         let chapgrp_tam = data.chapgrp_tam;
         let chap_tam = data.chap_tam;
         let line1 = data.line1;
         let line2 = data.line2;
         let tam_exp = data.tam_exp;
         let sect_eng = data.sect_eng; 
         let chapgrp_eng = data.chapgrp_eng;
         let chap_eng = data.chap_eng;
         let eng = data.eng;
         let eng_exp = data.eng_exp;
    

        //  console.log(number);
        //  console.log(chapgrp_tam);
        //  console.log(chap_tam);
        //  console.log(line1);
        //  console.log(line2);
        //  console.log(tam_exp);

       
         const para1 = document.createElement("p");
         para1.setAttribute("class","para1class");
         para1.innerHTML = `TAMIL TIRUKURAL`;
         const para2 = document.createElement("p");
         para2.setAttribute("class","para2class");
         para2.innerHTML = `Chapter Group :  ${number} ${chapgrp_tam}`;
         const para3 = document.createElement("p");
         para3.setAttribute("class","para3class");
         para3.innerHTML = `Tamil Chapter : ${chap_tam}`;
         const para4 = document.createElement("p");

         para4.setAttribute("class","para4class");
         para4.style.color = "Red";
         para4.innerHTML = `${line1}`;
         const para5 = document.createElement("p");

         para5.setAttribute("class","para5class");
         para5.style.color = "Red";
         para5.innerHTML = `${line2}`;

         const para6 = document.createElement("p");
         para6.setAttribute("class","para6class");
         para6.innerHTML = `Explanation : ${tam_exp}`;
       //  para1.style.textAlign = "center"
         const tamildiv = document.getElementById("tamildiv");
         tamildiv.append(para1,para2,para3,para4,para5,para6);             
          

         const para1english = document.createElement("p");
         para1english.setAttribute("class","para1class");
         para1english.innerHTML = `English TIRUKURAL`;
         
         const para2english = document.createElement("p");
         para2english.setAttribute("class","para2class");
         para2english.innerHTML = `Chapter Group :  ${number} ${sect_eng}`;
        
         const para3english = document.createElement("p");
         para3english.setAttribute("class","para3class");
         para3english.innerHTML = `English Chapter : ${chapgrp_eng}`;

         const para4english = document.createElement("p");
         para4english.setAttribute("class","para4class");
         para4english.innerHTML = `Chapter ${chap_eng}`;

         const para5english = document.createElement("p");
         para5english.setAttribute("class","para5class");
         para5english.style.color = "Red";
         para5english.innerHTML = `${eng}`;

         const para6english = document.createElement("p");
         para6english.setAttribute("class","para5class");         
         para6english.innerHTML = `Explanation : ${eng_exp}`;

         const englishdiv = document.getElementById("englishdiv");
         englishdiv.append(para1english,para2english,para3english,
         para4english,para5english,para6english);
      }
    catch (err) {
      console.log("Error fetching Data: ", err);
    }
  }
  fetchurl();