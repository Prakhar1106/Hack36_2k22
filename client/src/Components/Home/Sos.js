
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
<<<<<<< HEAD
        style={{
          backgroundColor: "#FF0000",
          // fontWeight: "700",
          color: "white",
          padding: '5px 10px',
          margin: '5px'
        }}
=======
       
>>>>>>> 178738064e54504225ad186ede992d01160b3ae4
        // class="btn solid"
        onClick={(e) => sendData(e)}
      >
        SOS
      </div>
    </>
  );
};
export default Sos;
