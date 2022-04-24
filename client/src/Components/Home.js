import "../Styles/Home.css";
import { useEffect, useState } from "react";
import Api from "../utils/Api";
import SafeZone from "./Home/SafeZone";
import Fir from "./Home/Fir";
import Sos from "./Home/Sos";
import Report from "./Report";
const Home = ({ user, setUser }) => {
  const [FIR, setFIR] = useState(null)
  useEffect(() => {
    const config = { headers: { "Content-Type": "application/json" } };
     Api.post("/crime/crimesid", {id: user.user._id}, config)
         .then((response) => {
             console.log("FIR Data", response);
             setFIR(response.data.allcrimes);
         })
         .catch(() => {
             console.log("Error!!!");
         });
 
}, []);

const print = FIR?.map((item)=>{
       
  return (
      <Report item={item}/>
  )
})
  return (
    <><nav>
        <h3>Welcome, {user.user.name}</h3>
        
        <span onClick={() => setUser(null)}>Logout</span>

        <span style={{marginRight:"9px"}}><Sos user={user} /> </span>
        
      </nav>
    <div class="home">
      
      <div class="meter">
        <SafeZone user={user} />
      </div>
      <div class="fir">
        <Fir user={user}/>
      </div>
      <div class="fir">
        {print}
      </div>
   </div>
   </>
  );
};

export default Home;
