import Login from "./login.js"
import "../Styles/Header.css"
const Header = () => {
    return(
        <div class="nav">
            <a href="">Home</a>
            <a href="">About Us</a>
            <a href="">Sign Up</a>
            <a href="">Contact Us</a>
            <Login />
        </div>
    );
}

export default Header