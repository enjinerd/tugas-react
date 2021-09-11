import styles from 'components/styles/PopUp.module.css'
import Button from 'components/Button'

const PopUp = props => {
    const { setPopUp, email } = props 

    return (
        <div className={styles.PopUp}>
            <div className={styles.content_container}>
              <p>Data pendaftaranmu sudah kami terima.</p>
              <p>Mohon cek email anda : <span className={styles.email}>{email}</span> untuk melakukan konfirmasi pendaftaran.</p>
              <div>
              <Button className={styles.btn} isPrimary onClick={()=> setPopUp(false)}>Kembali</Button>
            </div>
      </div>
        </div>
    );
}

export default PopUp;
