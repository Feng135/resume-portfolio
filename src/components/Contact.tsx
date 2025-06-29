import React from 'react';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: "📧",
      label: "Email",
      value: "fengwei.student@example.com",
      link: "mailto:fengwei.student@example.com",
      description: "Best way to reach me for opportunities"
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/feng-wei-it",
      link: "https://linkedin.com/in/feng-wei-it",
      description: "Connect with me professionally"
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "github.com/fengwei",
      link: "https://github.com/fengwei",
      description: "View my code and projects"
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+61 XXX XXX XXX",
      link: "tel:+61XXXXXXXXX",
      description: "Available for calls and interviews"
    }
  ];

  return (
    <section id="contact" style={{
      padding: '4rem 0',
      background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
      color: 'white'
    }}>
      <div className="container">
        <h2 style={{
          textAlign: 'center',
          marginBottom: '2rem',
          fontSize: '2.5rem',
          color: 'white'
        }}>
          📞 Get In Touch
        </h2>
        
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <p style={{
            fontSize: '1.1rem',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
            color: '#ecf0f1'
          }}>
            I'm actively seeking opportunities in networking, systems support, or infrastructure roles. 
            Whether you have a position available, want to discuss my projects, or just connect within 
            the IT industry, I'd love to hear from you!
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {contactMethods.slice(0, 3).map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target={contact.label !== "Phone" && contact.label !== "Email" ? "_blank" : undefined}
              rel={contact.label !== "Phone" && contact.label !== "Email" ? "noopener noreferrer" : undefined}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '15px',
                padding: '2rem',
                textDecoration: 'none',
                color: 'white',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease',
                display: 'block'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1rem'
                }}>
                  {contact.icon}
                </div>
                
                <h3 style={{
                  margin: '0 0 0.5rem 0',
                  fontSize: '1.25rem',
                  fontWeight: '600'
                }}>
                  {contact.label}
                </h3>
                
                <p style={{
                  margin: '0 0 1rem 0',
                  fontSize: '1rem',
                  fontWeight: '500',
                  color: '#3498db'
                }}>
                  {contact.value}
                </p>
                
                <p style={{
                  margin: '0',
                  fontSize: '0.9rem',
                  color: '#bdc3c7',
                  lineHeight: '1.4'
                }}>
                  {contact.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Second row with centered phone card */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '2rem',
          maxWidth: '1000px',
          margin: '2rem auto 0'
        }}>
          {contactMethods.slice(3).map((contact, index) => (
            <a
              key={index + 3}
              href={contact.link}
              target={contact.label !== "Phone" && contact.label !== "Email" ? "_blank" : undefined}
              rel={contact.label !== "Phone" && contact.label !== "Email" ? "noopener noreferrer" : undefined}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '15px',
                padding: '2rem',
                textDecoration: 'none',
                color: 'white',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease',
                display: 'block',
                width: '280px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1rem'
                }}>
                  {contact.icon}
                </div>
                
                <h3 style={{
                  margin: '0 0 0.5rem 0',
                  fontSize: '1.25rem',
                  fontWeight: '600'
                }}>
                  {contact.label}
                </h3>
                
                <p style={{
                  margin: '0 0 1rem 0',
                  fontSize: '1rem',
                  fontWeight: '500',
                  color: '#3498db'
                }}>
                  {contact.value}
                </p>
                
                <p style={{
                  margin: '0',
                  fontSize: '0.9rem',
                  color: '#bdc3c7',
                  lineHeight: '1.4'
                }}>
                  {contact.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div style={{
          textAlign: 'center',
          marginTop: '3rem',
          padding: '2rem',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '15px',
          maxWidth: '600px',
          margin: '3rem auto 0'
        }}>
          <h3 style={{
            margin: '0 0 1rem 0',
            fontSize: '1.5rem',
            color: '#3498db'
          }}>
            🎓 Current Status
          </h3>
          <p style={{
            margin: '0',
            fontSize: '1rem',
            lineHeight: '1.6',
            color: '#ecf0f1'
          }}>
            Final-year IT (Networking) student at Macquarie University<br/>
            <strong>Available for:</strong> Internships, Graduate Programs, Part-time & Full-time Positions<br/>
            <strong>Graduation:</strong> December 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
