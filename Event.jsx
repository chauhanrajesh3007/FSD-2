function Event(){
    function handleClick(){
        alert("Clicked")
    }
    const mystyle={color:"whitre",
        backgroundColor:"black",
        padding:"20px 25px",margin:"200px"}
    return(<button style={mystyle} onClick={handleClick}>Click</button>)
    }
    export default Event