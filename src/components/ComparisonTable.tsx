// import React from 'react';

const ComparisonTable = () => {
  return (
    <section style={{ background: '#fff', padding: '80px 20px' }}>
      <div className="container">
        <h2>Solar vs. <span className="highlight">Traditional Grid</span></h2>
        
        <div style={{ overflowX: 'auto', marginTop: '40px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
            <thead>
              <tr style={{ background: '#1e293b', color: 'white', textAlign: 'left' }}>
                <th style={{ padding: '20px' }}>Feature</th>
                <th style={{ padding: '20px', background: '#FF9800' }}>ShubhUrja Solar</th>
                <th style={{ padding: '20px' }}>Regular Grid Power</th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td style={{ padding: '20px', fontWeight: 'bold' }}>Monthly Bill</td>
                <td style={{ padding: '20px', color: '#2e7d32', fontWeight: 'bold' }}>Zero / Negative</td>
                <td style={{ padding: '20px', color: '#c62828' }}>Always Increasing</td>
              </tr>
              {/* Row 2 */}
              <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
                <td style={{ padding: '20px', fontWeight: 'bold' }}>Govt. Subsidy</td>
                <td style={{ padding: '20px', color: '#2e7d32', fontWeight: 'bold' }}>Up to ₹78,000</td>
                <td style={{ padding: '20px' }}>None</td>
              </tr>
              {/* Row 3 */}
              <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td style={{ padding: '20px', fontWeight: 'bold' }}>Property Value</td>
                <td style={{ padding: '20px', color: '#2e7d32', fontWeight: 'bold' }}>Increases by ~4%</td>
                <td style={{ padding: '20px' }}>No Impact</td>
              </tr>
              {/* Row 4 */}
              <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
                <td style={{ padding: '20px', fontWeight: 'bold' }}>ROI Period</td>
                <td style={{ padding: '20px', color: '#2e7d32', fontWeight: 'bold' }}>3-4 Years</td>
                <td style={{ padding: '20px' }}>Never</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;