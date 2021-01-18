import React from 'react';
import './App.scss';
import Button from '@material-ui/core/Button';
import logo from './sita.png'

const App:React.FC = () => {
  return (
    <React.Fragment>
      <header className="header">
        <div className="header-inner">
          {/* eslint-disable-next-line */}
          <a>Tokuyama Shouta Portfolio</a>
          <nav>
            <ul>
              <li>About</li>
              <li>Skill</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div className="main-wrapper">
          <h2>Welcome to My Portfolio</h2>
          <Button variant="contained" color="secondary" className="button">
            Who's ME?
          </Button>
          <h3>Engineer Beginner</h3>
        </div>
        <div className="main-yajirusi">
          <img src={logo} alt="矢印"/>
        </div>
      </main>
      <footer></footer>
    </React.Fragment>
  );
}

export default App;
