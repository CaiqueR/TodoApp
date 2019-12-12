import React from 'react';

// import { Container } from './styles';

const Menu = (props) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded">
    <div className="container">
      <a className="navbar-brand" href="/todos">
        <i className="fa fa-calendar-check-o mr-2" />
TodoApp
      </a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/todos">
              Tarefas
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              Sobre
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Menu;
