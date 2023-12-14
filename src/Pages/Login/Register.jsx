import './LoginRegister.css'
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className='bg-img pb-20'>
            <div className="flex flex-col items-center">
                <p className="mt-16 mb-5 text-xl font-bold">রেজিষ্ট্রেশন করুন</p>
                <form>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">নাম</span>
                        </label>
                        <input type="text" name="Name" placeholder="নাম লিখুন" className="input input-bordered" />
                    </div>

                    <div className="flex gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">ইমেইল</span>
                            </label>
                            <input type="email" name="Email" placeholder="xyz@gmail.com" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">মোবাইল নাম্বার</span>
                            </label>
                            <input type="text" name="PhoneNo" placeholder="013xx-xxxxxx" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">পাসওয়ার্ড</span>
                            </label>
                            <input type="text" name="Password" placeholder="******" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">পুনরায় লিখুন</span>
                            </label>
                            <input type="text" name="RePassword" placeholder="******" className="input input-bordered" />
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">জাতীয় পরিচয়পত্র নাম্বার</span>
                        </label>
                        <input type="text" name="NID" placeholder="xxxx xxx xxx xxx" className="input input-bordered" />
                    </div>
                    <input className="btn btn-success text-white mt-5" type="submit" value="রেজিষ্ট্রেশন করুন" />
                    <p><small>Already have an account? <Link to='/Login'><span className='text-blue-700 font-bold'>Login Now</span></Link></small></p>
                </form>
            </div>
        </div>
    );
};

export default Register;
