import "../Styles/Home.css";
import SafeZone from "./Home/SafeZone";
import Fir from "./Home/Fir";
import Sos from "./Home/Sos";
const Home = ({ user }) => {
  return (
    <><nav>
        <h3>Welcome, {user.user.name}</h3>
        
        <span>Logout</span>

        <span style={{marginRight:"9px"}}><Sos user={user} /> </span>
        
      </nav>
    <div class="home">
      
      <div class="meter">
        <SafeZone user={user} />
      </div>
      <div class="fir">
        <Fir />
      </div>
   </div>
   </>
  );
};

export default Home;
