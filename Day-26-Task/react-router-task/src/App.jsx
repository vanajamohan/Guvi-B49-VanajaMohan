import { useState } from 'react'
import './App.css'
import All from './All'
import FullStack from './FullStack'
import DataScience from './DataScience'
import CyberSecurity from './CyberSecurity'
import Career from './Career'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>

<div>


<img src="./logo.png" style={{width :'100%' ,  height :'100%'}}/>
<nav className="navbar"> 
            <ul className="navMenu"> 
            <li> <Link to="/" className="link" >All</Link></li> 
            <li> <Link to="/fullstackdevelopment" className="link">Full Satck Development</Link></li>
            <li> <Link to="/datascience" className="link">Data Science</Link></li> 
            <li> <Link to="/cybersecurity" className="link">Cyber Security</Link></li>  
            <li> <Link to="/career" className="link">Career</Link></li> 
               
            </ul> 
        </nav> 


  
<Routes>
<Route path="/" exact Component={All}></Route>
<Route path="/fullstackdevelopment"  Component={FullStack}></Route>
<Route path="/datascience"  Component={DataScience}></Route>
<Route path="/cybersecurity"  Component={CyberSecurity}></Route>
<Route path="/career"  Component={Career}></Route>

</Routes>

</div>


     </Router>
     {/* <!-- Footer--> */}
     <footer className="py-5 bg-dark">
            <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Blog@2023</p></div>
        </footer>
    </>
  )
}

export default App
