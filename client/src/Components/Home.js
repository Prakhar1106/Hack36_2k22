import "../Styles/Header.css"
const Home = ({user}) => {
    return(
        <div>
            {user.user.name}
        </div>
        
    );
}

export default Home