import "./styles/Header.css" ;
import Navbar from 'components/Navbar';

function Header({ children }) {
   return (
    <section className="header">
     <h1>To Do App</h1>
     {children}
     <Navbar />
     </section>
   )
}

export default Header;
