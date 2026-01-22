const SafetySection = () => {
  return (
    <section className="hs-section-v2-safety-obession">
      <div className="safety-section">
        <h2 className="safety-title">Safety Obsession</h2>
        <p className="safety-description">
          Ensuring the highest standards of safety in every installation.
        </p>
        
        {/* Grid for safety logos implied by .logos-grid css */}
        <div className="logos-grid">
          <div><img src="/images/safety-logo-1.png" alt="Safety Cert 1" /></div>
          <div><img src="/images/safety-logo-2.png" alt="Safety Cert 2" /></div>
          <div><img src="/images/safety-logo-3.png" alt="Safety Cert 3" /></div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;