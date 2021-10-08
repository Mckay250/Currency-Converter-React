import PropTypes from 'prop-types'
import '../App.css';


const Button = ({color, text, onClick}) => {
    
  const buttonStyles = {
      backgroundColor: color
  }


  return (
      <button style={buttonStyles}
              className='btn'
              onClick={onClick}>
                  {text}
      </button>
  )
}

Button.defaultProps = {
  color : 'steelblue',
  text : 'Submit'
}

Button.prototypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func
}

export default Button;
