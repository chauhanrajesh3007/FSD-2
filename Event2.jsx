function Ev(){
    function handleChange(event){
        console.log(event.target.value)
    }
    return(
        <input type="text" onChange={handleChange}/>
    )
}
export default Ev