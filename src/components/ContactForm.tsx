import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm, type SubmitHandler } from 'react-hook-form';

// Define the shape of the form data
type FormInputs = {
  user_name: string;
  user_phone: string;
  user_bill: string;
};

const ContactForm = () => {
  const [status, setStatus] = useState("");
  
  // 1. Setup React Hook Form
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormInputs>();

  // 2. The Clean Send Function (Using 'send' instead of 'sendForm')
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    setStatus("Sending...");

    // This object maps your form data to the EmailJS template variables
    const templateParams = {
      user_name: data.user_name,
      user_phone: data.user_phone,
      user_bill: data.user_bill,
    };

    emailjs.send(
      'service_ykrr5iw',   // Service ID
      'template_kc3sdee',  // Template ID
      templateParams,      // The Data
      'AoX2ooni5SZC1MbtZ'  // Public Key
    )
    .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus("Message Sent! We will contact you shortly.");
        reset(); // Clears the form
    }, (error) => {
        console.error('FAILED...', error);
        setStatus(`Failed: ${error.text || "Check console"}`);
    });
  };

  return (
    <section id="contact" style={{ background: '#f8fafc', padding: '80px 20px' }}>
      <div className="container">
        <h2 style={{ marginBottom: '50px' }}>Visit <span className="highlight">Our Office</span></h2>
        
        <div className="grid contact-grid">
          
          {/* LEFT SIDE: Contact Form */}
          <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <h3 style={{ marginBottom: '20px' }}>Get a Quote</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* Name Input */}
              <div>
                <input 
                  {...register("user_name", { required: true })} 
                  placeholder="Your Name" 
                  style={{ width: '100%', padding: '15px', borderRadius: '8px', border: '1px solid #cbd5e1' }} 
                />
                {errors.user_name && <span style={{color:'red', fontSize:'0.8rem'}}>Name is required</span>}
              </div>

              {/* Phone Input */}
              <div>
                <input 
                  {...register("user_phone", { required: true, pattern: /^[0-9]{10}$/ })} 
                  placeholder="Phone Number" 
                  style={{ width: '100%', padding: '15px', borderRadius: '8px', border: '1px solid #cbd5e1' }} 
                />
                 {errors.user_phone && <span style={{color:'red', fontSize:'0.8rem'}}>Valid phone required</span>}
              </div>

              {/* Bill Dropdown */}
              <div>
                <select 
                  {...register("user_bill", { required: true })} 
                  style={{ width: '100%', padding: '15px', borderRadius: '8px', border: '1px solid #cbd5e1', background:'white' }}
                >
                  <option value="">Avg. Monthly Bill?</option>
                  <option value="<2000">Under ₹2,000</option>
                  <option value="2000-5000">₹2,000 - ₹5,000</option>
                  <option value=">5000">Above ₹5,000</option>
                </select>
              </div>
              
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                {status || "Request Call Back"}
              </button>
            </form>
          </div>

          {/* RIGHT SIDE: Map (I added a working Google Maps Embed for Noida) */}
          <div style={{ height: '100%', minHeight: '400px', borderRadius: '16px', overflow: 'hidden', border: '2px solid white', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.253153612227!2d80.8977148!3d26.800066800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bff09ee642363%3A0xa15ec98b71826301!2sAjanta%20tower!5e0!3m2!1sen!2sin!4v1769093672068!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Company Location"
              ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;