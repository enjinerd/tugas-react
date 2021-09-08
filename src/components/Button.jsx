import './styles/Button.css'

function Button({isSecondary, children, onClick}) {
  return(
    <button className="primary" onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
