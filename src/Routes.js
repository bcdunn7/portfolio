import { Routes, Route } from "react-router-dom";
import Home from './Home';
import NotFound from "./NotFound";

const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    )
}

export default Routing;
