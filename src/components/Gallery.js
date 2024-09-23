import React, { useState } from 'react';
import Card from './Card';
import './Gallery.css';

const Gallery = () => {
    const [cardsData, setCardsData] = useState([
        {
            title: 'Bunk Bed',
            image: require('../assets/img/groupbunkbed.jpeg'),
            description: 'A cozy room with great amenities.',
            liked: false, // Initial liked status
        },
        {
            title: 'Double Bed',
            image: require('../assets/img/singlebed4.jpeg'),
            description: 'Spacious and comfortable.',
            liked: false, // Initial liked status
        },
        // Add more card data as needed
    ]);

    const handleLike = (index) => {
        // Create a new array to avoid direct mutation
        const newCardsData = [...cardsData];
        newCardsData[index].liked = !newCardsData[index].liked; // Toggle liked status
        setCardsData(newCardsData); // Update state
    };

    return (
        <div className="gallery">
            {cardsData.map((card, index) => (
                <Card
                    key={index}
                    title={card.title}
                    image={card.image}
                    description={card.description}
                    liked={card.liked} // Pass liked status to Card
                    onLike={() => handleLike(index)} // Pass the index to handleLike
                />
            ))}
        </div>
    );
};

export default Gallery;
