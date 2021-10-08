import DropDown from "./DropDown";
import Switch from "./Switch";
import PropTypes from 'prop-types'
import '../App.css';


const Drop = ({selectedInputImage, selectedOutputImage, inputCurrencies, outputCurrencies, inputChange, outputChange}) => {

  const onInputChange = (e) => {
    inputChange(e);
  } 
  
  const onOutputChange = (e) => {
    outputChange(e);
  } 

  
  return (
    <div className="drop-list">
        <DropDown text='From' 
                  options={inputCurrencies}
                  img={selectedInputImage}
                  onChange={onInputChange}/>
        <Switch />
        <DropDown text='To' 
                  options={outputCurrencies}
                  img={selectedOutputImage}
                  onChange={onOutputChange}/>
      </div>
  )
}

Drop.defaultProps = {
  items : []
}

Drop.propTypes = {
  items: PropTypes.array
}


export default Drop;
