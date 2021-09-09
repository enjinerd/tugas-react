import styles from './styles/Button.module.css'

function Button({isPrimary, isOutline, isSecondary, isOutlineSecondary, children, onClick, className, id}) {
  const handleClass = (primary, outline, secondary, outline_secondary) => {
   if(primary) {
    return `${styles.primary} ${className} ${styles.button}`
   } else if(secondary) {
    return `${styles.secondary} ${className} ${styles.button}`
   }
   if(outline) {
    return `${styles.outline_primary} ${className} ${styles.button}`
   } else if(outline_secondary) {
    return `${styles.outline_secondary} ${className} ${styles.button}`
   }
  }
  return(
    <button id={id} className={handleClass(isPrimary, isOutline, isSecondary, isOutlineSecondary)} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
