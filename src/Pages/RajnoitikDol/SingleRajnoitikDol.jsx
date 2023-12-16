/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import img from '../../assets/images/loginPageImg.png'
import './RajnoitikDol.css'

const SingleRajnoitikDol = ({ a }) => {
    const {id, name, logo, sign_name, registration_date } = a;

    return (
        <div className=''>
            <Link to={`/MainSingleRajnoitikDol/${id}`}>
                <div className='SingleRajnoitikDol-second-section font-semibold bg-green-50'>
                    <div>
                        <p>দলের নাম: <br /> <span className='text-green-600'>{name}</span></p>
                        <p>নিবন্ধন তারিখ: {registration_date}</p>
                        <p>প্রতীকের নাম: {sign_name}</p>
                    </div>
                    <div>
                        <img className='h-16 w-16 rounded-full' src={img} alt="" />
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default SingleRajnoitikDol;