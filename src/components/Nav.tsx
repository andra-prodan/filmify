import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';
import { useAppDispatch } from '../store';
import { logout } from '../store/actions/authActions';
import { NavLink } from './NavLink';
import { NavLinkMobile } from './NavLinkMobile';

export const Nav = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const isAuthenticated = useAuth();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    await dispatch(logout());
    navigate(0);
  };

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-wider cursor-pointer" onClick={() => navigate('/')}>
          Filmify
        </h1>
        <div className="flex items-center">
          <nav className="hidden md:flex space-x-4">
            <NavLink to="/" label="Top 20" />
            <NavLink to="/chart" label="Pie Chart" />
            {isAuthenticated ? (
              <>
                <NavLink to="/favorites" label="Favorites" />
                <button className="text-white hover:text-gray-200 transition duration-300" onClick={handleLogout}>
                  Log out
                </button>
              </>
            ) : (
              <NavLink to="/login" label="Log in" />
            )}
          </nav>
          <div className="md:hidden ml-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800 py-2">
          <div className="flex flex-col items-end space-y-2">
            <NavLinkMobile to="/" label="Top 20" />
            <NavLinkMobile to="/chart" label="Pie Chart" />
            {isAuthenticated ? (
              <>
                <NavLinkMobile to="/favorites" label="Favorites" />
                <button className="block px-4 py-2 text-white hover:bg-gray-700" onClick={handleLogout}>
                  Log out
                </button>
              </>
            ) : (
              <NavLinkMobile to="/login" label="Log in" />
            )}
          </div>
        </div>
      )}
    </header>
  );
};
