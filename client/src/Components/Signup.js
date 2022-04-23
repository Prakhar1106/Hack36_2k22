import {useRef} from "react"
import API from "../utils/Api";
import Popup from 'react-animated-popup'
import "../Styles/Signup.css"
const Signup = ({visible, setVisible}) => {
    
    const name = useRef(undefined);
    const email = useRef(undefined);
    const password = useRef(undefined);
    const dob = useRef(undefined);
    const emergency = useRef(undefined);
    var gender = "";
    const handleGender = (e) => {
        gender = e.target.value;
    }
    const sendData = (e) => {
        const body = {
            name: name.current.value,
            email: email.current.value,
            password: password.current.value,
            dob: dob.current.value,
            emergency_contact: emergency.current.value,
            gender: gender
        };
        const config = { headers: { "Content-Type": "application/json" } };
        API.post("/users/signup", body, config)
            .then(response => {
                
                //setUser(response.data);
                console.log("Signup: ", response);
                //})
            }).catch(() => {
                //swal("Sorry!", "Something went wrong from our side", "error");
                console.log("Signup Error");
            })
    }
    
    return(
        <Popup visible={visible} onClose={() => setVisible(false)}>
            <div id="form" class="sign-up-form">
            <h2 class="title">User Sign Up</h2>
            <div class="input-field">
            <i class="fas fa-envelope"></i>
            <input type="text" placeholder="Name" ref={name} required />
            </div>
            <div class="input-field">
            <i class="fas fa-envelope"></i>
            <input type="text" placeholder="Email" ref={email} required />
            </div>
            <div class="input-field">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder="Password" ref={password} required />
            </div>
            <div class="input-field">
            <i class="fas fa-lock"></i>
            <input type='date' max="2003-01-01" ref={dob} />
            </div>
            <div>
                <input type="radio" id="male" name="gender" onChange={handleGender} value="Male" />
                <label htmlFor="male">Male</label>
                <input type="radio" id="female" name="gender" onChange={handleGender} value="Female" />
                <label htmlFor="female">Female</label>
                <input type="radio" id="other" name="gender" onChange={handleGender} value="Other" />
                <label htmlFor="other">Other</label>
            </div>
            <div class="input-field">
                <i class="fa-light-emergency"></i>
                <input type='number' ref={emergency} placeholder = "Emergency Contact" />
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
            Sign Up
            </button>
        </div>
        </Popup>
        
    
    );
}

export default Signup;