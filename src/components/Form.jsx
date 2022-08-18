function Form(props) {
  //console.log(value)
  return (
    <form onSubmit={props.onsubmit}>
        <input 
        className={props.lightMode ? "light" : ""}
        type="text" 
        placeholder= "Create a new todo..."
        //onChange={handleChange}
        name="todo"
        value={props.value}
        onChange={props.onchange}
        />
        
    </form>
  )
}

export default Form