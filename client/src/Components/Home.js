import "../Styles/Home.css";
import SafeZone from "./Home/SafeZone";
import Fir from "./Home/Fir";
import Sos from "./Home/Sos";
const Home = ({ user }) => {
  return (
    <div>
      <h3>Welcome, {user.user.name}</h3>

      <SafeZone user={user} />
      <Fir user={user}/>
      <Sos user={user} />
    </div>
  );
};

export default Home;
