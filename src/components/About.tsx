import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <div 
              className="profile-pic"
              style={{
                backgroundColor: '#007bff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '3rem',
                fontWeight: 'bold'
              }}
            >
              FW
            </div>
          </div>
          <div className="about-text">
            <h3>Hello! I'm Feng Wei</h3>
            <p>
              I'm a final-year Bachelor of Information Technology (Networking) student at Macquarie University, 
              graduating in December 2025. I have a strong foundation in computer networking, systems administration, 
              and software development, with practical experience using tools such as Cisco Packet Tracer, Linux, 
              Python, and C.
            </p>
            <p>
              My interests lie in building secure, efficient network systems and exploring areas like DevOps, 
              cloud infrastructure, and cybersecurity. I've worked on several academic and personal projects, 
              including a microservices-based bike rental system, a Linux kernel module for sequence generation, 
              and an IoT-based smart office network simulation using NetSim.
            </p>
            <p>
              Alongside my studies, I have part-time work experience in customer-facing retail environments, 
              where I've developed strong communication, problem-solving, and teamwork skills. I am currently 
              seeking opportunities to apply my technical knowledge in real-world IT environments, particularly 
              in roles related to networking, systems support, or infrastructure.
            </p>
            <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
              <h4 style={{ marginBottom: '1rem', color: '#007bff' }}>🎓 Education</h4>
              <p style={{ margin: '0.5rem 0', fontWeight: '600' }}>
                Bachelor of Information Technology (Networking)
              </p>
              <p style={{ margin: '0.5rem 0', color: '#666' }}>
                Macquarie University • Expected December 2025
              </p>
            </div>
            <a href="/Resume.pdf" className="btn" target="_blank" rel="noopener noreferrer">
              📄 See Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
