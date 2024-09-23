// src/components/CampusSection.js
import React from 'react';

const CampusSection = () => {
    return (
        <section className="campus">
            <h1>ROOMS</h1>
            <p><b>Surf through the beauty of our hostels</b><br />Enjoy the fully furnished rooms that match the budget and provide the yet deserved luxury</p>
            <div className="row">
                <div className="campus-col">
                    <img src={require('../assets/img/singlebed.jpeg')} alt="Single Bed" />
                    <div className="layer">
                        <h3>SINGLE BED</h3>
                    </div>
                </div>
                <div className="campus-col">
                    <img src={require('../assets/img/doublebed.jpeg')} alt="Double Bed" />
                    <div className="layer">
                        <h3>DOUBLE BED</h3>
                    </div>
                </div>
                <div className="campus-col">
                    <img src={require('../assets/img/groupbunkbed.jpeg')} alt="Group Bed" />
                    <div className="layer">
                        <h3>GROUP BED</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CampusSection;
