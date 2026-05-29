import P1 from "./P1"
import img1 from './assets/hero.png'
import img2 from './assets/react.svg'
function P(){
    const prod=[{pic:img1,name:"prod1",price:3000},
        {pic:img2,name:"prod2",price:4000}]
        return(<P1 info={prod}/>)
}
export default P
