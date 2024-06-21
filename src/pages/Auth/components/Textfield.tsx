export default function Textfield({ id, label, type, placeholder, error, defaultValue = "", onChange }: TextfieldProps) {
   return (
      <div className="mb-4">
         <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
            {label}
         </label>
         <input
            className="mb-2 p-2 border block w-full bg-blue-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            id={id}
            type={type}
            placeholder={placeholder}
            {...(![""].includes(defaultValue) && { value: defaultValue, onChange: onChange })}
         />
         {error && <p className="text-red-500 text-xs italic">{error}</p>}
      </div>
   )
}

interface TextfieldProps {
   id: string;
   label: string;
   type: string;
   placeholder: string;
   error: string;
   defaultValue?: string;
   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}