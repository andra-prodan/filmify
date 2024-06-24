import { Link } from 'react-router-dom';

import { NavLinkProps } from '../interfaces/NavLinkProps';

export const NavLink = ({ to, label }: NavLinkProps) => (
  <Link to={to} className="text-white hover:text-gray-200 transition duration-300">
    {label}
  </Link>
);
