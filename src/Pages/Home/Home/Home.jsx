import Candidates from "../Candidates/Candidates";
import ContactInfo from "../ContactInfo/ContactInfo";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeDetails from "../HomeDetails/HomeDetails";
import SelectPlaceAndCountDown from "../SelectPlaceAndCountDown/SelectPlaceAndCountDown";



const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <SelectPlaceAndCountDown></SelectPlaceAndCountDown>
            <Candidates></Candidates>
            <HomeDetails></HomeDetails>
            <div data-aos="fade-up" data-aos-duration="3000">
                <ContactInfo></ContactInfo>
            </div>

        </div>
    );
};

export default Home;