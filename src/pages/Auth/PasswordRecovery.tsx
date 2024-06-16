import React from 'react';
import PasswordRecoveryForm from '../../common/components/PasswordRecoveryForm';

const PasswordRecoveryPage: React.FC = () => {
    return (
        <div className="h-screen flex items-center justify-center bg-blue-900">
            <PasswordRecoveryForm />
        </div>
    );
};

export default PasswordRecoveryPage;