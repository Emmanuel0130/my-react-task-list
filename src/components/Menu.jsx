import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Tareas">Tareas</Link>
        </li>
        <li>
          <Link to="/SobreNosotros">Sobre Nosotros</Link>
        </li>
      </ul>
    </div>
    </nav>
  );
};

export default Menu;