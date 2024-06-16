import React from 'react';
import UserProfileForm from './components/UserEditForm';

const UserProfilePage: React.FC = () => {
    return (
        <div className="h-full flex-col flex-grow flex-1 flex items-center justify-center bg-blue-900">
            <UserProfileForm />
        </div>
    );
};

export default UserProfilePage;