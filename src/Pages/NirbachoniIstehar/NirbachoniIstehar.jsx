import { Link } from "react-router-dom";
import IsteharForm from '../../assets/IsteharForm/IsteharForm.pdf'


const NirbachoniIstehar = () => {
    return (
        <div className="mt-20">
            <div className="text-center text-lg">
                <Link className="btn btn-active btn-success text-white" to='/NirbachoniIsteharForm'>নির্বাচনী ইস্তেহার ফর্ম</Link>
                <p className="text-xs font-semibold mt-12">ভোটার হওয়ার যোগ্য নাগরিকদের তথ্য সংগ্রহের জন্য একটি নতুন ফরম তৈরি করা হয়েছে। প্রতিটি ফরমে নম্বরযুক্ত এবং প্রশাসনের ক্ষুদ্রতম ইউনিটের জিওকোড এর সাথে সামঞ্জস্যপূর্ণ।</p>
            </div>

            <div className="flex justify-center gap-5 mt-16">
                <Link className="btn btn-active btn-success text-white" to='/NirbachoniIsteharForm'>ফর্মটি পড়ুন</Link>
                <a className='btn  btn-active btn-error text-white' href={IsteharForm} download={IsteharForm.pdf}>ডাউনলোড করুন</a>
            </div>
        </div>
    );
};

export default NirbachoniIstehar;