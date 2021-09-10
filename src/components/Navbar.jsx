import {Link} from 'react-router-dom'
import styles from 'components/styles/Navbar.module.css'

function Navbar() {
  return (
    <div className={styles.nav}>
      <Link to="/"><p>Home</p></Link>
      <Link to="/about"><p>About</p></Link>
    </div>
  )
}

export default Navbar;
