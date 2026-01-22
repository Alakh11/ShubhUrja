// import React from 'react';
import Navbar from './components/Navbar'; // The fixed Navbar
import ContactForm from './components/ContactForm';
import SavingsCalculator from './components/SavingsCalculator'; 
import Faq from './components/Faq';
import ProjectGallery from './components/ProjectGallery';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <div>
      {/* 1. Responsive Navbar */}
      <Navbar />

      {/* 2. Hero Section */}
      <header id="home" className="hero">
        <div className="hero-content">
          <h1>Power Your Home with <br /> <span className="highlight">Endless Sunshine</span></h1>
          <p>
            Join the energy revolution. Cut your electricity bills by up to 90% and secure a sustainable future for your family with ShubhUrja.
          </p>
          <div className="button-group" style={{ marginTop: '20px' }}>
            <a href="#calculator" className="btn btn-primary">Calculate Savings</a>
            <a href="#projects" className="btn btn-secondary">See Our Work</a>
          </div>
        </div>
      </header>

      {/* 3. Features Section */}
      <section id="features">
        <div className="container">
          <h2>Why Choose <span className="highlight">ShubhUrja?</span></h2>
          <div className="grid grid-3" style={{ marginTop: '50px' }}>
            <div className="card">
              <span className="material-symbols-outlined icon">savings</span>
              <h3>Zero Electricity Bills</h3>
              <p>Generate your own power and say goodbye to rising electricity costs. ROI in just 3-4 years.</p>
            </div>
            <div className="card">
              <span className="material-symbols-outlined icon">engineering</span>
              <h3>Expert Installation</h3>
              <p>Our certified engineers ensure a safe, leak-proof, and aesthetically pleasing installation.</p>
            </div>
            <div className="card">
              <span className="material-symbols-outlined icon">eco</span>
              <h3>Green & Sustainable</h3>
              <p>Reduce your carbon footprint. One home solar system saves as much CO2 as planting 100 trees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Project Gallery */}
      <ProjectGallery />

      {/* 5. Savings Calculator */}
      <SavingsCalculator />

      {/* 6. Process / How it Works Section */}
      <section id="process">
        <div className="container">
          <h2>How It <span className="highlight">Works</span></h2>
          <div className="grid grid-3" style={{ marginTop: '50px' }}>
            <div className="step-card step-connector">
              <div className="step-number">1</div>
              <h3>Free Site Visit</h3>
              <p>Our engineer visits your roof to analyze shadow-free area and load requirements.</p>
            </div>
            <div className="step-card step-connector">
              <div className="step-number">2</div>
              <h3>Design & Install</h3>
              <p>We design a custom structure and install top-tier panels in just 2-3 days.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Net Metering</h3>
              <p>We handle government liaisoning to get your net meter installed. You start saving!</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Services Section */}
      <section id="services">
        <div className="container">
          <h2>Our <span className="highlight">Services</span></h2>
          <div className="grid grid-3" style={{ marginTop: '40px' }}>
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px', height: '300px' }}>
              <img src="https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?auto=format&fit=crop&w=800" alt="Residential" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, background: 'rgba(0,0,0,0.7)', color: 'white', width: '100%', padding: '20px' }}>
                <h3>Residential Rooftop</h3>
              </div>
            </div>
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px', height: '300px' }}>
              <img src="https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=800" alt="Commercial" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, background: 'rgba(0,0,0,0.7)', color: 'white', width: '100%', padding: '20px' }}>
                <h3>Commercial Plants</h3>
              </div>
            </div>
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px', height: '300px' }}>
              <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800" alt="Maintenance" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, background: 'rgba(0,0,0,0.7)', color: 'white', width: '100%', padding: '20px' }}>
                <h3>Operations & Maintenance</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <Faq />

      {/* 9. Contact Section */}
      <ContactForm />

      {/* 10. Footer */}
      <footer style={{ background: '#0f172a', color: '#94a3b8', padding: '40px 20px', textAlign: 'center' }}>
        <div className="container">
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '20px' }}>ShubhUrja</div>
          <p>© {new Date().getFullYear()} ShubhUrja Solar Solutions. All rights reserved.</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/919580813770" target="_blank" rel="noreferrer" className="whatsapp-float">
        <span className="material-symbols-outlined whatsapp-icon" style={{fontSize: '32px'}}>chat</span>
      </a>

    </div>
  );
}

export default App;