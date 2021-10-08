import PropTypes from 'prop-types'
import '../App.css';


const TextInput = ({text, onChange}) => {
  
  return (
    <div >
        <p>{text}</p>
        <input  min='1' 
                onChange={(e) => onChange(e.target.value)}
                type="number" defaultValue={1} />
      </div>
  )
}

TextInput.defaultProps = {
  text: 'Enter text here',
}

TextInput.propTypes = {
  text: PropTypes.string.isRequired
}




// class TextInput extends React.Component {
//   render() {
//     return (
//       <div className="amount">
//         <p>Enter Amount</p>
//         <input type="text" defaultValue={1} />
//       </div>
//     );
//   }
// }

export default TextInput;
