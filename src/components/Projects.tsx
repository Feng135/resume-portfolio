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
      title: "Microservices Bike Rental System",
      description: "Designed and implemented a distributed bike rental system using microservices architecture, demonstrating scalable system design and inter-service communication.",
      technologies: ["Python", "Microservices", "Distributed Systems", "API Design"],
      image: "Bike Rental System",
      githubUrl: "https://github.com/fengwei/bike-rental-system"
    },
    {
      title: "Linux Kernel Module - Sequence Generator",
      description: "Developed a custom Linux kernel module for sequence generation, showcasing low-level system programming and kernel development skills.",
      technologies: ["C", "Linux Kernel", "System Programming", "Module Development"],
      image: "Kernel Module",
      githubUrl: "https://github.com/fengwei/linux-kernel-module"
    },
    {
      title: "IoT Smart Office Network Simulation",
      description: "Created a comprehensive IoT-based smart office network simulation using NetSim, modeling real-world network scenarios and performance analysis.",
      technologies: ["NetSim", "IoT", "Network Simulation", "Performance Analysis"],
      image: "Smart Office Network",
      githubUrl: "https://github.com/fengwei/smart-office-simulation"
    },
    {
      title: "Network Security Lab Projects",
      description: "Completed various network security implementations including firewall configurations, intrusion detection systems, and vulnerability assessments.",
      technologies: ["Cisco Packet Tracer", "Network Security", "Firewall", "IDS"],
      image: "Security Projects",
      githubUrl: "https://github.com/fengwei/network-security-labs"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                {project.image}
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
                  {project.githubUrl && (
                    <a href={project.githubUrl} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                      View Code
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
