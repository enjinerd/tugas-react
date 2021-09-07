import "./App.css";
import Header from './Header';
import Todos from './Todos';
import Footer from './Footer';

function App() {
  const todoData = [
    {
      id: 1,
      title: "Membuat Komponen",
      completed: true,
    },
    {
      id: 2,
      title: "Unit Testing",
      completed: false,
    },
    {
      id: 3,
      title: "Setup Development Environment",
      completed: true,
    },
    {
      id: 4,
      title: "Deploy ke server",
      completed: false,
    },
  ]

  return (
    <main>
      <Header>
        <h1> To Do App</h1>
      </Header>
      <Todos todoData={todoData} />
      <Footer />
    </main>
  );
}

export default App;
