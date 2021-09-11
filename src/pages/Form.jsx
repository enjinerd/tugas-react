import { useState } from 'react'
import styles from 'pages/styles/Form.module.css'
import Button from 'components/Button'
import {isEmail, isInt, isAlpha} from 'validator'
import PopUp from 'components/PopUp'

function Form() {
  let [isHidden, setHidden] = useState(true)
  const [popUp, setPopUp] = useState(false)
  const duringPopUp = popUp ? " during-popup" : ""
  let [formData, setFormData] = useState({
    full_name: '',
    email: '',
    num_phone: '',
    education: '',
    coding_class: '',
    comm_letter: '',
    wish_text: '',
  })
  
  let [error, setError] = useState({
    full_name: '',
    email: '',
    num_phone: '',
    education: '',
    coding_class: '',
    comm_letter: '',
  })

  const handleData = (e) => {
    const newData = e.target.value
    setFormData({
      ...formData,
      [e.target.name] : newData
    })
    const isNoError = Object.keys(error).filter((d) => error[d] !== '').length === 0
    if(isNoError) {
       setHidden(true)
    }
    setError({
      ...error,
      [e.target.name] : ''
    })

  }

  const handleReset = (e) => {
    e.preventDefault()
    setFormData({
      full_name: '',
      email: '',
      num_phone: '',
      education: '',
      coding_class: '',
      comm_letter: '',
      wish_text: '',
    })
  }

  const validate = () => {
    const newError = {...error}
    
    if(!formData.email) {
      newError.email = "Email wajib diisi!"
    } else if(!isEmail(formData.email)) {
      newError.email = "Email tidak valid!"
    }

    if(!formData.full_name) {
      newError.full_name = "Nama Lengkap wajib diisi!"
    } else if(!isAlpha(formData.full_name.replace(/\s/g, ""))) {
      newError.full_name = "Nama lengkap harus diisi huruf!"
    }

    if(!formData.num_phone) {
      newError.num_phone = "No. Handphone wajib diisi!"
    } else if(!isInt(formData.num_phone)) {
      newError.num_phone = "No. Handphone harus angka!"
    } else if(formData.num_phone.length > 14 || formData.num_phone.length < 9) {
      newError.num_phone = "No. Handphone harus lebih dari 9 karakter dan kurang dari 14 karakter!"
    }
      
    if(!formData.education) {
      newError.education = "Lata Belakang Pendidikan wajib dipilih!"
    }
    if (!formData.coding_class) {
      newError.coding_class = "Kelas Koding wajib dipilih!"
    }
    if(!formData.comm_letter) {
      newError.comm_letter = "Surat Kesungguhan wajib diupload!"
    }

    return newError
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const findErrors = validate()
    if(Object.keys(findErrors).some(error => error !== '')) {
      setError(findErrors)
      setHidden(false)  
    }
    
   const isNoError = Object.keys(findErrors).filter((d) => findErrors[d] !== '').length === 0
    if(isNoError) { 
      setPopUp(true)
      setHidden(true)
    }
  }

  return (
    <section className={`${styles.form_container} ${duringPopUp}`}>
       <h1>Pendaftaran Peserta Coding Bootcamp</h1>
       <form className={styles.form_section}>
          <label htmlFor="full_name">Nama Lengkap <span>*</span></label>
          <input field="Nama Lengkap" id="full_name" name="full_name" type="text" onChange={handleData} value={formData.full_name} />
          <label htmlFor="email">Email <span>*</span></label>
          <input field="Email" id="email" name="email" type="email" onChange={handleData} value={formData.email} />
          <label field="No. Handphone" htmlFor="num_phone">No. Handphone <span>*</span></label>
          <input id="num_phone" name="num_phone" onChange={handleData} type="text" value={formData.num_phone} />
          <label htmlFor="education"> Latar Belakang Pendidikan <span>*</span></label>
          <aside id="education" className={styles.input_radio}>
            <input type="radio" id="edu_IT" name="education" value="edu_IT" onChange={handleData} />
            <label htmlFor="edu_IT">IT</label>
            <input type="radio" id="edu_NonIT" name="education" value="edu_NonIT" onClick={handleData} />
            <label htmlFor="edu_NonIT">Non IT</label>
          </aside>
          <label htmlfor="coding_class">Kelas Coding yang Dipilih <span>*</span></label>
<select field="Kelas Coding" name="coding_class" id="coding_class" onClick={handleData} >
            <option value="" disabled selected>Pilih Salah Satu Program</option>
            <option value="backend">Coding Backend with Golang</option>
            <option value="frontend">Coding Frontend with ReactJS</option>
            <option value="fullstack">Fullstack Developer</option>
          </select>
          <label htmlfor="comm_letter">Foto Surat Kesungguhan <span>*</span></label>
          <input field="Surat Kesungguhan" type="file" name="comm_letter" accept="image/*" onChange={handleData} value={formData.comm_letter} />
          <label htmlFor="wish_text">Harapan Untuk Coding Bootcamp Ini</label>
          <textarea id="wish_text" name="wish_text" onChange={handleData} value={formData.wish_text} />
          <ol className={isHidden ? `hidden` : styles.error_card}>
            {Object.keys(error).filter((keyname) => error[keyname] !== '').map((keyname, i) => (
              <li key={i}>{error[keyname]} </li>
            ))} 
          </ol>
          <div className={styles.button_section}>
            <Button isPrimary onClick={handleSubmit}>Submit</Button>
            <Button isSecondary onClick={handleReset}>Reset</Button>
          </div>
        </form>
    {popUp && <PopUp setPopUp={setPopUp} email={formData.email}/>}
    </section>
  )
}

export default Form
