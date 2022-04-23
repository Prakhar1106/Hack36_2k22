import swal from 'sweetalert'
import ReactSpeedometer from 'react-d3-speedometer'
import "../../Styles/SafeZone.css"
import { useState } from 'react';
import Api from '../../utils/Api';
//import User from '../../../../api/models/User';
const SafeZone = ({user}) => {
    const [level, setLevel] = useState(0);
    var lat = "";
    var long = "";
    const getCoordinates = (position) => {
        lat = position.coords.latitude;
        long = position.coords.longitude;
        const body = {
            lat: position.coords.latitude,
            long: position.coords.longitude
        };
        var g = (user.user.gender === 'Male') ? 0 : (user.user.gender === 'Female') ? 1 : 0;
          const config = { headers: { "Content-Type": "application/json" } };
          Api.post("/predict_locality", body, config)
            .then((response) => {
              
              console.log("locality: ", response);
              const body = {
                locality_name: response.data.locality_name,
                gender: g
                };
              const config = { headers: { "Content-Type": "application/json" } };
              Api.post("/predict", body, config)
                .then((res) => {
                    setLevel(parseInt(parseFloat(res.data))*100)
                    console.log(parseInt(parseFloat(res.data)));
                })
                .catch(() => {
                    // swal('Intalid Credentials', '', 'error')
                    console.log("Invalid Credentials in predict!!");
                  });
            })
            .catch(() => {
              // swal('Invalid Credentials', '', 'error')
              console.log("Invalid Credentials!!");
            });
        
        console.log(lat, long);
    }

    const handleLocationError = (error) => {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                swal("Good job!", "User denied the request for Geolocation.", "error");
                break;
            case error.POSITION_UNAVAILABLE:
                swal("Good job!", "Location information is unavailable.", "error");
                break;
            case error.TIMEOUT:
                swal("Good job!", "The request to get user location timed out.", "error");
                break;
            case error.UNKNOWN_ERROR:
                swal("Good job!", "An unknown error occurred.", "error");
                break;
            default: swal("Good job!", "An unknown error occurred.", "error");
        }
    }

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getCoordinates, handleLocationError);
        } else {
            swal("Good job!", "Geolocation is not supported by this browser", "error");
        }
    }
    return(
        <div class="outer-div">
            
            <div>
            <ReactSpeedometer
                class="speed-meter"
                width={400}
                needleHeightRatio={0.7}
                value={level}
                currentValueText="Crime Level"
                customSegmentLabels={[
                    {
                        text: 'Very Good',
                        position: 'INSIDE',
                        color: '#555',
                    },
                    {
                        text: 'Good',
                        position: 'INSIDE',
                        color: '#555',
                    },
                    {
                        text: 'Ok',
                        position: 'INSIDE',
                        color: '#555',
                        fontSize: '19px',
                    },
                    {
                        text: 'Bad',
                        position: 'INSIDE',
                        color: '#555',
                    },
                    {
                        text: 'Very Bad',
                        position: 'INSIDE',
                        color: '#555',
                    },
                
                ]}
                ringWidth={47}
                needleTransitionDuration={3333}
                needleTransition="easeElastic"
                needleColor={'#90f2ff'}
                textColor={'#d8dee9'}
            />
            </div>
            <div>
                <button class="btn-refresh"
                onClick = {getLocation}>
                Click me</button>
                
            </div>
    
    </div>
    );
}

export default SafeZone