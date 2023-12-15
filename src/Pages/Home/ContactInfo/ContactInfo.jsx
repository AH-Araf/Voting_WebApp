// import { MdCall, MdEmail } from "react-icons/md";
// import { FaLocationDot } from "react-icons/fa6";
// import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { useForm } from "react-hook-form";
import './ContactInfo.css'

const ContactInfo = () => {
    const { register, formState: { errors } } = useForm();
    return (
        <div className="text-center">

            <div className="home-contact-section border-t-2 shadow-xl ...">

                <form>
                    <p className="mb-5 text-2xl font-bold">Contact Us</p>
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
                    <input className='btn btn-success text-white w-full mt-4' value="Send Message" type="submit" />
                </form>

            </div>
        </div>
    );
};

export default ContactInfo;