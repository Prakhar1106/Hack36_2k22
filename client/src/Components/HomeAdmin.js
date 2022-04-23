import { useState } from "react";
import "../Styles/Header.css"

const HomeAdmin = ({user}) => {
    const [crimeType, setCrimeType] = useState("");
    const [crimeTime, setCrimeTime] = useState("");
    var locality = "";
    
    const handleLocality = (e) => {
        locality = e.target.value;
        console.log(locality);
        if(locality === "Katra"){
            setCrimeType("images/Katra_Crime_Type.png");
            setCrimeTime("images/Katra_Crime_Time.png");
        }
        if(locality === "Civil Lines"){
            setCrimeType("images/Civil_Lines_Crime_Type.png");
            setCrimeTime("images/Civil_Lines_Crime_Time.png");
        }
        if(locality === "Sangam"){
            setCrimeType("images/Sangam_Crime_Type.png");
            setCrimeTime("images/Sangam_Crime_Time.png");
        }
        if(locality === "Teliarganj"){
            setCrimeType("images/Teliarganj_Crime_Type.png");
            setCrimeTime("images/Teliarganj_Crime_Time.png");
        }
        if(locality === "Bank Road"){
            setCrimeType("images/Bank_Road_Crime_Type.png");
            setCrimeTime("images/Bank_Road_Crime_Time.png");
        }

    }
    return(
        <>
        <div class="localitydata">
            <input type="radio" name="locality" value="Katra" onChange={handleLocality} />  Katra <br />
            <input type="radio" name="locality" value="Civil Lines" onChange={handleLocality} />  Civil Lines <br />
            <input type="radio" name="locality" value="Sangam" onChange={handleLocality} /> Sangam <br />
            <input type="radio" name="locality" value="Teliarganj" onChange={handleLocality} /> Teliarganj <br />
            <input type="radio" name="locality" value="Bank Road"  onChange={handleLocality} /> Bank Road <br />
        </div>
<<<<<<< HEAD
      
||||||| 7e96d8b
        if(locaity=="Katra"){
            <img

        }
=======
        <div>
            <img src={crimeType} />
            <img src={crimeTime} />
        </div>
>>>>>>> e56d9e0b601c51c5a2c6c2d54f7a83bf6c845f06
        </>
        
    );
}
export default HomeAdmin