import React from "react";
import Slider from "react-slick";

const CustomerJourney: React.FC = () => {
    // Configuration for the Slider
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Show 1 card at a time (adjust if needed)
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false, // Set to true if you want Next/Prev buttons
    };

    return (
        <section className="hs-section-v2-customer-journey">
            <div className="customer-journey">
                <div className="customer-journey-section">
                    {/* We wrap the testimonial container in the Slider component */}
                    <div className="testimonial-container" style={{ maxWidth: "800px", margin: "0 auto" }}>
                        <Slider {...settings}>

                            {/* Slide 1 */}
                            <div className="testimonial-card">
                                <div className="testimonial-header">
                                    <span className="material-symbols-outlined">format_quote</span>
                                    <div className="testimonial-society">Green Valley Apts</div>
                                </div>
                                <div className="testimonial-content">
                                    "ShubhUrja transformed our energy consumption. The installation was quick, and the savings were immediate. Highly recommended!"
                                </div>
                            </div>

                            {/* Slide 2 */}
                            <div className="testimonial-card">
                                <div className="testimonial-header">
                                    <span className="material-symbols-outlined">format_quote</span>
                                    <div className="testimonial-society">Sunrise Towers</div>
                                </div>
                                <div className="testimonial-content">
                                    "Professional team and excellent support. They handled everything from permits to installation seamlessly."
                                </div>
                            </div>

                            {/* Slide 3 */}
                            <div className="testimonial-card">
                                <div className="testimonial-header">
                                    <span className="material-symbols-outlined">format_quote</span>
                                    <div className="testimonial-society">Eco Park Villa</div>
                                </div>
                                <div className="testimonial-content">
                                    "A fantastic investment for our society. The app tracking features are really useful for monitoring daily generation."
                                </div>
                            </div>

                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomerJourney;