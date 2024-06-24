import { Link } from 'react-router-dom';

import { NavLinkProps } from '../interfaces/NavLinkProps';

export const NavLinkMobile = ({ to, label }: NavLinkProps) => (
  <Link to={to} className="block px-4 py-2 text-white hover:bg-gray-700">
    {label}
  </Link>
);
