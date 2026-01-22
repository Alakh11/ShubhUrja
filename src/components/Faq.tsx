import { useState } from 'react';

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ borderBottom: '1px solid #e2e8f0', marginBottom: '10px' }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{ width: '100%', textAlign: 'left', padding: '20px', background: 'none', border: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontSize: '1.1rem', fontWeight: 600 }}
      >
        {question}
        <span className="material-symbols-outlined" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: '0.3s' }}>expand_more</span>
      </button>
      {isOpen && (
        <div style={{ padding: '0 20px 20px', color: '#64748b', lineHeight: '1.6' }}>
          {answer}
        </div>
      )}
    </div>
  );
};

const Faq = () => {
  return (
    <section id="faq" style={{ background: 'white' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2>Frequently Asked <span className="highlight">Questions</span></h2>
        
        <div style={{ marginTop: '40px', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
          <FaqItem 
            question="How much does a solar system cost?" 
            answer="Prices vary based on capacity. A typical 3kW system for a home costs between ₹1.8L to ₹2.2L before subsidies. We provide custom quotes to match your exact needs." 
          />
          <FaqItem 
            question="Is there a government subsidy available?" 
            answer="Yes! Under the PM Surya Ghar Muft Bijli Yojana, you can avail subsidies up to ₹78,000 depending on your system size. ShubhUrja handles all the paperwork for you." 
          />
          <FaqItem 
            question="What is the warranty period?" 
            answer="Solar panels typically come with a 25-year performance warranty. Inverters usually have a 5-10 year warranty. ShubhUrja also provides 5 years of free maintenance service." 
          />
          <FaqItem 
            question="Does it work during power cuts?" 
            answer="On-grid systems shut down during power cuts for safety. However, if you choose a Hybrid system with battery backup, you can enjoy 24/7 power even during grid outages." 
          />
        </div>
      </div>
    </section>
  );
};

export default Faq;