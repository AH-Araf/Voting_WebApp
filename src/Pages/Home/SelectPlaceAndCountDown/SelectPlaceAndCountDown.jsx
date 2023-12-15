import Countdown from "../Countdown/Countdown";
import dateImg from '../../../assets/images/date.png'
import SelectPlace from "../SelectPlace/SelectPlace";
import './SelectPlaceAndCountDown.css'


const SelectPlaceAndCountDown = () => {
    

    return (
        <div className="SelectPlaceAndCountDown-section  bg-green-50">
            <div>
                <SelectPlace></SelectPlace>
            </div>
            <div className='flex gap-4 countdown-section'>
                <img className='h-18 w-24' src={dateImg} alt="" />
                <Countdown></Countdown>
            </div>
        </div>
    );
};

export default SelectPlaceAndCountDown;