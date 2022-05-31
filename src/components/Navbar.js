import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];
  return (
    <nav>
      <h1>Math Magicians</h1>
      <ul className="navbar">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path} className={({ isActive }) => (isActive ? 'Active' : 'Unactive')}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Navbar;
