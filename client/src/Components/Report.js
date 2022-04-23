import '../Styles/Report.css'
const Report = ({item}) => {
    return(
        <div 
        class="card">
              <h3>{item?.location}</h3>
            <h5>{item?.crime_type}</h5>
            {/* <h4>{item?.description}</h4> */}
          
            {/* <h4>{item?.reported_by}</h4> */}
            <h5>{item?.status}</h5>
        </div>
    );
}

export default Report