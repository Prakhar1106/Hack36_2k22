import "../Styles/Home.css";
import SafeZone from "./Home/SafeZone";
import Fir from "./Home/Fir";
const Home = ({ user }) => {
  return (
    <div>
      <h3>Welcome, {user.user.name}</h3>

      <SafeZone user={user} />
      <Fir />
    </div>
  );
};

export default Home;
