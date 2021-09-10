import {Link} from 'react-router-dom'
import Header from 'components/Header'
import styles from 'pages/styles/About.module.css'
import Button from 'components/Button'

function About({children}) {
  document.title = 'About'
  return (
    <>
      <Header />
      <section className={`content ${styles.about}`}>
        <h1>Our ToDo is the best app in the world.</h1>
        <div className={styles.btn_about}>
         <Link to="/about/about-author"> 
            <Button isOutlineSecondary >
              About Author
            </Button>
         </Link>
         <Link to="/about/about-app">
          <Button isOutlineSecondary >
              About App
          </Button>
         </Link>
        </div>
      </section>
    </>
  )
}

export default About
