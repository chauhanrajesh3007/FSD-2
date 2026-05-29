import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Home1 from './Home1'
import Product from './Product'
import Nopage1 from './Nopage1'
import img1 from './assets/hero.png'
import img2 from './assets/react.svg'
import img3 from './assets/vite.svg'
function Main1(){
    let arr=[{pic:img1,name:"prod1",price:3000},
        {pic:img2,name:"prod2",price:4000},
        {pic:img3,name:"prod3",price:5000}
    ]
    return(<Router>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/product">Product</Link></li>
        </ul>
        <Routes>
            <Route path="/" element={<Home1/>}/>
            <Route path="/product" element={<Product info={arr}/>}/>
            <Route path="/*" element={<Nopage1/>}/>
        </Routes>
    </Router>)
}
export default Main1
