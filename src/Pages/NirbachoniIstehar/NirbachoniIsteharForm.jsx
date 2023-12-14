import { Link } from 'react-router-dom';
import IsteharFormImg from '../../assets/IsteharForm/IsteharForm.png'

const NirbachoniIsteharForm = () => {
    return (
        <div>
            <div className='flex justify-center items-center'>
                <img src={IsteharFormImg} alt="" />
            </div>

            <div className='text-center mt-10'>
                <Link className="btn btn-active btn-error text-white" to='/NirbachoniIstehar'>আগের পেইজে ফিরে যান</Link>
            </div>

        </div>
    );
};

export default NirbachoniIsteharForm;