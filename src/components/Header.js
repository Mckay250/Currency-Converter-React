import PropTypes from 'prop-types'


const Header = ({text}) => {

  
  return (
      <header className='header'>
        {text}
      </header>
  )
}

Header.defaultProps = {
  text: 'Welcome',
}

Header.propTypes = {
  text: PropTypes.string.isRequired
}


// class Header extends React.Component {
//   render() {
//     return <header>Currency Converter</header>;
//   }
// }

export default Header;
