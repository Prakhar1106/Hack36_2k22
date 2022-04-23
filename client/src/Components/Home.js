import "../Styles/Home.css"
import SafeZone from "./Home/SafeZone"
const Home = ({user}) => {
    return(
        <div>
            <h3>Welcome, {user.user.name}</h3>

            <SafeZone user={user}/>
        </div>
        
    );
}

export default Home