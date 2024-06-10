import React, { useState } from 'react';
import Header from '../../common/components/ListaFav';
import MovieSection from '../../common/components/MovieSection';

const getLists = () => {
    const lists = JSON.parse(localStorage.getItem('lists'));

    return lists;
}
const ListsPage: React.FC = () => {
    const [lists] = useState<any>(() => {
        return getLists()
    })

    return (
        <div className="bg-blue-900 min-h-screen">
            <Header />
            <div className="p-8">
                {
                    lists.map((list) => {
                        return <MovieSection key={list.id} title={list.name} multimedia={list.multimedia} />
                    })
                }
            </div>
        </div>
    );
};

export default ListsPage;