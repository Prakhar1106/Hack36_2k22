import {useRef} from "react"
import "../Styles/Signup.css"
const Signup = () => {
    const name = useRef(undefined);
    const email = useRef(undefined);
    const password = useRef(undefined);
    const dob = useRef(undefined);
    const emergency = useRef(undefined);
    const sendData = (e) => {
        // if (email.current.value === "") console.log("yes");
        // const body = {
        // email: email.current.value.trim(),
        // password: password.current.value,
    };
    var gender = "";
    const handleGender = (e) => {
        gender = e.target.value;
    }
    return(
    
        <div id="form" class="sign-up-form">
        <h2 class="title">Sign Up</h2>
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
            <i class="fas fa-lock"></i>
            <input type='number' ref={emergency} />
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

export default Signup;