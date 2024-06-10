import React from 'react';

interface MovieCardProps {
    image: string;
    title: string;
    description: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ image, title, description }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
};

export default MovieCard;