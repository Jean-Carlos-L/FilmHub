import React from 'react';
import UserProfileForm from './components/UserEditForm';

const UserProfilePage: React.FC = () => {
    return (
        <div className="h-screen flex items-center justify-center bg-blue-900">
            <UserProfileForm />
        </div>
    );
};

export default UserProfilePage;