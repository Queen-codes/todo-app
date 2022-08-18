import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
//import reactLogo from './assets/react.svg'
import Header from "./components/Header"
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
  const[lightMode, setLightMode] = useState(false)
  const[inputValue, setInputValue] = useState('')
  const[todos, setTodos] = useState( JSON.parse(localStorage.getItem("todos")) || [])
  const [status, setStatus] = useState('All')
  const[filtered, setFiltered] = useState([])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  
  useEffect(() => {
    function keyDownHandler (e) {
    // console.log('User pressed: ', e.key);
      if(e.keycode === 13) {
        handleSubmit()
      }
    }
      document.addEventListener('keydown', keyDownHandler);
      return () => {
        document.removeEventListener('keydown', keyDownHandler);
      };
  }, [])

  useEffect(() => {
    filterTodos()
  },[todos, status])

  

  function filterTodos () {
    switch (status) {
      case "Completed":
      setFiltered(todos.filter(todo => todo.completed === true)) 

      break;
      case "Active":
      setFiltered(todos.filter(todo => todo.completed === false)) 
      break; 

      default:
        setFiltered(todos)
        
        break;
    }
  }

  function toggleLightMode () {
    setLightMode(prevMode => !prevMode)
  }

  function handleChange (e) {
     //console.log(e.target.value)
     setInputValue(e.target.value)
  }

  function handleSubmit (e) {
    e.preventDefault()
   setTodos(prevTodos => {
    return[
      ...prevTodos, 
      {text: inputValue, completed: false, id: nanoid()}
    ]
   })
   setInputValue('')
  }

  return (
    <div className="App">
      <Header
      lightMode={lightMode}
      toggleLightMode={toggleLightMode}
      />
      <Form
      lightMode={lightMode}
      value={inputValue}
      onchange={handleChange}
      onsubmit={handleSubmit}
      todo={todos}
      />
     <TodoList
      lightMode={lightMode}
      todoes={todos}
      value={inputValue}
      setTodoes={setTodos}
      setStatus={setStatus}
      filtered={filtered}
      />
    </div>
  )
}

export default App
