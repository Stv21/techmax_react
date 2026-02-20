import { useState } from 'react';
import './Careers.css';

export default function Careers() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  const jobs = [
    {
      title: 'AVP - IT Infra & Security Operations',
      location: 'Mumbai',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop',
      content: `Ownership & Manage Team, Process, Services in Infra , Security and System Support.\nSupport Lead for - Infra, DB, Systems, Applications and liaison with Tech Teams for 24*7 system maintenance.`
    },
    {
      title: 'Production Support (L1 & L2 Support)',
      location: 'Mumbai',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=250&fit=crop',
      content: 'Provide Level 1/2 support, handle incidents, and maintain application health.'
    },
    {
      title: 'Software Engineer',
      location: 'Mumbai',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=250&fit=crop',
      content: 'Design and develop web applications, collaborate with cross-functional teams.'
    }
  ];

  return (
    <div className="careers-page">
      <section className="careers-hero">
        <div className="hero-inner">
          <h1>LET'S GROW TOGETHER</h1>
          <p className="hero-sub">Join our team and help us build great products.</p>
        </div>
      </section>

      <section className="life-at-company">
        <div className="container">
          <h2>Life at SaarTech</h2>
          <div className="life-content">
            <div className="life-text">
              <p className="justified">
                SaarTech is a young and dynamic organization built on innovation, collaboration, and purpose. We welcome talented individuals who are eager to tackle real-world problems and build impactful solutions with us. We foster an environment where personal ambitions and professional growth go hand in hand, supported by strong learning and career development opportunities.
              </p>
              <p className="justified">
                We believe in a meaningful alignment of personal and professional goals, and we
                provide opportunities for learning and career progression.
              </p>
            </div>
            <div className="life-badge">
              <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=200&h=200&fit=crop" alt="Great Place to Work" />
            </div>
          </div>
        </div>
      </section>

      <section className="job-openings">
        <div className="container">
          <h2>JOB OPENINGS</h2>
          <div className="accordion">
            {jobs.map((job, i) => (
              <div className="accordion-item" key={i}>
                <button className={`accordion-toggle ${openIndex === i ? 'open' : ''}`} onClick={() => toggle(i)}>
                  <span className="job-title">{job.title}</span>
                  <span className="job-location">{job.location}</span>
                </button>
                <div className={`accordion-panel ${openIndex === i ? 'open' : ''}`}>
                  <div className="job-panel-inner">
                    {job.image && (
                      <div className="job-image-wrap">
                        <img src={job.image} alt={job.title} className="job-image" />
                      </div>
                    )}
                    <div className="job-panel-text">
                      <p className="justified">{job.content}</p>
                      <div className="apply-row">
                        <a className="apply-btn" href="#">Apply Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fun-at-work">
        <div className="container">
          <h2>FUN AT WORK</h2>
          <div className="gallery">
            <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=250&fit=crop" alt="Town Hall" />
            <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=250&fit=crop" alt="Team" />
            <img src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400&h=250&fit=crop" alt="Celebration" />
          </div>
        </div>
      </section>
    </div>
  );
}
