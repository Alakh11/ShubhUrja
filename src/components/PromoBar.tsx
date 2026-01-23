import { useState } from 'react';

const PromoBar = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div style={{
      background: '#2e7d32',
      color: 'white',
      textAlign: 'center',
      padding: '10px',
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 2000,
      fontSize: '0.9rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '15px'
    }}>
      <span>
        📢 <strong>Govt Subsidy Alert:</strong> Get up to ₹78,000 off via PM Surya Ghar Yojana. Offer ends soon!
      </span>
      <button 
        onClick={() => setVisible(false)}
        style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '1.2rem' }}
      >
        &times;
      </button>
    </div>
  );
};

export default PromoBar;