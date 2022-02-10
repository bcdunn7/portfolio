import { Routes, Route } from "react-router-dom";
import Home from './Home';
import NotFound from "./NotFound";
import Projects from "./Projects";
import Contact from "./Contact";

const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default Routing;
