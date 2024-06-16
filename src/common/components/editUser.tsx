import React from "react";

interface InputFieldProps {
    label: string;
    type: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, type }) => {
    return (
        <div className="mb-4">
            <label className="block text-white mb-2">{label}</label>
            <input
                type={type}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
            />
        </div>
    );
};

export default InputField;
