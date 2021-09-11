import {useState} from 'react'
import './styles/Todos.css'
import TodoItem from 'components/TodoItem'
import TodoInput from 'components/TodoInput'
import TodoFilter from 'components/TodoFilter'

function Todos({todoData}) {
  const [todos, setTodo] = useState(todoData)
  const [inputData, setInput] = useState('')
  const [filter, setFilter] = useState(false)
  const [filterAll, setFilterAll] = useState(true)
  const [isClicked, setClicked] = useState({
    done: false,
    doing: false,
    all: true
  })
  
  function addTask(e) {
    const newTask = {
      id: todos.length + 1,
      title: e.target.value,
      completed: false
    }
    if(e.key === 'Enter') {
      if(e.target.value === '') {
        return alert('Task todo tidak boleh kosong!')
      }
      setTodo([...todos, newTask])
    } else if (e.type === "click") {
      if(inputData === '') {
        return alert('Task todo tidak boleh kosong!')
      }
      const newTask = {
        id: todos.length + 1,
        title: inputData,
        completed: false
      }
      setTodo([...todos, newTask])
    }
    console.log(todos)
  }

  function deleteTask(e) {
   const id = parseInt(e.currentTarget.getAttribute('id'))
   const remainingTask = todos.filter((todo) => todo.id !== id)
    .map((todo, idx) => {
      return {...todo, id : idx + 1} 
    })
   setTodo(remainingTask)
  }

  function checkedTask(e) {
   const id = parseInt(e.currentTarget.getAttribute('id'))
   const checkingTask = todos.map((todo) => {
     if(todo.id === id) {
       return {...todo, completed: !todo.completed}
     }
     return todo
   })
   console.log(e.currentTarget.getAttribute('todo-id'))
   setTodo(checkingTask)
  }

  function handleChange(e) {
    setInput(e.target.value)
  }

  function handleFilter(e) {
    const id = e.currentTarget.getAttribute('id')
    if(id === 'done') {
      setFilter(true)
      setFilterAll(false)
      setClicked({
        done: true
      })
    } else if(id === 'doing') {
      setFilter(false)
      setFilterAll(false)
      setClicked({
        doing: true
      })
    } else if(id === 'all') {
      setFilterAll(true)
      setClicked({
        all: true 
      })
    }
  }
   
  return (
    <>
    <TodoInput
      handleChange = {handleChange}
      handleAddTask = {addTask}
    />
    <TodoFilter
      isClicked = {isClicked}
      onClick = {handleFilter}
    />
    <div class="container">
      <section className="todos_container">
        {todos.filter((d) => {
          if(filter && filterAll !== true) {
            return d.completed === true
          } else if(!filter && filterAll !== true) {
            return d.completed === false
          } else if(filterAll === true) {
            return d
          }
          return d
        }).map(({id, title, completed}) => (
          <TodoItem
            id = {id}
            title = {title}
            completed = {completed}
            onChange = {checkedTask}
           onClick  = {deleteTask}
          />
        ))}
        {todos.length === 0 && <h1>No Todos.</h1>}
      </section>
    </div>
    </>
  )
}

export default Todos
