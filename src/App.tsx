import React from 'react';
import './App.scss';
import Button from '@material-ui/core/Button';

const App:React.FC = () => {
  return (
    <React.Fragment>
      <header className="header">
        <div className="header-inner">
          <h1>Tokuyama Shouta<br/>Portfolio</h1>
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
          <Button variant="contained" color="primary" className="button">
            Who's ME?
          </Button>
        </div>
      </main>
      <footer></footer>
    </React.Fragment>
  );
}

export default App;
