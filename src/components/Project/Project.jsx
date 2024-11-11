import PropTypes from 'prop-types';

function Project({ title, image, deployedLink, githubLink }) {
    return (
        <div className="project">
            <img src={image} alt={`${title} screenshot`} style={{ width: '100%', borderRadius: '8px' }} />
            <h3>{title}</h3>
            <div className="project-links">
                <a href={deployedLink} target="_blank" rel="noopener noreferrer">View Application</a>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
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
