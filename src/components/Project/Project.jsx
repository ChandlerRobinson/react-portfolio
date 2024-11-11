import PropTypes from 'prop-types';

function Project({ title, image, githubLink }) {
    return (
        <div className='content-wrapper'>
        <div className="project">
            <img src={image} alt={`${title}`} style={{ width: '100%', borderRadius: '8px' }} />
          
            <div className="project-links">
                
                <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </div>
        </div>
    );
}

//Define prop types
Project.propTypes ={
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    deployedLink: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
};

export default Project;
