import './App.css';
import { useState, useEffect } from 'react';
import Header from "./Components/Header.js"
import Signup from "./Components/Signup.js"
import Home from "./Components/Home.js"
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem("user")));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <div>
      {(user !== null) ?
        (<Home user={user}/>):
      (<div><Header setUser={setUser}/> 
       <Signup /></div>)
      }
    </div>
  );
}

export default App;
