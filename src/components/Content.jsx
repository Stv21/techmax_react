import './Content.css';

function Content({ activeContent }) {
  if (!activeContent) return null;
  
  return (
    <div className="content-section">
      <div className="content-container">
        <h2>{activeContent}</h2>
        <p>{activeContent} content here</p>
        <p>This is a placeholder for the {activeContent} section. Add your actual content here.</p>
      </div>
    </div>
  );
}

export default Content;
