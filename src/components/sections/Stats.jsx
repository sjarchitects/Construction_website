import React, { useEffect, useState, useRef } from 'react';
import '../../styles/Stats.css';

const Stats = () => {
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    employees: 0,
    experience: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  const finalCounts = {
    projects: 250,
    clients: 500,
    employees: 50,
    experience: 15
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset counts to 0 when scrolling into view
            setCounts({
              projects: 0,
              clients: 0,
              employees: 0,
              experience: 0
            });
            startCounting();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const startCounting = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCounts(prev => {
        const newCounts = {};
        let allComplete = true;

        Object.keys(finalCounts).forEach(key => {
          if (prev[key] < finalCounts[key]) {
            allComplete = false;
            newCounts[key] = Math.min(
              prev[key] + Math.ceil(finalCounts[key] / steps),
              finalCounts[key]
            );
          } else {
            newCounts[key] = finalCounts[key];
          }
        });

        if (allComplete) {
          clearInterval(timer);
        }

        return newCounts;
      });
    }, interval);
  };

  return (
    <section ref={statsRef} className="stats">
      <div className="stats-container">
        <div className="stat-item">
          <div className="stat-number">{counts.projects}+</div>
          <div className="stat-label">Projects Completed</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{counts.clients}+</div>
          <div className="stat-label">Clients Served</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{counts.employees}+</div>
          <div className="stat-label">Team Members</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{counts.experience}+</div>
          <div className="stat-label">Years of Experience</div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
