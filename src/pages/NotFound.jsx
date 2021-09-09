import {Link} from 'react-router-dom'
import styles from 'pages/styles/NotFound.module.css'

function NotFound() {
  return (
    <main className={styles.not_found_page}>
      <h1>404 Not Found</h1>
      <div className={styles.not_found_back}>
        <p>Go back to :</p> 
        <Link to="/">
          <button className={styles.not_found_button}>Home</button>
        </Link>   
    </div>
    </main>
  )
}

export default NotFound
