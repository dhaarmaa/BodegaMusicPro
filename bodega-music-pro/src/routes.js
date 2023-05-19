import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import ProductInCome from "./views/ProductInCome";

const Router = () => (
    <BrowserRouter>
        <Routes>   
            <Route path='/' element={<Home/>} />
            <Route path="/Entrada" element= {<ProductInCome/>}/>
            <Route path="/Login" element= {<Login/>}/>
            <Route path="/Register" element= {<Register/>}/>
            <Route path="*" element={<div>404</div> } />
        </Routes>
    </BrowserRouter>
);

export default Router;

