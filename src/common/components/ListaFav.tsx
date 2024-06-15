import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'src/routes/routes';


const Header: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-blue-900 text-white py-4 px-8 w-full mb-3 flex justify-between items-center">
            <div className="flex space-x-4">
                <button className="bg-purple-700 text-white px-4 py-2 rounded" onClick={() => navigate(ROUTES.LANDING_PAGE)}>Principal</button>
                <button className="text-white px-4 py-2 rounded"></button>
                <button className="text-white px-4 py-2 rounded" onClick={() => navigate(ROUTES.LISTS)}>Listas</button>
            </div>
            <div className="flex items-center space-x-4">
                <button className="bg-red-700 text-white px-4 py-2 rounded">Configuración</button>
            </div>
        </div>
    );
};

export default Header;