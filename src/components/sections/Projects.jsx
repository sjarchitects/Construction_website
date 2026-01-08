import React, { useState, useEffect } from 'react';
import { ref, get, onValue } from 'firebase/database';
import { database } from '../../firebase/config';
import '../../styles/Projects.css';

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const [itemsToShow] = useState(6);

  const [sectionHeader, setSectionHeader] = useState({
    title: 'Our Projects',
    description: 'Showcasing our completed construction projects with excellence'
  });

  const [categories, setCategories] = useState([
    { id: 'cat1', name: 'All' }
  ]);

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
    
    // Set up real-time listener for live updates
    const projectsRef = ref(database, 'projectsContent/content');
    const unsubscribe = onValue(projectsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log('🔄 Projects content real-time update:', data);
        
        if (data.sectionHeader) setSectionHeader(data.sectionHeader);
        if (data.categories) setCategories(data.categories);
        if (data.projects) setProjects(data.projects);
      }
    }, (error) => {
      console.error('❌ Projects content real-time listener error:', error);
    });

    return () => unsubscribe();
  }, []);

  const fetchProjects = async () => {
    try {
      console.log('🔍 Loading Projects content from Firebase...');
      const projectsRef = ref(database, 'projectsContent/content');
      const snapshot = await get(projectsRef);
      
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log('✅ Projects content loaded:', data);
        
        if (data.sectionHeader) setSectionHeader(data.sectionHeader);
        if (data.categories) setCategories(data.categories);
        if (data.projects) setProjects(data.projects);
      } else {
        console.warn('⚠️ No projects content found in Firebase');
      }
    } catch (error) {
      console.error('❌ Error fetching projects content:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, itemsToShow);

  const handleLoadMore = () => {
    setShowAll(!showAll);
  };

  if (loading) {
    return (
      <section id="projects" className="projects">
        <div className="projects-container">
          <div className="section-header">
            <h2 className="section-title">Loading...</h2>
          </div>
        </div>
      </section>
    );
  }

  if (!projects || projects.length === 0) {
    return (
      <section id="projects" className="projects">
        <div className="projects-container">
          <div className="section-header">
            <h2 className="section-title">{sectionHeader.title}</h2>
            <div className="title-underline"></div>
            <p className="section-description">No projects available at the moment.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">{sectionHeader.title}</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            {sectionHeader.description}
          </p>
        </div>

        <div className="filter-buttons">
          {categories.map((cat) => (
            <button 
              key={cat.id}
              className={filter === cat.name ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilter(cat.name)}
            >
              {cat.name}
            </button>
          ))}
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
