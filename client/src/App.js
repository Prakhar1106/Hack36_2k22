import './App.css';
import { useState, useEffect } from 'react';
import Header from "./Components/Header.js"
import Footer from "./Components/Footer.js"
import Signup from "./Components/Signup.js"
import Home from "./Components/Home.js"
const App = () => {
  const [user, setUser] = useState(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem('user')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <div>
      {(user !== null) ?
        (<Home user={user}/>):
      (<div><Header setUser={setUser} setVisible={setVisible}/> 
       <Signup visible={visible} setVisible={setVisible}/></div>)
      }
      <Footer />
    </div>
  );
}

export default App;
