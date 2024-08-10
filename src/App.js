import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Frontpage from "./Components/Frontpage";
import Home from "./Components/Home";
// import New from "./Components/New";


export default function App(){
  return(
    <div>
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Login/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Frontpage" element={<Frontpage/>}/>
      {/* <Route path="/New" element={<New/>}/> */}

    </Routes>
    </BrowserRouter>
    </div>
  )
}