import { ReactNode } from "react";

interface Props {
   children: ReactNode;
   onClick?: () => void;
}

function PrimaryButton({ children, onClick }: Props) {
   const handleClick = () => {
      if (onClick) {
         onClick();
      }
   }

   return (
      <button className="p-3 bg-primary-dark rounded-md w-auto text-slate-100 font-semibold" onClick={handleClick}>{children}</button>
   );
}

export default PrimaryButton;