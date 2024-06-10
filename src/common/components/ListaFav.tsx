import React from 'react';


const Header: React.FC = () => {
    return (
        <div className="bg-blue-900 text-white py-4 px-8 flex justify-between items-center">
            <div className="flex space-x-4">
                <button className="bg-purple-700 text-white px-4 py-2 rounded">Principal</button>
                <button className="text-white px-4 py-2 rounded">Popular</button>
                <button className="text-white px-4 py-2 rounded">Listas</button>
            </div>
            <div className="flex items-center space-x-4">
                <input type="text" placeholder="Browse" className="px-4 py-2 rounded" />
                <button className="bg-red-700 text-white px-4 py-2 rounded">Configuración</button>
            </div>
        </div>
    );
};

export default Header;