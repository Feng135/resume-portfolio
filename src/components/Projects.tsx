import React from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Home Server Infrastructure",
      description: "Built and configured a personal home server for media streaming, file storage, and network services. Implemented security measures and automated backup solutions.",
      technologies: ["Linux", "Docker", "Networking", "System Administration"],
      image: "/images/home-server.png",
      githubUrl: "https://github.com/fengwei/home-server-config"
    },
    {
      title: "Microservices Bike Rental System",
      description: "Designed and implemented a distributed bike rental system using microservices architecture, demonstrating scalable system design and inter-service communication.",
      technologies: ["Python", "Microservices", "Distributed Systems", "API Design"],
      image: "/images/bike-rental.png",
      githubUrl: "https://github.com/fengwei/bike-rental-system"
    },
    {
      title: "Linux Kernel Module - Sequence Generator",
      description: "Developed a custom Linux kernel module for sequence generation, showcasing low-level system programming and kernel development skills.",
      technologies: ["C", "Linux Kernel", "System Programming", "Module Development"],
      image: "/images/kernel-module.png",
      githubUrl: "https://github.com/fengwei/linux-kernel-module"
    },
    {
      title: "IoT Smart Office Network Simulation",
      description: "Created a comprehensive IoT-based smart office network simulation using NetSim, modeling real-world network scenarios and performance analysis.",
      technologies: ["NetSim", "IoT", "Network Simulation", "Performance Analysis"],
      image: "/images/smart-office.png",
      githubUrl: "https://github.com/fengwei/smart-office-simulation"
    },
    {
      title: "simpleGames",
      description: "A collection of games written in many different languages including Pong, Snake, and Tic-Tac-Toe. These are extremely low latency, minimalist black and white games perfect for quick entertainment.",
      technologies: ["Multi-Language", "Game Development", "Collaborative Project", "Open Source"],
      image: "/images/simple-games.png",
      githubUrl: "https://github.com/bertinator2006/simpleGames"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        
        {/* First row - 3 projects */}
        <div className="project-grid">
          {projects.slice(0, 3).map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    backgroundColor: '#f0f0f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    color: '#666'
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'flex';
                    target.style.alignItems = 'center';
                    target.style.justifyContent = 'center';
                    target.style.backgroundColor = '#f8f9fa';
                    target.style.border = '2px dashed #dee2e6';
                    target.alt = project.title;
                    target.src = `data:image/svg+xml;base64,${btoa(`
                      <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                        <rect width="200" height="200" fill="#f8f9fa"/>
                        <text x="100" y="100" text-anchor="middle" dy="0.3em" fill="#6c757d" font-family="Arial" font-size="14">${project.title}</text>
                      </svg>
                    `)}`;
                  }}
                />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.liveUrl && (
                    <a href={project.liveUrl} className="btn" target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second row - centered 2 projects */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          marginTop: '2rem'
        }}>
          {projects.slice(3).map((project, index) => (
            <div key={index + 3} className="project-card" style={{ maxWidth: '350px' }}>
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    backgroundColor: '#f0f0f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    color: '#666'
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'flex';
                    target.style.alignItems = 'center';
                    target.style.justifyContent = 'center';
                    target.style.backgroundColor = '#f8f9fa';
                    target.style.border = '2px dashed #dee2e6';
                    target.alt = project.title;
                    target.src = `data:image/svg+xml;base64,${btoa(`
                      <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                        <rect width="200" height="200" fill="#f8f9fa"/>
                        <text x="100" y="100" text-anchor="middle" dy="0.3em" fill="#6c757d" font-family="Arial" font-size="14">${project.title}</text>
                      </svg>
                    `)}`;
                  }}
                />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.liveUrl && (
                    <a href={project.liveUrl} className="btn" target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  )}
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
