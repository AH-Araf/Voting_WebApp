/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const SingleNirbachoniSongbad = ({a}) => {
    const {title,description,link,source,image,id} = a;
    return (
        <div>
            <p>{title}</p>
            <p>{id}</p>
            <Link to={`/MainSingleNews/${id}`}><button className='btn btn-outline mt-5'>Details</button></Link>
        </div>
    );
};

export default SingleNirbachoniSongbad;