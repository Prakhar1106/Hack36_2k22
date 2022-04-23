import { useRef } from "react";
// import { response } from "../../../../api/app";
import API from "../../utils/Api";

const Sos = ({ user }) => {
  const sendData = (e) => {
    const config = { headers: { "Content-Type": "application/json" } };
    const body = {
      number: user.user.emergency_contact,
    };
    API.post("/sendMessage", body, config)
      .then((response) => {
        console.log("abcd");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
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
        SOS
      </button>
    </>
  );
};
export default Sos;
