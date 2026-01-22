import  { useState } from 'react';

const SavingsCalculator = () => {
  const [bill, setBill] = useState(5000);

  // Simple Logic: 
  // Solar typically reduces bills by 90%. 
  // Lifetime savings = (Monthly Bill * 0.90) * 12 months * 25 years
  const monthlySavings = Math.floor(bill * 0.90);
  const annualSavings = monthlySavings * 12;
  const lifetimeSavings = annualSavings * 25;

  return (
    <section id="calculator" style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', color: 'white', padding: '80px 20px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <h2>Calculate Your <span style={{ color: '#FF9800' }}>Savings</span></h2>
          <p style={{ marginBottom: '40px', opacity: 0.8 }}>Adjust the slider to match your current average monthly electricity bill.</p>
          
          {/* The Calculator Card */}
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '40px', borderRadius: '20px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}>
            
            <div style={{ marginBottom: '40px' }}>
              <label style={{ fontSize: '1.2rem', display: 'block', marginBottom: '10px' }}>
                My Monthly Bill: <strong style={{ color: '#FF9800', fontSize: '1.5rem' }}>₹{bill.toLocaleString()}</strong>
              </label>
              <input 
                type="range" 
                min="1000" 
                max="50000" 
                step="500" 
                value={bill} 
                onChange={(e) => setBill(Number(e.target.value))}
                style={{ width: '100%', height: '8px', borderRadius: '5px', background: '#ddd', accentColor: '#FF9800', cursor: 'pointer' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginTop: '10px', opacity: 0.6 }}>
                <span>₹1,000</span>
                <span>₹50,000+</span>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-3" style={{ gap: '20px' }}>
              <div style={{ background: 'white', color: '#1e293b', padding: '20px', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Monthly Savings</div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#4CAF50' }}>₹{monthlySavings.toLocaleString()}</div>
              </div>
              <div style={{ background: 'white', color: '#1e293b', padding: '20px', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Annual Savings</div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#4CAF50' }}>₹{annualSavings.toLocaleString()}</div>
              </div>
              <div style={{ background: '#FF9800', color: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 10px 20px rgba(255, 152, 0, 0.3)' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>25-Year Savings</div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800 }}>₹{lifetimeSavings.toLocaleString()}</div>
              </div>
            </div>

            <div style={{ marginTop: '30px', fontSize: '0.9rem', opacity: 0.7 }}>
              *Estimated savings based on typical solar performance. Actuals may vary.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsCalculator;