import "../Styles/Header.css"

var locaity = "";
    const handleLocality = (e) => {
        locality = e.target.value;
    }

const Home = ({user}) => {
    return(
        <div>
            {user.user.name}
        </div>
        
    );
}

const LocalityData = ({user}) => {
    return(
        <>
        <div class="localitydata">
            <input type="radio" name="locality" value="Katra" onChange={handleLocality} />  Katra <br />
            <input type="radio" name="locality" value="Civil Lines" onChange={handleLocality} />  Civil Lines <br />
            <input type="radio" name="locality" value="Sangam" onChange={handleLocality} /> Sangam <br />
            <input type="radio" name="locality" value="Teliarganj" onChange={handleLocality} /> Teliarganj <br />
            <input type="radio" name="locality" value="Bank Road"  onChange={handleLocality} /> Bank Road <br />
        </div>
      
        </>
        
    );
}
​
export default Home