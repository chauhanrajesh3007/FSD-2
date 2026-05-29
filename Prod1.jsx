// WRITE A PROGRAM USING REACT JS IN WHICH YOU HAVE TO PRINT NAME OF STUDENT AND UNIVERSITY WHICH ARE PAST AS PROPS USING JASON
import Prod2 from './Prod2'
function Prod1(){
    const Details={Student_name:"abc",
        Uni_name:"LJU"
    }
    return(
        <Prod2 data={Details}/>
    )
}
export default Prod1
