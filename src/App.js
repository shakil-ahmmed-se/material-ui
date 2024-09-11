import logo from './logo.svg';
import './App.css';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useEffect, useState } from 'react';
import ActionAreaCard from './components/Card/ActionAreaCard';

function App() {

  const [likeColor, setLikeColor] = useState('');
  const [users, setUsers] = useState([]);
  const [singleUsers, setSingleUsers] = useState({});
  const [randomUser , setRandomUser] = useState([])

  useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => response.json())
     .then(data => setUsers(data))

     //single user
      fetch('https://jsonplaceholder.typicode.com/users/1')
     .then(response => response.json())
     .then(data => setSingleUsers(data))

     // random user api
      fetch('https://randomuser.me/api/')
     .then(response => response.json())
     .then(data => setRandomUser(data.results))

 
  },[])

  const handleLikeClick = () => {
      const color = likeColor ? '' : 'primary';
      setLikeColor(color);
  }


  return (
    <div>
      {
        randomUser.map(users => <ActionAreaCard users={users}></ActionAreaCard>)
      }
      <AccessAlarmIcon />
      <ThumbUpIcon onClick={handleLikeClick} color={likeColor} />
      <div>
        <h1>
          {
            singleUsers? 
              `Welcome, ${singleUsers.name}! Your email is ${singleUsers.email}.`
              : 'Loading...'  // display loading message while waiting for data from API.
          }
        </h1>
        <br />
        {
          users.map((user) => (
            <div key={user.id}>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
          ))
        }
      </div>


    </div>
  );
}

export default App;
