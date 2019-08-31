import React, {useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [username, setUsername] = useState("")
  const [following, setFollowing] = useState("")

  const changeHandler = event => {
    setUsername(event.target.value)
    console.log(username)
  }

  const submitHandler = event => {
    event.preventDefault()
  }

  const findFollowing = event => {
    event.preventDefault()
    console.log(username)
    axios.get(`https://api.twitter.com/1.1/followers/ids.json?screen_name=${username}`)
      .then(res => setFollowing(res))
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <form onSubmit={findFollowing}>
        <input name="username" value={username} placeholder = "username" onChange={changeHandler}></input>
        <button>Find Following</button>
      </form>
      <div>
        {following}
      </div>
    </div>
  );
}

export default App;
