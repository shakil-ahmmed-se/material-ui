import logo from './logo.svg';
import './App.css';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useState } from 'react';

function App() {

  const [likeColor, setLikeColor] = useState('');

  const handleLikeClick = () => {
      const color = likeColor ? '' : 'primary';
      setLikeColor(color);
  }

  return (
    <div className="App">
      <AccessAlarmIcon />
      <ThumbUpIcon onClick={handleLikeClick} color={likeColor} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
