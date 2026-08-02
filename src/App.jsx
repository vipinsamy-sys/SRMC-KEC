import { BrowserRouter, Routes, Route } from "react-router-dom";


import Loader from "./components/Loader";
import Home from "./pages/Home";
import Crew from "./pages/Crew";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Achievements from "./pages/Achievements";
import Quiz from "./pages/Quiz";
import Contact from "./pages/Contact";



export default function App(){

return(

<>

<Loader/>

<BrowserRouter>

<Routes>


<Route path="/" element={<Home/>}/>

<Route path="/crew" element={<Crew/>}/>

<Route path="/events" element={<Events/>}/>

<Route path="/gallery" element={<Gallery/>}/>

<Route path="/achievements" element={<Achievements/>}/>

<Route path="/quiz" element={<Quiz/>}/>

<Route path="/contact" element={<Contact/>}/>


</Routes>

</BrowserRouter>

</>

)

}