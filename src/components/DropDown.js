import PropTypes from 'prop-types'
import '../App.css';


const DropDown = ({text, options, img, onChange}) => {
  
  return (
    <div >
    <p>{text}</p>
    <div className="select-box">
      <img src={img} alt="flag" />
      <select onChange={(e) => onChange(e.target.value)}>
        {options.length > 0 ? options.map((currency) => (
          <option key={currency.id} value={currency.id}>{currency.currencySymbol} </option>
        )) : null
      }
      </select>
    </div>
  </div>

  )
}

DropDown.defaultProps = {
  text: '',
  img: "https://www.countryflags.io/np/flat/48.png"
}

DropDown.propTypes = {
  text: PropTypes.string,
  items: PropTypes.array
}


export default DropDown;
