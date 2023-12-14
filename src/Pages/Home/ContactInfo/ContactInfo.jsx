import { MdCall, MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { useForm } from "react-hook-form";

const ContactInfo = () => {
    const { register, formState: { errors } } = useForm();
    return (
        <div className="text-center m-10 ">
            <div className="flex justify-between border-t-2 rounded-lg  p-5 mx-64 shadow-xl ...">
                <div className="flex flex-col justify-start items-start rounded-lg bg-teal-800 text-white p-10">
                    <p className="text-2xl mb-2">Contact Information</p>
                    <p className="text-sm text-slate-300 mb-10">Say something to start a live chat!</p>
                    <p className="flex items-center gap-2 text-sm text-slate-300 mb-6"><MdCall /> +1012 3456 789</p>
                    <p className="flex items-center gap-2 text-sm text-slate-300 mb-6"><MdEmail />demo@gmail.com</p>
                    <p className="flex items-center gap-2 text-sm text-slate-300 mb-16"><FaLocationDot />Gulshan-1, Dhaka</p>
                    <div className="flex gap-3">
                        <FaFacebook /> <FaInstagramSquare /> <FaTwitterSquare />
                    </div>
                </div>

                <form>
                    <div className="flex gap-8 mb-4">
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Your Name</span></label>
                            <input type="text" {...register("Name", {
                                required: "Name  Title is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.Name && <p className='text-red-500'>{errors.Name.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Email</span></label>
                            <input type="email" {...register("Email", {
                                required: "Email  Title is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.Email && <p className='text-red-500'>{errors.Email.message}</p>}
                        </div>
                        
                    </div>

                    <div className="flex gap-8 mb-4">
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Phone Number</span></label>
                            <input type="text" {...register("PhoneNumber", {
                                required: "PhoneNumber  Title is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.PhoneNumber && <p className='text-red-500'>{errors.PhoneNumber.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Subject</span></label>
                            <input type="text" {...register("Subject", {
                                required: "Subject  Title is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.Subject && <p className='text-red-500'>{errors.Subject.message}</p>}
                        </div>
                    </div>


                    <div className="flex gap-8">
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Roll</span></label>
                            <select
                                {...register('Roll')}
                                className="select input-bordered w-full max-w-xs">
                                {<option>Politician</option>}
                                {<option>Voter</option>}
                                {<option>Vote Worker</option>}
                                {<option>Others</option>}
                            </select>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Write a Message</span></label>
                            <input type="text" {...register("Message", {
                                required: "Message  Title is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.Message && <p className='text-red-500'>{errors.Message.message}</p>}
                        </div>
                    </div>
                    <input  className='btn btn-success text-white w-full mt-4' value="Send Message" type="submit" />
                </form>

            </div>
        </div>
    );
};

export default ContactInfo;