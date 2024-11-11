import PropTypes from "prop-types";


function Navigation({ setCurrentSection }) {
    return (
      <div className="content-wrapper">
      <nav>
        <ul>
          <li><button onClick={() => setCurrentSection("About Me")}>About Me</button></li>
          <li><button onClick={() => setCurrentSection("Portfolio")}>Portfolio</button></li>
          <li><button onClick={() => setCurrentSection("Contact")}>Contact</button></li>
          <li><button onClick={() => setCurrentSection("Resume")}>Resume</button></li>
        </ul>
      </nav>
      </div>
    );
  }

  Navigation.propTypes ={
    setCurrentSection: PropTypes.func.isRequired,
  };
  
  export default Navigation;
  
