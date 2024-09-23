// src/components/FacilitiesSection.js
import React from 'react';

const FacilitiesSection = () => {
    return (
        <section className="facilities">
            <h1>Our Facilities</h1>
            <p>Bring the homely feeling of our facilities provide the best environment and classic lifestyle</p>
            <div className="row">
                <div className="facilities-call">
                    <img src={require('../assets/img/dininghall.jpeg')} alt="Dining Hall" />
                    <h3>Neat and Clean Dining Place</h3>
                    <p>Neatness and hygiene being our major priorities.</p>
                </div>
                <div className="facilities-call">
                    <img src={require('../assets/img/relaxarea.jpeg')} alt="Relax Area" />
                    <h3>Leisure and Relax Area</h3>
                    <p>Enjoy your stay with exciting games and entertainment.</p>
                </div>
                <div className="facilities-call">
                    <img src={require('../assets/img/groupstudyarea.jpeg')} alt="Study Lounge" />
                    <h3>Comfortable Study Lounge</h3>
                    <p>Enjoy learning at our luxurious and comfortable study lounge.</p>
                </div>
            </div>
        </section>
    );
};

export default FacilitiesSection;
