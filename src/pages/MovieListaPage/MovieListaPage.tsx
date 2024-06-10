import React from 'react';
import Header from '../../common/components/ListaFav';
import MovieSection from '../../common/components/MovieSection';

const likedMovies = [
    { image: 'path/to/image1.jpg', title: 'Película 1', description: 'Descripción de la película' },
    { image: 'path/to/image2.jpg', title: 'Serie 1', description: 'Descripción de la serie' },
    { image: 'path/to/image3.jpg', title: 'Película 2', description: 'Descripción de la película' },
    { image: 'path/to/image4.jpg', title: 'Serie 2', description: 'Descripción de la serie' },
    { image: 'path/to/image5.jpg', title: 'Película 3', description: 'Descripción de la película' },
    { image: 'path/to/image6.jpg', title: 'Serie 3', description: 'Descripción de la serie' },
    { image: 'path/to/image7.jpg', title: 'Película 4', description: 'Descripción de la película' },
    { image: 'path/to/image8.jpg', title: 'Serie 4', description: 'Descripción de la serie' },
];

const watchedMovies = [
    { image: 'path/to/image1.jpg', title: 'Película 1', description: '' },
    { image: 'path/to/image2.jpg', title: 'Película 2', description: '' },
    { image: 'path/to/image3.jpg', title: 'Serie 1', description: '' },
    { image: 'path/to/image4.jpg', title: 'Película 3', description: '' },
    { image: 'path/to/image5.jpg', title: 'Serie 2', description: '' },
    { image: 'path/to/image6.jpg', title: 'Película 4', description: '' },
    { image: 'path/to/image7.jpg', title: 'Serie 3', description: '' },
    { image: 'path/to/image8.jpg', title: 'Serie 4', description: '' },
];

const ListsPage: React.FC = () => {
    return (
        <div className="bg-blue-900 min-h-screen">
            <Header />
            <div className="p-8">
                <MovieSection title="Mis me gusta" movies={likedMovies} />
                <MovieSection title="Mis vistas" movies={watchedMovies} />
            </div>
        </div>
    );
};

export default ListsPage;