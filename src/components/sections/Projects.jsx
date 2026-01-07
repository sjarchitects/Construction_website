import React, { useState } from 'react';
import '../../styles/Projects.css';
import projectImage from '../../assets/P1.webp';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(6);

  const projects = [
    {
      id: 1,
      image: projectImage,
      title: 'Modern Villa Design',
      category: 'Plan and Elevation',
      location: 'Bangalore',
      area: '3200 sq.ft'
    },
    {
      id: 2,
      image: projectImage,
      title: 'Luxury Home Plan',
      category: 'Plan and Elevation',
      location: 'Hyderabad',
      area: '2800 sq.ft'
    },
    {
      id: 3,
      image: projectImage,
      title: 'Contemporary Living Room',
      category: 'Interior',
      location: 'Chennai',
      area: '3500 sq.ft'
    },
    {
      id: 4,
      image: projectImage,
      title: 'Office Interior Design',
      category: 'Interior',
      location: 'Pune',
      area: '15000 sq.ft'
    },
    {
      id: 5,
      image: projectImage,
      title: 'Residential Construction',
      category: 'Working Projects',
      location: 'Mumbai',
      area: '25000 sq.ft'
    },
    {
      id: 6,
      image: projectImage,
      title: 'Commercial Building',
      category: 'Working Projects',
      location: 'Delhi',
      area: '4000 sq.ft'
    },
    {
      id: 7,
      image: projectImage,
      title: 'Duplex House Plan',
      category: 'Plan and Elevation',
      location: 'Kolkata',
      area: '3800 sq.ft'
    },
    {
      id: 8,
      image: projectImage,
      title: 'Modern Kitchen Interior',
      category: 'Interior',
      location: 'Pune',
      area: '800 sq.ft'
    },
    {
      id: 9,
      image: projectImage,
      title: 'Ongoing Villa Project',
      category: 'Working Projects',
      location: 'Goa',
      area: '5000 sq.ft'
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, itemsToShow);

  const handleLoadMore = () => {
    setShowAll(!showAll);
  };

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
            All
          </button>
          <button 
            className={filter === 'Plan and Elevation' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('Plan and Elevation')}
          >
            Plan and Elevation
          </button>
          <button 
            className={filter === 'Interior' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('Interior')}
          >
            Interior
          </button>
          <button 
            className={filter === 'Working Projects' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('Working Projects')}
          >
            Working Projects
          </button>
        </div>
        
        <div className="projects-grid">
          {displayedProjects.map((project) => (
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

        {filteredProjects.length > itemsToShow && (
          <div className="load-more-container">
            <button className="load-more-btn" onClick={handleLoadMore}>
              {showAll ? (
                <>
                  <i className="fas fa-chevron-up"></i> Show Less
                </>
              ) : (
                <>
                  <i className="fas fa-chevron-down"></i> Load More
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
