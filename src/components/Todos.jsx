import {Component} from 'react'
import './styles/Todos.css'
import Button from './Button'

export default class Todos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoData: this.props.todoData,
      inputData: '',
    }
    this.addTask = this.addTask.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.checkedTask = this.checkedTask.bind(this)
  }

  addTask(e) {
    const newTask = {
      id: this.state.todoData.length,
      title: e.target.value,
      completed: false
    }

    if(e.key === 'Enter') {
      if(e.target.value === '') {
        return alert('Task todo tidak boleh kosong!')
      }
      this.setState({ todoData: [...this.state.todoData, newTask]})
    } else if (e.type === "click") {
      if(this.state.inputData === '') {
        return alert('Task todo tidak boleh kosong!')
      }
      const newTask = {
        id: this.state.todoData.length,
        title: this.state.inputData,
        completed: false
      }
      this.setState({ todoData: [...this.state.todoData, newTask]})
    }
  }

  deleteTask(e) {
   const id = parseInt(e.currentTarget.getAttribute('todo-id'))
   const remainingTask = this.state.todoData.filter((todo) => todo.id !== id)
   console.log(e.currentTarget.getAttribute('todo-id'))
   this.setState({
     todoData: remainingTask
   })
  }

  checkedTask(e) {
   const id = parseInt(e.currentTarget.getAttribute('todo-id'))
   const checkingTask = this.state.todoData.map((todo) => {
     if(todo.id == id) {
       return {...todo, completed: !todo.completed}
     }
     return todo
   })
   console.log(e.currentTarget.getAttribute('todo-id'))
   this.setState({
     todoData: checkingTask
   })
  }

  handleChange(e) {
    this.setState({
      inputData: e.target.value
    })
  }

  render() {
    return (
    <>
    <section className="todo_input-container">
      <div className="todo_input-placing">
        <input type="text" className="todo_input" onChange={this.handleChange} onKeyDown={this.addTask} placeHolder="New Task..." />
        <Button onClick={this.addTask}>Add</Button>
      </div>
    </section>
    <div class="container">
    <section className="todos_container">
      {this.state.todoData.map((d, i) => (
        <div className="todo_item" key={i}>
          <p className={d.completed ? "completed" : "uncompleted"}>{d.title}</p>
          <div className="todo_action">
          <input className="todo_check" type="checkbox" todo-id={d.id} onChange={this.checkedTask} checked={d.completed} />
          <button className="btn-todo" todo-id={d.id} onClick={this.deleteTask}>DELETE</button>
          </div>
        </div>
      ))}
      {this.state.todoData.length == 0 && <h1>No Todos.</h1>}
    </section>
    </div>
    </>
    )
  }
}
