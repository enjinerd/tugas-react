import {Link} from 'react-router-dom'
import Header from 'components/Header'
import styles from 'pages/styles/About.module.css'
import Button from 'components/Button'

function AboutApp() {
  return(
     <>
    <Header/>
      <section className={`content ${styles.about}`}>
        <h1>Aplikasi Ini dibuat untuk memudahkan membuat Todo List</h1>
        <div className={styles.btn_about}>
         <Link to="/about"> 
            <Button isOutlineSecondary >
              About
            </Button>
         </Link>
         <Link to="/about/about-author">
          <Button isOutlineSecondary >
              About Author
          </Button>
         </Link>
        </div>
      </section>
    </>
  )
}

export default AboutApp
