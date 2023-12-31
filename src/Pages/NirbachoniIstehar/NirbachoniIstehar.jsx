import { Link } from "react-router-dom";
import IsteharForm from '../../assets/IsteharForm/IsteharForm.pdf'
import IsteharFormImg from '../../assets/IsteharForm/IsteharForm.png'


const NirbachoniIstehar = () => {
    return (
        <div data-aos="zoom-in-up" className="mt-20">
            <div className="text-center text-lg">
                <Link className="btn btn-active btn-success text-white" to='/NirbachoniIsteharForm'>নির্বাচনী ইস্তেহার ফর্ম</Link>
                <p className="text-xs font-semibold mt-12">ভোটার হওয়ার যোগ্য নাগরিকদের তথ্য সংগ্রহের জন্য একটি নতুন ফরম তৈরি করা হয়েছে। প্রতিটি ফরমে নম্বরযুক্ত এবং প্রশাসনের ক্ষুদ্রতম ইউনিটের জিওকোড এর সাথে সামঞ্জস্যপূর্ণ।</p>
            </div>

            <div>
                {/* <Link className="btn btn-active btn-success text-white" to='/NirbachoniIsteharForm'>ফর্মটি পড়ুন</Link> */}
                {/* <NirbachoniIsteharForm></NirbachoniIsteharForm> */}
                <div className='flex justify-center items-center mt-10'>
                    <img className="border-4 border-green-300" src={IsteharFormImg} alt="" />
                </div>
                <div className='flex justify-center items-center mt-10'>
                    <a className='btn  btn-active btn-error text-white' href={IsteharForm} download={IsteharForm.pdf}>ডাউনলোড করুন</a>
                </div>
            </div>
        </div>
    );
};

export default NirbachoniIstehar;