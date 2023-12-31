import { useForm } from 'react-hook-form';
import './LoginRegister.css'
import { Link } from "react-router-dom";


const Register = () => {

    const { register,  formState: { errors } } = useForm();

    


    return (
        <div className='bg-img pb-20' data-aos="zoom-in-up">
            <div className="flex flex-col items-center">
                <p className="mt-16 mb-5 text-xl font-bold">রেজিষ্ট্রেশন করুন</p>
                <form>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">নাম</span>
                        </label>
                        <input type="text"  {...register("name", { required: true })} name="name" placeholder="নাম লিখুন" className="input input-bordered" />
                        {errors.name && <span className="text-red-600">Name is required</span>}
                    </div>

                    <div className="email-phone-pass-section gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">ইমেইল</span>
                            </label>
                            <input type="email"  {...register("email", { required: true })} name="email" placeholder="xyz@gmail.com" className="input input-bordered" />
                            {errors.email && <span className="text-red-600">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">মোবাইল নাম্বার</span>
                            </label>
                            <input type="text"  {...register("mobile", { required: true })} name="mobile" placeholder="013xx-xxxxxx" className="input input-bordered" />
                            {errors.mobile && <span className="text-red-600">Name is required</span>}
                        </div>
                    </div>
                    <div className="flex gap-5 email-phone-pass-section">
                        {/*  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">পাসওয়ার্ড</span>
                            </label>
                            <input type="password"  {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })} placeholder="******" className="input input-bordered" />
                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                        </div>
                        {/*  */}

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">পুনরায় লিখুন</span>
                            </label>
                            <input type="password"  {...register("RePassword", { required: true })} name="RePassword" placeholder="******" className="input input-bordered" />
                            {errors.RePassword && <span className="text-red-600">Name is required</span>}
                        </div>
                    </div>

                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">জাতীয় পরিচয়পত্র নাম্বার</span>
                            </label>
                            <input type="text"  {...register("NID", { required: true })} name="NID" placeholder="xxxx xxx xxx xxx" className="input input-bordered" />
                            {errors.NID && <span className="text-red-600">Name is required</span>}
                        </div>
                    <input className="btn btn-success text-white mt-5" type="submit" value="রেজিষ্ট্রেশন করুন" />
                    <p><small>Already have an account? <Link to='/Login'><span className='text-blue-700 font-bold'>Login Now</span></Link></small></p>
                </form>
            </div>
        </div>
    );
};

export default Register;
