import { Link } from "react-router-dom";

import type { ButtonLinkProps } from "../types/commonTypes";

const ButtonLink: React.FC<ButtonLinkProps> = ({ to, onClick, className, children }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`px-6 py-3 text-lg bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 ${className}`}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
