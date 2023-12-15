/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import img1 from '../../assets/images/loginPageImg.png'
import './NirbachoniSongbad.css'


const SingleNirbachoniSongbad = ({ a }) => {
    // eslint-disable-next-line no-unused-vars
    const { title, description, image, id } = a;
    const shortDescription = description.slice(0, 40);
    return (
        <Link to={`/MainSingleNews/${id}`}>
            <div className="NirbachoniSongbad-main-section">
                <div className="NirbachoniSongbad-section">
                    <div>
                        <img className="NirbachoniSongbad-section-img" src={img1} alt='' />
                    </div>
                    <div className="NirbachoniSongbad-section-details">
                        <p><b>Title: {title}</b></p>
                        <p className="mt-8"><b>Description:</b> {shortDescription}... <span className="text-xs font-semibold text-blue-800">আরও পড়ুন</span></p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default SingleNirbachoniSongbad;