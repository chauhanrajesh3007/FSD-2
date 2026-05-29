function fm(){
    function handleSubmit(e){
        e.preventDefault()
        alert("form submitted")
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="uname"></input>
            <input type="submit"></input>
        </form>

    )
}
export default fm