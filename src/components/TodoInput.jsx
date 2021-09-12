import styles from 'components/styles/TodoInput.module.css'
import Button from 'components/Button'

const TodoInput = ({ handleChange, handleAddTask }) =>{
  return (
    <section className={styles.todo_input_container}>
      <div className={styles.todo_input_placing}>
        <input type="text" className={styles.todo_input} onChange={handleChange} onKeyDown={handleAddTask} placeHolder="New Task..." />
        <Button className={styles.btn_add} isPrimary onClick={handleAddTask} >Add</Button>
      </div>
    </section>
  )  
}

export default TodoInput
