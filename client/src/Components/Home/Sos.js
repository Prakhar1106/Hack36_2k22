
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
      <div
       
        // class="btn solid"
        onClick={(e) => sendData(e)}
      >
        SOS
      </div>
    </>
  );
};
export default Sos;
