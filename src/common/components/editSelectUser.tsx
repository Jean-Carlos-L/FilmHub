import React from 'react';

interface SelectFieldProps {
    label: string;
    options: string[];
    selectedOptions: string[];
    onChange: (option: string) => void;
    onRemove: (option: string) => void;
}

const SelectField: React.FC<SelectFieldProps> = ({ label, options, selectedOptions, onChange, onRemove }) => {
    return (
        <div className="mb-4">
            <label className="block text-white mb-2">{label}</label>
            <div className="flex flex-wrap gap-2 mb-2">
                {selectedOptions.map((option, index) => (
                    <span key={index} className="bg-gray-700 text-white px-2 py-1 rounded-md flex items-center">
                        {option}
                        <button onClick={() => onRemove(option)} className="ml-2 text-red-500">x</button>
                    </span>
                ))}
            </div>
            <select 
                onChange={(e) => onChange(e.target.value)} 
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                defaultValue=""
            >
                <option value="" disabled>Selecciona un género</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
};

export default SelectField;