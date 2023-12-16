import { Link } from "react-router-dom";
import loginPageimg from '../../assets/images/loginPageImg.png'
import { RiWhatsappFill } from "react-icons/ri";
import { IoIosMail } from "react-icons/io";

const Login = () => {

    return (
        <div data-aos="zoom-in-up">
            <div className="flex justify-center gap-12 items-center">
                {/*  */}
                <div className='flex justify-center py-6 hidden lg:block'>
                    <button className="" onClick={() => document.getElementById('my_modal_1').showModal()}><img className="h-60 w-70 rounded-lg" src={loginPageimg} alt="" /></button>
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <div className="modal-action">
                                <form method="dialog">
                                    <button >❌</button>
                                </form>
                            </div>

                            <div>
                                <p className='text-center mb-5 font-bold text-green-700 text-lg'>যোগাযোগ করুণ</p>
                                <div className='flex justify-center gap-8'>
                                    <p className="flex gap-1 items-center"><RiWhatsappFill />01711-123321</p>
                                    <p className="flex gap-1 items-center"><IoIosMail />contact@voteden.com</p>
                                </div>
                            </div>
                        </div>
                    </dialog>
                </div>
                {/*  */}

                <div>
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card w-96 max-w-sm shadow-2xl bg-base-100">
                            <form  className="card-body">
                                <div className="form-control">
                                    <input type="email" name="email" placeholder="ইমেইল" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <input type="password" name="password" placeholder="পাসওয়ার্ড" className="input input-bordered" />
                                </div>
                                <input className="btn btn-success text-white" type="submit" value="লগ-ইন" />
                                <p><small>New Here? <Link to='/Register'><span className='text-blue-700 font-bold'>Create an account</span></Link></small></p>
                            </form>
                        </div>
                    </div>
                </div>

                {/*  */}
                <div className='flex justify-center py-6 hidden lg:block'>
                    <button className="" onClick={() => document.getElementById('my_modal_1').showModal()}><img className="h-60 w-70 rounded-lg" src={loginPageimg} alt="" /></button>
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <div className="modal-action">
                                <form method="dialog">
                                    <button >❌</button>
                                </form>
                            </div>

                            <div>
                                <p className='text-center mb-5 font-bold text-green-700 text-lg'>যোগাযোগ করুণ</p>
                                <div className='flex justify-center gap-8'>
                                    <p className="flex gap-1 items-center"><RiWhatsappFill />01711-123321</p>
                                    <p className="flex gap-1 items-center"><IoIosMail />contact@voteden.com</p>
                                </div>
                            </div>
                        </div>
                    </dialog>
                </div>
                {/*  */}

            </div>

            <div className='flex justify-center py-6 bg-green-800 mt-16'>
                <button className="" onClick={() => document.getElementById('my_modal_1').showModal()}><p className="text-xl text-white bg-green-800">“আপনার এলাকায় নির্বাচনী প্রচারণার বিজ্ঞাপন দিতে ক্লিক করুন”</p></button>
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <div className="modal-action">
                            <form method="dialog">
                                <button >❌</button>
                            </form>
                        </div>

                        <div>
                            <p className='text-center mb-5 font-bold text-green-700 text-lg'>যোগাযোগ করুণ</p>
                            <div className='flex justify-center gap-8'>
                                <p className="flex gap-1 items-center"><RiWhatsappFill />01711-123321</p>
                                <p className="flex gap-1 items-center"><IoIosMail />contact@voteden.com</p>
                            </div>
                        </div>
                    </div>
                </dialog>
            </div>

        </div>
    );
};

export default Login;