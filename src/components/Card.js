import React from 'react';

const Card = ({ title, image, description, liked, onLike }) => {
    return (
        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <button 
                className={`like-button ${liked ? 'liked' : ''}`} 
                onClick={onLike} // Call onLike when button is clicked
            >
                {liked ? '❤️ Liked' : '❤️ Like'}
            </button>
        </div>
    );
};

export default Card;
