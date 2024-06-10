import React from 'react';
import MovieCard from '../components/ListaMovieCard';

interface MovieSectionProps {
    title: string;
    movies: { image: string; title: string; description: string }[];
}

const MovieSection: React.FC<MovieSectionProps> = ({ title, movies }) => {
    return (
        <div className="mb-8">
            <h2 className="text-2xl text-white mb-4">{title}</h2>
            <div className="grid grid-cols-5 gap-4">
                {movies.map((movie, index) => (
                    <MovieCard
                        key={index}
                        image={movie.image}
                        title={movie.title}
                        description={movie.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default MovieSection;