import { Genre } from "@models/Genre.model";
import React from "react";

interface SelectFieldProps {
    label: string;
    options: Genre[];
    selectedOptions: Genre[];
    onChange: (option: number) => void;
    onRemove: (option: number) => void;
}

const SelectField: React.FC<SelectFieldProps> = ({
    label,
    options,
    selectedOptions,
    onChange,
    onRemove,
}) => {
    return (
        <div className="mb-4">
            <label className="block text-white mb-2">{label}</label>
            <div className="flex flex-wrap gap-2 mb-2">
                {selectedOptions.map((option, index) => (
                    <span
                        key={index}
                        className="bg-gray-700 text-white px-2 py-1 rounded-md flex items-center"
                    >
                        {option.name}
                        <button
                            onClick={() => onRemove(option.id)}
                            className="ml-2 text-red-500"
                        >
                            x
                        </button>
                    </span>
                ))}
            </div>
            <select
                onChange={(e) => onChange(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                defaultValue=""
            >
                <option value="" disabled>
                    Selecciona un género
                </option>
                {options.map((option) => (
                    <option key={option.id} value={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectField;
