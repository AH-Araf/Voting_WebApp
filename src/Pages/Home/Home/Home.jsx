import Candidates from "../Candidates/Candidates";
import ContactInfo from "../ContactInfo/ContactInfo";
// import Countdown from "../Countdown/Countdown";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeDetails from "../HomeDetails/HomeDetails";


const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            {/* <Countdown></Countdown> */}
            <Candidates></Candidates>
            <HomeDetails></HomeDetails>
            <div data-aos="fade-up" data-aos-duration="3000">
                <ContactInfo></ContactInfo>
            </div>

        </div>
    );
};

export default Home;