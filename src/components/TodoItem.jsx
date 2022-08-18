import CheckBtn from '../assets/icon-check.svg'
import CloseBtn from '../assets/icon-cross.svg'

function TodoItem(props) {
    function deleteTodo () {
        //console.log('deleted')
        //console.log(props.todo)
       props.setTodoes(props.todoo.filter(element => element.id !== props.todo.id))
    }
    //const set = {props.setTodoes}
    //const todoooo ={props.todoo} 

    function completeTodo () {
        props.setTodoes(props.todoo.map(item => {
            if(item.id === props.todo.id) {
                return{
                    ...item,
                    completed: !item.completed
                }
            }
            return item;
        }))
    }
  return (   
    //<div className="todo-container">   
    <li className={props.lightMode ? "light" : ""}>
    <button className={props.todo.completed ? "true" : ""} onClick={completeTodo}><img src={CheckBtn} alt="" className={props.todo.completed ? "true" : ""}/></button>
    <span className={props.todo.completed ? "completed" : ''}>{props.text}</span>
    <button className='close-btn ' onClick={deleteTodo}><img src={CloseBtn} alt="" /></button>
   </li>

    //</div>
  )
}

export default TodoItem;