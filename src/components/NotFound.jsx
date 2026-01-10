export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(90deg, #fc4a1a 0%, #f7b733 100%)',
      color: 'white',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '8rem', margin: '0', fontWeight: '800' }}>404</h1>
      <h2 style={{ fontSize: '2rem', margin: '20px 0' }}>Page Not Found</h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '30px', maxWidth: '600px' }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <a 
        href="/" 
        style={{
          padding: '15px 40px',
          background: 'white',
          color: '#fc4a1a',
          textDecoration: 'none',
          borderRadius: '30px',
          fontWeight: '600',
          fontSize: '1.1rem',
          transition: 'transform 0.3s ease',
          display: 'inline-block'
        }}
        onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
        onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
      >
        Back to Home
      </a>
    </div>
  );
}
