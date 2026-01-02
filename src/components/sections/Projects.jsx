import React, { useState } from 'react';
import '../../styles/Projects.css';
import projectImage from '../../assets/P1.webp';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      image: projectImage,
      title: 'Modern Villa',
      category: 'Residential',
      location: 'Bangalore',
      area: '3200 sq.ft'
    },
    {
      id: 2,
      image: projectImage,
      title: 'Luxury Apartment',
      category: 'Residential',
      location: 'Hyderabad',
      area: '2800 sq.ft'
    },
    {
      id: 3,
      image: projectImage,
      title: 'Contemporary Home',
      category: 'Residential',
      location: 'Chennai',
      area: '3500 sq.ft'
    },
    {
      id: 4,
      image: projectImage,
      title: 'Office Complex',
      category: 'Commercial',
      location: 'Pune',
      area: '15000 sq.ft'
    },
    {
      id: 5,
      image: projectImage,
      title: 'Shopping Mall',
      category: 'Commercial',
      location: 'Mumbai',
      area: '25000 sq.ft'
    },
    {
      id: 6,
      image: projectImage,
      title: 'Elegant Residence',
      category: 'Residential',
      location: 'Delhi',
      area: '4000 sq.ft'
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">Our Projects</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            Showcasing our completed construction projects with excellence
          </p>
        </div>

        <div className="filter-buttons">
          <button 
            className={filter === 'All' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('All')}
          >
            All Projects
          </button>
          <button 
            className={filter === 'Residential' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('Residential')}
          >
            Residential
          </button>
          <button 
            className={filter === 'Commercial' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('Commercial')}
          >
            Commercial
          </button>
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-info">
                    <span className="project-category">{project.category}</span>
                    <h3>{project.title}</h3>
                    <p><i className="fas fa-map-marker-alt"></i> {project.location}</p>
                    <p><i className="fas fa-ruler-combined"></i> {project.area}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
