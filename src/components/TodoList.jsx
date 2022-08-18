import TodoItem from './TodoItem';

function TodoList(props) {

  function clearAll () {
    //console.log(props.todoes)
    props.setTodoes(props.todoes.filter(el => el.completed === false))
  }
  function statusChange(e) {
    //console.log(e.target.firstChild.data)
    props.setStatus(e.target.firstChild.data)
  }
  
  const modeStyles = props.lightMode ? "light" : "";

  return (
    <main className={modeStyles}>
      <ul className={modeStyles}>
        {props.filtered.map(todo => {
          return <TodoItem key={todo.id} text={todo.text} setTodoes={props.setTodoes} todoo={props.todoes} todo={todo} lightMode={props.lightMode}/>
        })}
         
        <section className='bottom-sector'>
         <span className={modeStyles}> {props.todoes.filter(el => {if (el.completed) { return; } return el; }).length} items left</span>

         <div className={props.lightMode ? "light" : ""} onClick={statusChange}>
          <button className= {modeStyles}>All</button>
          <button className={modeStyles}>Active</button>
          <button className={modeStyles}>Completed</button>
        </div>

        <button className='clear-completed' onClick={clearAll}>Clear completed</button>
      </section>
      </ul>
      
      
    </main>
  )
}

export default TodoList;