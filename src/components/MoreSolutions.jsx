import { useEffect } from 'react';
import './Solutions.css';
import './MoreSolutions.css';

const categories = [
  {
    category: 'Mobility & AFC',
    items: [
      {
        title: 'Metro AFC Systems',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop',
        description:
          'We deliver secure, high-performance, and contactless fare collection solutions that streamline passenger flow, enhance operational efficiency, and set a new standard for seamless metro travel.',
      },
      {
        title: 'BRT Integration',
        image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&h=500&fit=crop',
        description:
          'We enable a unified transit network that seamlessly connects buses and metros, delivering a smooth, integrated, and hassle-free journey for passengers.',
      },
      {
        title: 'Multi-Modal Payments',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
        description:
          'We provide flexible, secure payment options that simplify access to public transport, accelerate passenger adoption, and enhance overall travel convenience.',
      },
      {
        title: 'IoT Gateways',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop',
        description:
          'We enable real-time data intelligence across transit infrastructure, empowering smarter operations, faster decision-making, and consistently superior passenger experiences.',
      },
    ],
  },
  {
    category: 'Enterprise IT Infrastructure',
    items: [
      {
        title: 'Cloud Infrastructure',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop',
        description:
          'We deliver secure, scalable cloud platforms that adapt effortlessly to evolving business demands, enabling agility, performance, and long-term growth.',
      },
      {
        title: 'Data Center Solutions',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop&crop=right',
        description:
          'We deliver resilient, high-performance data center solutions that form a secure and reliable digital backbone for mission-critical operations.',
      },
      {
        title: 'Network Security',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop',
        description:
          'We safeguard your networks with robust, resilient security solutions that protect critical systems, ensure trust, and maintain uninterrupted operations.',
      },
      {
        title: 'DevOps Automation',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop',
        description:
          'We accelerate software delivery through intelligent automation, reducing risk, improving quality, and enabling faster, more reliable operations.',
      },
    ],
  },
  {
    category: 'Advisory & Technical Consultancy',
    items: [
      {
        title: 'Digital Transformation',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=500&fit=crop',
        description:
          'We translate digital vision into measurable business outcomes through modern, scalable, and future-focused transformation initiatives.',
      },
      {
        title: 'Technology Assessment',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
        description:
          'We deliver clear, strategic insights that enable informed technology decisions and long-term value creation.',
      },
      {
        title: 'Architecture Design',
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=500&fit=crop',
        description:
          'We design robust, scalable architectures that form the foundation of secure, future-ready systems.',
      },
      {
        title: 'Compliance Consulting',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop',
        description:
          'We simplify regulations so your business stays secure and confident—without the headache.',
      },
    ],
  },
  {
    category: 'Professional Services (FMS)',
    items: [
      {
        title: 'System Implementation',
        image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=500&fit=crop',
        description:
          'Turn strategy into reality with seamless system implementations that just work.',
      },
      {
        title: 'Managed Services',
        image: 'https://images.unsplash.com/photo-1600267185393-e158a98703de?w=800&h=500&fit=crop',
        description:
          'Expert monitoring, support, and maintenance — keeping your operations running smoothly.',
      },
      {
        title: 'Staff Augmentation',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop',
        description:
          'Scale your team instantly with skilled professionals tailored to your project needs.',
      },
      {
        title: 'Quality Assurance',
        image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=500&fit=crop',
        description:
          'Ensure flawless functionality with thorough testing that protects your business.',
      },
    ],
  },
];

function MoreSolutions() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="solutions-page more-solutions-page">
      <div className="solutions-hero">
        <div className="solutions-hero-content">
          <h1 className="solutions-title">Our Solutions</h1>
          <p className="solutions-subtitle">
            End-to-end technology services across mobility, enterprise IT, advisory, and professional delivery
          </p>
        </div>
      </div>

      <main className="solutions-container more-solutions-container">
        {categories.map((cat) => (
          <section key={cat.category} className="more-category-section">
            <h2 className="more-category-heading">{cat.category}</h2>
            <div className="more-cards-grid">
              {cat.items.map((item) => (
                <div key={item.title} className="more-card">
                  <div className="more-card-img-wrap">
                    <img src={item.image} alt={item.title} className="more-card-img" loading="lazy" />
                  </div>
                  <div className="more-card-body">
                    <h3 className="more-card-title">{item.title}</h3>
                    <p className="more-card-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default MoreSolutions;
