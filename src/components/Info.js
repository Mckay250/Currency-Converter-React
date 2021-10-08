import PropTypes from 'prop-types'
import '../App.css';


const Info = ({text, textColor}) => {

  const infoStyles = {
    color : textColor
  }
  
  return (
    <div style={infoStyles} className="exchange-rate">{text}</div>
  )
}

Info.defaultProps = {
  text: '',
  textColor: 'red'
}

Info.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string
}



export default Info;
