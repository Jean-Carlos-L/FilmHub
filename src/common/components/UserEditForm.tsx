import React, { useState } from 'react';
import InputField from '../components/editUser';
import SelectField from '../components/editSelectUser';
import { User } from '../../common/models/User.edit';

const UserProfileForm: React.FC = () => {
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [favoriteGenres, setFavoriteGenres] = useState<string[]>([]);
    const genres = ['TERROR', 'COMEDIA', 'ROMANTICO'];

    const handleGenreChange = (genre: string) => {
        if (genre && !favoriteGenres.includes(genre)) {
            setFavoriteGenres([...favoriteGenres, genre]);
        }
    };

    const handleGenreRemove = (genre: string) => {
        setFavoriteGenres(favoriteGenres.filter(g => g !== genre));
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        const newUser: User = { fullName, phone, email, password, birthDate, favoriteGenres };
        console.log('User Profile:', newUser);
    };

    return (
        <div className="bg-blue-900 p-6 rounded-lg shadow-lg w-full max-w-3xl mx-auto">
            <form onSubmit={handleSave}>
                <div className="flex items-center justify-between mb-6">
                    <div className="bg-gray-500 w-24 h-24 rounded-full flex items-center justify-center text-white">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 19.071A7.5 7.5 0 0117.5 10.5m-4.379 2.879l-1.44 1.44M5.121 5.121a7.5 7.5 0 010 10.606m-1.06-1.06a9 9 0 0112.727-12.728m4.95 4.95a9 9 0 01-12.727 12.728m4.95-4.95L10.5 17.5m5.879-5.879l-1.44 1.44M5.121 19.071L5.12 19.071z" />
                        </svg>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <InputField label="Nombre completo" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                    <InputField label="Teléfono" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <InputField label="Correo electrónico" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <InputField label="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <InputField label="Fecha de Nacimiento" type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} /> 
                    <SelectField 
                        label="Agregar Géneros Favoritos" 
                        options={genres} 
                        selectedOptions={favoriteGenres} 
                        onChange={handleGenreChange}
                        onRemove={handleGenreRemove} 
                    />
                </div>
                <button type="submit" className="w-full py-2 mt-4 bg-green-600 text-white rounded-md">Guardar</button>
            </form>
        </div>
    );
};

export default UserProfileForm;