import Login from "./login.js"
import "../Styles/Header.css"
const Header = ({setUser}) => {
    return(
        <div class="header">
            <div class="nav">
                <a href="">Home</a>
                <a href="">About Us</a>
                <a href="">Sign Up</a>
                <a href="">Contact Us</a>
                <Login setUser={setUser}/>
            </div>
            {/* <img src="crime.png" /> */}
        </div>
        
    );
}

export default Header