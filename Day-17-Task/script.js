  //Create a new element and set its attributes

  
  const card1h2 = document.createElement("h2");
  const cardcolumndiv = document.createElement("div");
  const cardbodydiv = document.createElement("div");

 

  card1h2.setAttribute("id","cardh2");
  card1h2.innerText = "Click Button to see Weather"

  cardcolumndiv.setAttribute("id","card1");
  cardcolumndiv.setAttribute("class","card-columns");

  cardbodydiv.setAttribute("id","container");
  cardbodydiv.setAttribute("class","container");


  const ele = document.createElement("div");
  ele.setAttribute("id", "riyaz");
  ele.setAttribute("class", "riyasClass");

  //Set the text content of the new element
  ele.innerText = "Hello, welcome to B49 WD Tamil batch!!!";
  //   const parentEle = document.getElementById("parent");
  //   parentEle.appendChild(ele);

  const para = document.createElement("p");

  para.innerHTML = `<span style="color: blue">HELLOOOO!!!!!</span>`;
  //   para.innerText = "Manikandan Anabalagan!!!";
  //   parentEle.appendChild(para);

  const ach = document.createElement("a");
  //id = "main", class = "mainDiv"
  //setAttribute(name, value);
  //setAttribute("id","main");
  //setAttribute("class", "mainDiv");
  //<a href="" target="_blank">Click me!!!</a>
  ach.setAttribute("target", "_blank");
  ach.setAttribute("href", "");
  ach.innerText = "Click me!!!";
  //   parentEle.appendChild(ach);

  const parentEle = document.getElementById("parent");
  parentEle.append(ele, para, "Test ", ach);