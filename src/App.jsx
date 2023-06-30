import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./context/userContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Services from "./pages/Services";
import Reservations from "./pages/Reservations";
import Service from "./pages/Service";
import ProtectedRouter from "./components/ProtectedRouter";


function App() {
   const { user } = useContext(UserContext)
   return (
      <>
         <BrowserRouter>
            <Navbar/>
            <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="/login" element={<Login/>}/>
               <Route path="/register" element={<Register/>}/>
               <Route element={<ProtectedRouter isAllowed={!!user}/>}>
                  <Route path="/services" element={<Services/>}/>
                  <Route path="/service/:serviceID" element={<Service/>}/>
                  <Route path="/reservations" element={<Reservations/>}/>
               </Route>
               <Route path="/blog" element={<Blog/>}/>
               <Route path="*" element={<h1>404 Not Found</h1>}/>
            </Routes>
            <Footer/>
         </BrowserRouter>
      </>
   )
}

export default App