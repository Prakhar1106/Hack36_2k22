import { useRef } from "react";
import API from "../../utils/Api.js";
import Popup from "react-animated-popup";
import "../../Styles/Signup.css";
const Fir = ({user}) => {
  const crime_type = useRef(undefined);
  const location = useRef(undefined);
  const description = useRef(undefined);
 
  const sendData = (e) => {
    const body = {
      _id: user.user._id,
      reported_by: user.user.name,
      crime_type: crime_type.current.value,
      location: location.current.value,
      description: description.current.value,
    };
    const config = { headers: { "Content-Type": "application/json" } };
    API.post("/addcrime", body, config)
      .then((response) => {
        
        console.log("crime Added ", response);
    
      })
      .catch(() => {
        //swal("Sorry!", "Something went wrong from our side", "error");
        console.log("error");
      });
  };

  return (
    // <Popup visible={visible} onClose={() => setVisible(false)}>
    <div id="form" class="sign-up-form">
      <h2 class="title">Report a Crime</h2>
      
      <div class="input-field">
        <i class="fas fa-envelope"></i>
        <input
          type="text"
          placeholder="Description"
          ref={description}
          required
        />
      </div>

      <div class="input-field">
        <i class="fas fa-envelope"></i>
        <input type="text" placeholder="Location" ref={location} required />
      </div>

      <div class="input-field">
        <i class="fas fa-envelope"></i>
        <input type="text" placeholder="Crime Type" ref={crime_type} required />
      </div>

      <button
        style={{
          backgroundColor: "#5995fd",
          fontWeight: "700",
          color: "white",
          marginLeft: '18%',
          borderRadius: "49px",
        }}
        class="btn solid"
        onClick={(e) => sendData(e)}
      >
        Report
      </button>
    </div>
    // </Popup>
  );
};

export default Fir;
