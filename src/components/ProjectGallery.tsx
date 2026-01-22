// import React from 'react';

const ProjectGallery = () => {
  // You can duplicate these lines to add more photos
  const projects = [
    { id: 1, title: "10kW Residential", location: "Shaheed Path Lucknow", img: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&w=800" },
    { id: 2, title: "Farm Installation", location: "Sharda Nagar Lucknow", img: "/solar.jpeg" },
    { id: 3, title: "Commercial Plant", location: "Krishna Nagar Lucknow", img: "/bill.jpeg" },
    { id: 4, title: "Housing Society", location: "Telibagh Lucknow", img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800" },
  ];

  return (
    <section id="projects" style={{ background: '#fff' }}>
      <div className="container">
        <h2>Our <span className="highlight">Recent Projects</span></h2>
        <p style={{ textAlign: 'center', marginBottom: '40px', color: '#64748b' }}>
          See how we are transforming rooftops across the city.
        </p>

        <div className="grid grid-3">
          {projects.map((project) => (
            <div key={project.id} className="card" style={{ padding: 0, overflow: 'hidden', textAlign: 'left' }}>
              <div style={{ height: '200px', overflow: 'hidden' }}>
                <img 
                  src={project.img} 
                  alt={project.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                  className="project-img"
                />
              </div>
              <div style={{ padding: '20px' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>{project.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#64748b' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '14px', verticalAlign: 'middle' }}>location_on</span> 
                  {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;