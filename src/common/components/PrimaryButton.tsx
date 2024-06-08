import { ReactNode } from "react";

interface Props {
   children: ReactNode | string;
   onClick?: () => void;
   className?: string;
   type?: "submit" | "reset" | "button";
   size?: "small" | "medium" | "large";
}

function PrimaryButton({ children, onClick, className, type = 'button', size = 'medium' }: Props) {
   const handleClick = () => {
      if (onClick) {
         onClick();
      }
   };

   const setSize = () => {
      switch (size) {
         case 'small':
            return 'p-1 px-2';
         case 'medium':
            return 'p-3';
         case 'large':
            return 'p-4';
         default:
            return 'p-3';
      }
   }

   return (
      <button
         className={`bg-primary-dark rounded-md text-slate-100 font-semibold ${className} ${setSize()} w-auto`}
         onClick={handleClick}
         type={type}
      >
         {children}
      </button>
   );
}

export default PrimaryButton;
