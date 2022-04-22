import {useRef} from "react"
import "../Styles/Login.css"
const Login = () => {
    const email = useRef(undefined);
    const password = useRef(undefined);
    const sendData = (e) => {
        // if (email.current.value === "") console.log("yes");
        // const body = {
        // email: email.current.value.trim(),
        // password: password.current.value,
    };
    return(
    
        <div id="form" class="log-in-form">
        <div class="input-field">
          <i class="fas fa-envelope"></i>
          <input type="text" placeholder="Email" ref={email} required />
        </div>
        <div class="input-field">
          <i class="fas fa-lock"></i>
          <input type="password" placeholder="Password" ref={password} required />
        </div>
        <button
          style={{
            backgroundColor: "#5995fd",
            fontWeight: "700",
            color: "white",
            borderRadius: "49px",
          }}
          class="btn solid"
          onClick={(e) => sendData(e)}
        >
          Login
        </button>
    </div>
    
    );
}

export default Login;