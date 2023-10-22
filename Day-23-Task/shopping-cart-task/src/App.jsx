import { useState } from 'react'
import './App.css'
import CakeItems from './CakeItems';
import Home from './Home';
import './styles.css'
import image from "./img/thumbbg.jpg"
import './index.css'
import { useCallback } from 'react';
import { useReducer } from 'react';



function App(props) {

//list of items

  let items = [{
    id: 1,
    name: "Banana Cake 1 KG",
    imglink: "https://static.toiimg.com/thumb/52653612.cms?width=1200&height=900",
    orginalPrice: 1000,
    discountPrice: 950,
    recommended: true,
    discount: true,
    btnname: "Add to Cart",
  }, {
    id: 2,
    name: "Cookies 500 Gm",
    imglink: "https://img.freepik.com/free-photo/delicious-cookies-arrangement_23-2150707203.jpg",
    orginalPrice: 300,
    discountPrice: 250,
    recommended: false,
    discount: true,
    btnname: "Add to Cart",
  }, {
    id: 3,
    name: "Sponge Cake 1 KG",
    imglink: "https://media.istockphoto.com/id/903678018/photo/homemade-chiffon-or-sponge-cake-on-white-plate-on-white-isolated-background-with-clipping.jpg?s=612x612&w=0&k=20&c=Fy1p5XBih2JJGyFaF2BFHfLZf3oBZv5pn0tgNOGY9OM=",
    orginalPrice: 600,
    discountPrice: 550,
    recommended: false,
    discount: true,
    btnname: "Add to Cart",
  }, {
    id: 4,
    name: "Millets Cake 1KG",
    imglink: "https://media.istockphoto.com/id/158482866/photo/millet-and-pumpkin-pie.jpg?s=612x612&w=0&k=20&c=7SDHgkbsqqXYiNM-hB9fHvhVB6yjXqzJomik5GIlPBw=",
    orginalPrice: 1100,
    discountPrice: 1025,
    recommended: true,
    discount: true,
    btnname: "Add to Cart",
  }, {
    id: 5,
    name: "Wheat Bread (1 Packet)",
    imglink: "https://5.imimg.com/data5/UE/OS/GLADMIN-47031453/wheat-bread-method-500x500.jpg",
    orginalPrice: 60,
    discountPrice: 40,
    recommended: false,
    discount: false,
    btnname: "Add to Cart",
  }, {
    id: 6,
    name: "Plum Cake 1 KG",
    imglink: "https://www.shutterstock.com/image-photo/homemade-sliced-plum-cakeshallow-depth-260nw-237916765.jpg",
    orginalPrice: 1250,
    discountPrice: 1150,
    recommended: true,
    discount: true,
    btnname: "Add to Cart",
  }, {
    id: 7,
    name: "Honey Cake 500 Gm",
    imglink: "https://pbs.twimg.com/media/FPE12jiaIAM4g0v?format=jpg&name=4096x4096",
    orginalPrice: 400,
    discountPrice: 300,
    recommended: true,
    discount: false,
    btnname: "Add to Cart",
  }, {
    id: 8,
    name: "Rainbow Cake per piece",
    imglink: "https://media.istockphoto.com/id/1018673926/photo/rainbow-cake-on-white-background.jpg?s=612x612&w=0&k=20&c=u9HdtiTkp32CkyK73RUUDUEMFH97yG1T1FfEvxOMM5k=",
    orginalPrice: 115,
    discountPrice: 95,
    recommended: true,
    discount: true,
    btnname: "Add to Cart",
  }
  ];

 
  


 
  const [cartCount, setCartCount] = useState(0);
 
  return (
    <>
      <Home cartCount={cartCount} />
      <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

      {items.map((items) => <CakeItems items={items} setCartCount={setCartCount}  />)}
      </div>
            </div>
        </section>
     
        {/* <!-- Footer--> */}
        <footer className="py-5 bg-dark">
            <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Cluster Cakes@2023</p></div>
        </footer>
        
    </>
  )
}

export default App
