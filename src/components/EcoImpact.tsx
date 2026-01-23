import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EcoImpact = () => {
  const [bill, setBill] = useState<number | string>("");
  const [impact, setImpact] = useState({ co2: 0, trees: 0, coal: 0 });

  const calculateImpact = (e: React.FormEvent) => {
    e.preventDefault();
    const monthlyBill = Number(bill);
    
    // Formula:
    // 1. Estimate units (kWh) from Bill (Assuming Avg Rate ₹8/unit)
    const monthlyUnits = monthlyBill / 8;
    
    // 2. Annual Solar Generation (1kW Solar generates ~1400 units/year)
    // We assume they offset 100% of their bill
    const annualUnits = monthlyUnits * 12;

    // 3. Carbon Factors (Indian Grid Average ~0.82 kg CO2/kWh)
    const co2Avoided = Math.floor(annualUnits * 0.82); // in kg
    const treesEquivalent = Math.floor(co2Avoided / 20); // 1 Tree ~ 20kg CO2/yr
    const coalSaved = Math.floor(annualUnits * 0.5); // 1 kWh ~ 0.5 kg coal

    setImpact({ co2: co2Avoided, trees: treesEquivalent, coal: coalSaved });
  };

  return (
    <section style={{ padding: '80px 20px', background: '#e6fffa' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h2>Check Your <span style={{ color: '#2e7d32' }}>Eco Impact</span> 🌿</h2>
        <p style={{ marginBottom: '40px' }}>Enter your monthly electricity bill to see how much Earth you can save.</p>

        <form onSubmit={calculateImpact} style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '40px' }}>
          <input 
            type="number" 
            placeholder="Monthly Bill (₹)" 
            value={bill}
            onChange={(e) => setBill(e.target.value)}
            style={{ padding: '15px', borderRadius: '50px', border: '1px solid #ccc', width: '250px', fontSize: '1.1rem' }}
            required
          />
          <button type="submit" className="btn btn-primary">Calculate Impact</button>
        </form>

        {impact.co2 > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}
          >
            {/* Card 1: CO2 */}
            <div className="impact-card" style={{ background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '3rem', color: '#546E7A' }}>cloud_off</span>
              <h3 style={{ fontSize: '2.5rem', margin: '10px 0', color: '#2e7d32' }}>{impact.co2.toLocaleString()} <span style={{ fontSize: '1rem', color: '#666' }}>kg</span></h3>
              <p>CO₂ Avoided Annually</p>
            </div>

            {/* Card 2: Trees */}
            <div className="impact-card" style={{ background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '3rem', color: '#4CAF50' }}>forest</span>
              <h3 style={{ fontSize: '2.5rem', margin: '10px 0', color: '#2e7d32' }}>{impact.trees.toLocaleString()}</h3>
              <p>Trees Planted Equivalent</p>
            </div>

            {/* Card 3: Coal */}
            <div className="impact-card" style={{ background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '3rem', color: '#3e2723' }}>diamond</span>
              <h3 style={{ fontSize: '2.5rem', margin: '10px 0', color: '#2e7d32' }}>{impact.coal.toLocaleString()} <span style={{ fontSize: '1rem', color: '#666' }}>kg</span></h3>
              <p>Coal Not Burned</p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default EcoImpact;