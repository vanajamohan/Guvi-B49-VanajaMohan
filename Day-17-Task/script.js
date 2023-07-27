  //Create a new element and set its attributes

  const apiUrl = "https://restcountries.com/v3.1/all";

fetch(apiUrl).then(response => {
    if(response.status === 200){
        return response.json();
    }
}
    ).then((val )=>{
        console.log(val);
       
        for (var i = 0; i < 3; i++) {
         
         let countryname = val[i].name.common; 
         let capital = val[i].capital;
         let region = val[i].region;
         let countrycode = val[i].cioc;
         let latlong = val[i].capitalInfo.latlng;
        // latlong = latlong[0].split(",");
         let lat = latlong[0];
         let long = latlong[1];
         let sourcelink = val[i].flags.png;

         console.log(val[i].flag);
         console.log(val[i].name.common);
         console.log(val[i].capital);
         console.log(val[i].region);
         console.log(val[i].cioc);
         console.log(val[i].capitalInfo.latlng);
         console.log(latlong[0]);
         console.log(latlong[1]);
         console.log(val[i].flags.png);

         
          const cardcolumndiv = document.createElement("div");
          cardcolumndiv.setAttribute("id", "card");
          cardcolumndiv.setAttribute("class", "card");
          cardcolumndiv.style.backgroundColor ="beige";
          //cardcolumndiv.style.boader ="1px solid black";
          
          const imgtag = document.createElement("img");
          imgtag.src = `${sourcelink}`;
          imgtag.style.width ="100%";

          const cardbodydiv = document.createElement("div");
          cardbodydiv.setAttribute("id", "cardbody");
          cardbodydiv.setAttribute("class", "card-body");
          cardbodydiv.innerHTML = `${countryname}`;
          cardbodydiv.style.textAlign = "center";
          cardbodydiv.style.backgroundColor ="beige";

         
          
          const para1 = document.createElement("p");
          para1.setAttribute("class","card-text1");
          para1.innerHTML = `Capital : ${capital}`;
          para1.style.textAlign = "center"

          const para2 = document.createElement("p");
          para2.innerHTML = `Region : ${region}`;
          para2.setAttribute("class","card-text2");
          para2.style.textAlign = "center"

          const para3 = document.createElement("p");
          para3.innerHTML = `Country Code : ${countrycode}`;
          para3.setAttribute("class","card-text3");
          para3.style.textAlign = "center"

          const link = document.createElement("a");
          link.setAttribute("class", "btn btn-primary");
          link.setAttribute("target", "_blank");
          link.setAttribute("href", `https://api.openweathermap.org/data/2.5/weather?lat= ${lat} &lon= ${long} &appid=37ba9824a231c697643e4a57ef092cf6`);
          link.innerText = "Click For Weather";
          link.style.textAlign = "center"

          
           const maindiv = document.getElementById("main");
           maindiv.append(cardcolumndiv,cardbodydiv,imgtag,para1,para2,para3,link);             
              }
             } )
        .catch((err =>{
            console.log("Error:  ", err)
        })

        );