import { useState } from 'react';
import Header from './components/Header/Header';
import Project from './components/Project/Project';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume'; 
import Footer from './components/Footer/Footer';
import './App.css';

// Sample project data array
const projects = [
  {
    title: "Project One",
    image: "/path-to-project-image1.png", // Adjust the path accordingly
    deployedLink: "https://deployed-project1.com",
    githubLink: "https://github.com/username/project1",
  },
  {
    title: "Project Two",
    image: "/path-to-project-image2.png",
    deployedLink: "https://deployed-project2.com",
    githubLink: "https://github.com/username/project2",
  },
  // Add more projects as needed
];

function App() {
  const [currentSection, setCurrentSection] = useState("About Me");

  return (
    <div className="content-wrapper">
      <Header setCurrentSection={setCurrentSection} />
      
      {/* Render different sections based on the currentSection */}
      {currentSection === "About Me" && <AboutMe />}
      
      {currentSection === "Portfolio" && (
        <section className="portfolio">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              image={project.image}
              deployedLink={project.deployedLink}
              githubLink={project.githubLink}
            />
          ))}
        </section>
      )}
      
      {currentSection === "Contact" && <Contact />}
      {currentSection === "Resume" && <Resume />}
      
      <footer>
        
      </footer>
    </div>
  );
}

export default App;



