// src/components/TestimonialsSection.js
import React from 'react';

const TestimonialsSection = () => {
    return (
        <section className="testimonials">
            <h1>What our students say</h1>
            <p>We give the best. So listen from the best too.</p>
            <div className="row">
                <div className="testimonial-col">
                    <img src={require('../assets/img/student1.jpeg')} alt="Student 1" />
                    <div>
                        <p>Unlike some of the places I've seen, I found the Castle hostels to be clean and inviting!</p>
                        <h3>Miya</h3>
                        {/* Stars can be added here */}
                    </div>
                </div>
                <div className="testimonial-col">
                    <img src={require('../assets/img/student2.jpeg')} alt="Student 2" />
                    <div>
                        <p>Comfortable and well-maintained, this hostel offers a friendly atmosphere.</p>
                        <h3>Charles</h3>
                        {/* Stars can be added here */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
