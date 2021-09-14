import {useState} from 'react'
import './styles/Todos.css'
import TodoItem from 'components/TodoItem'
import TodoInput from 'components/TodoInput'
import TodoFilter from 'components/TodoFilter'
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, toggleStatus } from "data/Todos";

function Todos({todoData}) {
  const todoList = useSelector(state => state)
  const dispatch = useDispatch()
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
    if(e.key === 'Enter') {
      if(e.target.value === '') {
        return alert('Task todo tidak boleh kosong!')
      }
      dispatch(addTodo(e.target.value))
    } else if (e.type === "click") {
      if(inputData === '') {
        return alert('Task todo tidak boleh kosong!')
      }
      dispatch(addTodo(e.target.value))
    }
  }

  function deleteTask(e) {
   dispatch(removeTodo(parseInt(e.currentTarget.getAttribute('id'))))
  }

  function checkedTask(e) {
   dispatch(toggleStatus(parseInt(e.currentTarget.getAttribute('id'))))
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
        {todoList.data.filter((d) => {
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
