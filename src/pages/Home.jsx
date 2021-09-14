import "pages/styles/Home.css";
import Header from 'components/Header';
import Todos from 'components/Todos';

function Home() {
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
      <Header />
      <Todos todoData={todoData} />
    </main>
  );
}

export default Home;
