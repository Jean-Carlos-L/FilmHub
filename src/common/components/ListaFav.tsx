import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "src/routes/routes";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/16/solid";
import { logout } from "@redux/feature/auth/authSlice";
import { useDispatch } from "react-redux";

const Header: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        navigate(ROUTES.LOGIN);
    };

    return (
        <div className="bg-blue-900 text-white p-4 w-full flex justify-between items-center">
            <div className="flex space-x-4">
                <button
                    className="bg-purple-700 text-white px-4 py-2 rounded"
                    onClick={() => navigate(ROUTES.LANDING_PAGE)}
                >
                    Principal
                </button>
                <button className="text-white px-4 py-2 rounded"></button>
                <button
                    className="text-white px-4 py-2 rounded"
                    onClick={() => navigate(ROUTES.LISTS)}
                >
                    Listas
                </button>
            </div>
            <div className="flex items-center space-x-4">
                <button
                    className="bg-red-700 text-white px-4 py-2 rounded"
                    onClick={() => navigate(ROUTES.USER_PROFILE)}
                >
                    Editar perfil
                </button>
                <button
                    className="bg-red-700 text-white px-4 py-2 rounded"
                    onClick={handleLogout}
                >
                    <ArrowRightStartOnRectangleIcon className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
};

export default Header;
