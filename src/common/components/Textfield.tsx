
function Textfield({ value, handleChange }) {
   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      handleChange(e.target.value);
   }

   return (
      <div className="relative mb-3">
         <label
            htmlFor="comment"
            className={`absolute left-4 top-2 ${value ? 'top-0.5 text-sm text-gray-500' : 'translate-y-2 text-base text-gray-300'} transition-all duration-300`}
         >
            Comentario
         </label>
         <input
            id="comment"
            type="text"
            className={`block w-full p-4 bg-blue-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
            value={value}
            onChange={onChange}
         />
      </div>
   );
}

export default Textfield;
