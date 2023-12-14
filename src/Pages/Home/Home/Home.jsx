import Candidates from "../Candidates/Candidates";
import ContactInfo from "../ContactInfo/ContactInfo";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeDetails from "../HomeDetails/HomeDetails";


const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Candidates></Candidates>
            <HomeDetails></HomeDetails>
            <ContactInfo></ContactInfo>
        </div>
    );
};

export default Home;