import './Products.css';

function Solutions() {
  const solutions = [
    {
      title: "Cyber Security",
      image: "https://www.shutterstock.com/image-illustration/cyber-security-shield-symbol-blue-260nw-1449926897.jpg"
    },
    {
      title: "Infrastructure Modernization",
      image: "https://blog.shi.com/wp-content/uploads/2023/05/datacenterwarrantysolutionbrief_hub-img_v1_ag_03nov25.png"
    },
    {
      title: "Software Solutions",
      image: "https://s3.amazonaws.com/a-us.storyblok.com/f/1022730/2a96f6714c/grafana-dashboards-alerts-analysis.png"
    },
    {
      title: "Intelligent Devices",
      image: "https://techvidvan.com/tutorials/wp-content/uploads/2021/10/iot-devices.webp"
    },
    {
      title: "Mobility",
      image: "https://geospatialworld.net/wp-content/uploads/2017/03/Smart-Mobility-2.jpg"
    },
    {
      title: "Services",
      image: "https://www.cloudavize.com/wp-content/uploads/2023/10/IT-Consulting.jpeg"
    }
  ];
  
  return (
    <section className="solutions-section">
      <div className="solutions-container">
        <h2 className="solutions-heading">Our Solutions</h2>
        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div key={index} className="solution-card">
              <div className="card-decorations">
                <div className="deco-bar deco-top-left"></div>
                <div className="deco-bar deco-bottom-right"></div>
              </div>
              <img src={solution.image} alt={solution.title} className="solution-image" />
              <div className="solution-overlay">
                <h3 className="solution-title">{solution.title}</h3>
                <button className="read-more-btn">Read more</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Solutions;
