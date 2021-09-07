import './Todos.css'

function Todos({ todoData }) {
  return (
    <section className="todos_container">
      {todoData.map((d, i) => (
        <div class="todo_item" key={`todo-${i}`}>
          <p class={d.completed ? "completed" : "uncompleted"}>{d.title}</p>
        </div>
      ))}
    </section>
  );
}

export default Todos;
