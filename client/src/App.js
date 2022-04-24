import './App.css';
import { useState, useEffect } from 'react';
import Header from "./Components/Header.js"
import Footer from "./Components/Footer.js"
import Signup from "./Components/Signup.js"
import AdminSignup from "./Components/AdminSignup.js"
import Home from "./Components/Home.js"
import HomeAdmin from "./Components/HomeAdmin.js"
const App = () => {
  const [user, setUser] = useState(null);
  const [visible, setVisible] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [status, setStatus] = useState(false);
  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem('user')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <div>
      {(user !== null) ? ((status) ? <HomeAdmin user={user} setUser={setUser}/> :
        <Home user={user} setUser={setUser}/>):
      (<div>
          <Header setUser={setUser} setVisible={setVisible} setAdmin={setAdmin} setStatus={setStatus}/> 
          <Signup visible={visible} setVisible={setVisible}/>
          <AdminSignup admin={admin} setAdmin={setAdmin} />
      </div>)
      }
      <Footer />
    </div>
  );
}

export default App;
