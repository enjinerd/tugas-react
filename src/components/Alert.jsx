import './styles/Alert.css'

function Alert(props) {
  return (
    <div className="container">
      <div className="confirmation-text">
        Do you really want to delete this task?
      </div>
      <div className="button-container">
        <button 
          className="cancel-button" 
          onClick={() => handleConfirmationBox()}>
            Cancel
        </button>
        <button 
          className="confirmation-button"
          onClick={handleDeleteTask}>
            Delete
          </button>
      </div>
    </div>
  <div 
    className="confirm-bg">
    onClick={() => handleConfirmationBox()}
  </div> 
  )
}
