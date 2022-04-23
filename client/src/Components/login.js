import {useRef} from "react"
import API from "../utils/Api";
import "../Styles/Login.css"
import swal from "sweetalert";
const Login = ({setUser, setStatus}) => {
    const email = useRef(undefined);
    const password = useRef(undefined);
    const sendData = (e) => {
      swal("Are you Admin?", {
        buttons: ["No", "Yes"],
      })
      .then((val) => {
        console.log(val);
        if(val){
          setStatus(true);
          const body = {
            email: email.current.value.trim(),
            password: password.current.value,
          };
          const config = { headers: { "Content-Type": "application/json" } };
          API.post("/admin/login", body, config)
            .then((response) => {
              setUser(response.data);
              console.log("Login success", response);
            })
            .catch(() => {
              // swal('Invalid Credentials', '', 'error')
              console.log("Invalid Credentials!!");
            });
        }
        else{
          setStatus(false);
          const body = {
            email: email.current.value.trim(),
            password: password.current.value,
          };
          const config = { headers: { "Content-Type": "application/json" } };
          API.post("/users/login", body, config)
            .then((response) => {
              setUser(response.data);
              console.log("Login success", response);
            })
            .catch(() => {
              // swal('Invalid Credentials', '', 'error')
              console.log("Invalid Credentials!!");
            });
        }
      });
      
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