import styles from 'components/styles/TodoFilter.module.css'
import Button from 'components/Button'

const TodoFilter = ({isClicked, onClick}) => {
  return (
    <section className={styles.todo_filter_container}>
      <div className={styles.todo_filter_placing}>
        <p> Filter : </p>
        <div>
        <Button isPrimary={isClicked.done} isSecondary id="done" onClick={onClick}>Done</Button>
        <Button isPrimary={isClicked.doing} isSecondary id="doing" onClick={onClick}>Doing</Button>
        <Button isPrimary={isClicked.all} isSecondary id="all" onClick={onClick}>All</Button>
        </div>  
      </div>
    </section>
  )
}
export default TodoFilter
