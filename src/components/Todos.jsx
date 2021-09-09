import {useState} from 'react'
import './styles/Todos.css'
import Button from './Button'

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
   const id = parseInt(e.currentTarget.getAttribute('todo-id'))
   const remainingTask = todos.filter((todo) => todo.id !== id)
    .map((todo, idx) => {
      return {...todo, id : idx + 1} 
    })
   setTodo(remainingTask)
  }

  function checkedTask(e) {
   const id = parseInt(e.currentTarget.getAttribute('todo-id'))
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
    <section className="todo_input-container">
      <div className="todo_input-placing">
        <input type="text" className="todo_input" onChange={handleChange} onKeyDown={addTask} placeHolder="New Task..." />
        <Button onClick={addTask}>Add</Button>
      </div>
    </section>
    <section className="todo_filter-container">
      <div className="todo_filter-placing">
        <p> Filter : </p>
        <button className={isClicked.done ? 'clicked': ''} id="done" onClick={handleFilter}>Done</button>
        <button className={isClicked.doing ? 'clicked' : ''} id="doing" onClick={handleFilter}>Doing</button>
        <button className={isClicked.all ? 'clicked' : ''} id="all" onClick={handleFilter}>All</button>
      </div>
    </section>
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
      }).map((d, i) => (
        <div className={d.completed ? "todo_item-completed todo_item" : "todo_item"} key={i}>
          <p className={d.completed ? "completed" : "uncompleted"}>{d.title}</p>
          <div className="todo_action">
          <input className="todo_check" type="checkbox" todo-id={d.id} onChange={checkedTask} checked={d.completed} />
          <button className="btn-todo" todo-id={d.id} onClick={deleteTask}>DELETE</button>
          </div>
        </div>
      ))}
      {todos.length === 0 && <h1>No Todos.</h1>}
    </section>
    </div>
    </>
  )
}

export default Todos
