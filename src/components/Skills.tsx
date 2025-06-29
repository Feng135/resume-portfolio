import React from 'react';

interface Skill {
  name: string;
  icon: string;
  description: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    {
      name: "Networking & Infrastructure",
      icon: "🌐",
      description: "Cisco Packet Tracer, TCP/IP, Network Design, Systems Administration"
    },
    {
      name: "Programming Languages", 
      icon: "💻",
      description: "Python, C, Linux Shell Scripting, SQL"
    },
    {
      name: "Operating Systems",
      icon: "🖥️", 
      description: "Linux, Windows Server, Command Line, System Configuration"
    },
    {
      name: "Development & DevOps",
      icon: "🛠️",
      description: "Git, Microservices, Distributed Systems, CI/CD"
    },
    {
      name: "Cloud & Security",
      icon: "🔒",
      description: "Cloud Infrastructure, Cybersecurity, Network Security, IoT"
    },
    {
      name: "Simulation & Tools",
      icon: "⚙️",
      description: "NetSim, Network Simulation, System Design, Testing"
    }
  ];

  return (
    <section id="skills">
      <div className="container">
        <h2>Skills & Expertise</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item card">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;