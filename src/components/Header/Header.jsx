import Navigation from '../Navigation/Navigation';
import PropTypes from "prop-types";

function Header({ setCurrentSection }) {
  return (
    <header>
      <h1>Chandler's  Portfolio</h1>
      <Navigation setCurrentSection={setCurrentSection} />
    </header>
  );
}

Header.propTypes = {
    setCurrentSection: PropTypes.func.isRequired,
};

export default Header;
