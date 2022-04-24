import { useEffect, useState } from "react";
import "../Styles/Admin.css"
import Api from "../utils/Api";
import Report from "./Report";
import Map from './Map';
const HomeAdmin = ({ user, setUser }) => {
    const [crimeType, setCrimeType] = useState("");
    const [crimeTime, setCrimeTime] = useState("");
    const [allcrimes, setAllCrimes] = useState(null);
    var locality = "";
    useEffect(() => {
           const config = { headers: { "Content-Type": "application/json" } };
            Api.post("/crime/listcrimes", {}, config)
                .then((response) => {
                    console.log("Crime Data", response);
                    setAllCrimes(response.data.allcrimes);
                })
                .catch(() => {
                    console.log("Error!!!");
                });
        
    }, []);
    
    const handleLocality = (e) => {
        locality = e.target.value;
        console.log(locality);
        if (locality === "Katra") {
            setCrimeType("images/Katra_Crime_Type.png");
            setCrimeTime("images/Katra_Crime_Time.png");
        }
        if (locality === "Civil Lines") {
            setCrimeType("images/Civil_Lines_Crime_Type.png");
            setCrimeTime("images/Civil_Lines_Crime_Time.png");
        }
        if (locality === "Sangam") {
            setCrimeType("images/Sangam_Crime_Type.png");
            setCrimeTime("images/Sangam_Crime_Time.png");
        }
        if (locality === "Teliarganj") {
            setCrimeType("images/Teliarganj_Crime_Type.png");
            setCrimeTime("images/Teliarganj_Crime_Time.png");
        }
        if (locality === "Bank Road") {
            setCrimeType("images/Bank_Road_Crime_Type.png");
            setCrimeTime("images/Bank_Road_Crime_Time.png");
        }

    }
    const print = allcrimes?.map((item)=>{
       
        return (
            <Report item={item}/>
        )
    })

    return(
        <>
            <nav>
                <h2>{user.admin.name}</h2>
                <span onClick={(e) => setUser(null)}>Logout</span>
            </nav>
            <div class="dashboard">

                <div class="summary">
                    <h1>Select Region</h1>
                    <div class="localitydata">
                        <span>
                            <input type="radio" id="katra" name="locality" value="Katra" onChange={handleLocality} />
                            <label htmlFor="katra">Katra</label>
                        </span>
                        <span>
                            <input type="radio" name="locality" id="civil" value="Civil Lines" onChange={handleLocality} />
                            <label htmlFor="civil">Civil Lines</label>
                        </span>

                        <input type="radio" name="locality" id="sangam" value="Sangam" onChange={handleLocality} />
                        <label htmlFor="sangam">Sangam</label>
                        <input type="radio" name="locality" id="teliarganj" value="Teliarganj" onChange={handleLocality} />
                        <label htmlFor="teliarganj">Teliarganj</label>
                        <input type="radio" name="locality" id="bank" value="Bank Road" onChange={handleLocality} />
                        <label htmlFor="bank">Bank Road</label>
                    </div>
                    <div class="chart">
                        <img src={crimeType} />
                        <img src={crimeTime} />
                    </div>
                </div>
                <div class="reports">
                    <h1>FIRs</h1>
                    <div>
                        {print}
                        {/* <button class="btn" onClick={(e) => checkCrime(e)}>click to get</button> */}
                    </div>
                </div>
        </div>
        <div style={{width:'60%'}}>
        <h1>Crime Hotspots</h1>
                    <Map />
                </div>
            </>

        );
};

export default HomeAdmin;
