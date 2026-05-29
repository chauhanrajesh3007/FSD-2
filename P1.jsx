function P1(props){
    return(<>
    {props.info.map((pr)=>{
        return(<div>
            <img src={pr.pic} alt="no image"/>
            <h2>{pr.name}</h2>
            <h3>{pr.price}</h3>
        </div>)
    })}
    </>)
}
export default P1
