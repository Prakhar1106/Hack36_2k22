import {useRef} from "react"
import API from "../utils/Api";
import Popup from 'react-animated-popup'
import swal from "sweetalert";
import "../Styles/Signup.css"
const AdminSignup = ({admin, setAdmin}) => {
    
    const name = useRef(undefined);
    const email = useRef(undefined);
    const password = useRef(undefined);
    const designation = useRef(undefined);
    var gender = "";
    const handleGender = (e) => {
        gender = e.target.value;
    }
    const sendData = (e) => {
        const body = {
            name: name.current.value,
            email: email.current.value,
            password: password.current.value,
            gender: gender,
            designation: designation.current.value
        };
        const config = { headers: { "Content-Type": "application/json" } };
        API.post("/admin/signup", body, config)
            .then(response => {
                //setAdmin(true);
                //setUser(response.data);
                console.log("Admin Signup: ", response);
                swal("Whooo!", "Signup Successful", "success");
                setAdmin(false);
            }).catch(() => {
                setAdmin(false);
                swal("Whooo!", "Signup Successful", "success");
                console.log("Signup Error");
        });
    }
    
    return(
        <Popup visible={admin} onClose={() => setAdmin(false)}>
            <div id="form" class="sign-up-form">
            <h2 class="title">Admin Sign Up</h2>
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
            <div>
                <input type="radio" id="male" name="gender" onChange={handleGender} value="Male" />
                <label htmlFor="male">Male</label>
                <input type="radio" id="female" name="gender" onChange={handleGender} value="Female" />
                <label htmlFor="female">Female</label>
                <input type="radio" id="other" name="gender" onChange={handleGender} value="Other" />
                <label htmlFor="other">Other</label>
            </div>
            <div class="input-field">
            <i class="fas fa-user-police"></i>
                <input type='text' ref={designation} placeholder = "Designation" />
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

export default AdminSignup;