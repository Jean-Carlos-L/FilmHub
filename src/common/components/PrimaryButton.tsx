import { ReactNode } from "react";

interface Props {
   children: ReactNode;
   onClick?: () => void;
   className?: string;
   type: "submit" | "reset" | "button";
}

function PrimaryButton({ children, onClick, className, type = 'button' }: Props) {
   const handleClick = () => {
      if (onClick) {
         onClick();
      }
   };

   return (
      <button
         className={`p-3 bg-primary-dark rounded-md w-auto text-slate-100 font-semibold ${className}`}
         onClick={handleClick}
         type={type}
      >
         {children}
      </button>
   );
}

export default PrimaryButton;
