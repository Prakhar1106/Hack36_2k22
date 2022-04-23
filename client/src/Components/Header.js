import Login from "./login.js"
import "../Styles/Header.css"
const Header = ({setUser, setVisible, setAdmin, setStatus}) => {
    
    return(
        <div id="home" class="header">
            <div class="nav">
                
                <img src="logo.png" width="15%" height="25%" />
                
                <a href="#home">Home</a>
                <a href="#about">About Us</a>
                <a href="#" onClick = {(e) => setVisible(true)}>User Sign Up</a>
                <a href="#" onClick = {(e) => setAdmin(true)}>Admin Sign Up</a>
                <a href="">Contact Us</a>
                <Login setUser={setUser} setStatus={setStatus}/>
            </div>
            <div class="down-header">
                <div class="tag">
                    
                    <h2>Are You Travelling to a </h2>
                    <h2 style={{color: "red"}}>Safe Zone?</h2>
                </div>
                <div class="display-img">
                    <img src="crime.png" width="110%" height="100%"/>
                </div>
            </div>
            <div id="about" class="about">
                <div class="about-img" style={{alignContent: 'center'}}>
                    <img src="about.png" width="70%" height="50%"/>
                </div>
                <div class="about-content">
                    <h1>About</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). </p>
                </div>
            </div>
            
        </div>
        
    );
}

export default Header