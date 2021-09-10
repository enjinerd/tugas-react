import {Link} from 'react-router-dom'
import Header from 'components/Header'
import styles from 'pages/styles/About.module.css'
import Button from 'components/Button'

function AboutAuthor() {
  return(
    <>
    <Header/>
      <section className={`content ${styles.about}`}>
        <h1>Saya Roni, saya pembuat aplikasi ini.</h1>
        <div className={styles.btn_about}>
         <Link to="/about"> 
            <Button isOutlineSecondary >
              About
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

export default AboutAuthor
