import { BrowserRouter,NavLink,Route,Routes } from "react-router-dom";
import About from "./component/about";
import Contact from "./component/contact";
import Service from "./component/service";
import Home from "./component/home";
import Header from "./component/Header";
import react from "./assets/react.svg"
function App(){
  return<>
  
  <h1>this our App.jsx</h1>
  <BrowserRouter>
  <Header/>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About img={react}proTittle="REACT"/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/service" element={<Service/>}></Route>


    </Routes>
  </BrowserRouter>
  </>
}
export default App;