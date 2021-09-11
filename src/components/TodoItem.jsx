import styles from 'components/styles/TodoItem.module.css'
import Button from 'components/Button'

const TodoItem = ({ id, title, completed, onChange, onClick}) => {
  return (
    <div className={completed ? `${styles.todo_item_completed} ${styles.todo_item}` : styles.todo_item}>
      <p className={completed ? styles.completed : "uncompleted"}>{title}</p>
      <div className={styles.todo_action}>
        <input id={id} className={styles.todo_check} type="checkbox" onChange={onChange} checked={completed} />
        <Button isOutlineSecondary id={id} onClick={onClick}>DELETE</Button>
       </div>
    </div>
  )
}

export default TodoItem;
