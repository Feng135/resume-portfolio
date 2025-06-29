import React from 'react';

interface WorkExperienceItem {
  position: string;
  company: string;
  period: string;
  type: string;
  icon: string;
  description: string;
  keyPoints: string[];
}

const WorkExperience: React.FC = () => {
  const experiences: WorkExperienceItem[] = [
    {
      position: "Store Member",
      company: "Miracle Supermarket",
      period: "May 2025 – Present",
      type: "Part-Time",
      icon: "🏪",
      description: "Delivering excellent customer service in a fast-paced retail environment with recognition for professional attitude and training leadership.",
      keyPoints: [
        "Customer service & POS system operations",
        "Team collaboration & staff training",
        "Stock management & display standards"
      ]
    },
    {
      position: "IT & Business Support Assistant",
      company: "Family Handyman Business",
      period: "Jan 2022 – Present",
      type: "Self-Employed",
      icon: "💼",
      description: "Applied IT skills to modernize business operations, improve workflows, and increase client bookings through digital solutions and professional branding.",
      keyPoints: [
        "Business card design & digital branding",
        "Client communication & project management",
        "IT troubleshooting & process automation"
      ]
    }
  ];

  return (
    <section id="experience" className="experience" style={{
      padding: '4rem 0',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
    }}>
      <div className="container">
        <h2 style={{
          textAlign: 'center',
          marginBottom: '3rem',
          fontSize: '2.5rem',
          color: '#2c3e50'
        }}>
          💼 Professional Experience
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {experiences.map((exp, index) => (
            <div key={index} style={{
              background: 'white',
              borderRadius: '15px',
              padding: '2rem',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              border: '1px solid #e3e6ea'
            }} 
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
            }}>
              
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #007bff, #0056b3)',
                  borderRadius: '12px',
                  padding: '1rem',
                  minWidth: '60px',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem'
                }}>
                  {exp.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    margin: '0 0 0.5rem 0',
                    color: '#2c3e50',
                    fontSize: '1.25rem',
                    fontWeight: '600'
                  }}>
                    {exp.position}
                  </h3>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '0.25rem'
                  }}>
                    <span style={{
                      color: '#495057',
                      fontWeight: '500'
                    }}>
                      {exp.company}
                    </span>
                    <span style={{
                      background: '#e3f2fd',
                      color: '#1976d2',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.75rem',
                      fontWeight: '500'
                    }}>
                      {exp.type}
                    </span>
                  </div>
                  <span style={{
                    color: '#6c757d',
                    fontSize: '0.9rem'
                  }}>
                    {exp.period}
                  </span>
                </div>
              </div>
              
              <p style={{
                color: '#495057',
                lineHeight: '1.6',
                marginBottom: '1.5rem',
                fontSize: '0.95rem'
              }}>
                {exp.description}
              </p>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}>
                {exp.keyPoints.map((point, pointIndex) => (
                  <div key={pointIndex} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem'
                  }}>
                    <span style={{
                      color: '#28a745',
                      fontWeight: 'bold',
                      fontSize: '1rem',
                      marginTop: '0.1rem'
                    }}>
                      ✓
                    </span>
                    <span style={{
                      color: '#495057',
                      fontSize: '0.9rem',
                      lineHeight: '1.5'
                    }}>
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
