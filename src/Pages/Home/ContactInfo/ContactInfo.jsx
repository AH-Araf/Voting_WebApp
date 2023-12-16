import { useForm } from "react-hook-form";
import './ContactInfo.css';


const ContactInfo = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://172.105.116.39:8000/api/election/public/contact/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                console.log('Message sent successfully');
                alert('Message sent successfully')
                reset();
            } else {
                console.error('Failed to send message');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="text-center">

            <div className="home-contact-section border-t-2 shadow-xl ...">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <p className="mb-5 text-2xl font-bold">Contact Us</p>
                    <div className="flex gap-8 mb-4">
                        <div className="form-control input-box max-w-xs">
                            <label className="label"> <span className="label-text">First Name</span></label>
                            <input type="text" {...register("first_name", {
                                required: "first_name is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.first_name && <p className='text-red-500'>{errors.first_name.message}</p>}
                        </div>
                        <div className="form-control input-box max-w-xs">
                            <label className="label"> <span className="label-text">Last Name</span></label>
                            <input type="text" {...register("last_name", {
                                required: "last_name is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.last_name && <p className='text-red-500'>{errors.last_name.message}</p>}
                        </div>
                    </div>

                    <div className="flex gap-8 mb-4">
                        <div className="form-control input-box max-w-xs">
                            <label className="label"> <span className="label-text">Email</span></label>
                            <input type="email" {...register("email", {
                                required: "email is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        </div>
                        <div className="form-control input-box max-w-xs">
                            <label className="label"> <span className="label-text">Phone Number</span></label>
                            <input type="text" {...register("mobile_number", {
                                required: "mobile_number is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.mobile_number && <p className='text-red-500'>{errors.mobile_number.message}</p>}
                        </div>

                    </div>


                    <div className="flex gap-8">
                        <div className="form-control input-box max-w-xs">
                            <label className="label"> <span className="label-text">Roll</span></label>
                            <select
                                {...register('subject_type')}
                                className="select input-bordered w-full max-w-xs">
                                {<option>politician</option>}
                                {<option>voter</option>}
                                {<option>vote_worker</option>}
                                {<option>others</option>}
                            </select>
                        </div>

                        <div className="form-control input-box max-w-xs">
                            <label className="label"> <span className="label-text">Subject</span></label>
                            <input type="text" {...register("subject", {
                                required: "subject is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.subject && <p className='text-red-500'>{errors.subject.message}</p>}
                        </div>
                    </div>
                    <div className="form-control mt-4 input-box max-w-xs">
                        <label className="label"> <span className="label-text">Write a Message</span></label>
                        <input type="text" {...register("message", {
                            required: "message  Title is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.message && <p className='text-red-500'>{errors.message.message}</p>}
                    </div>
                    <input className='btn btn-success text-white w-full mt-4' value="Send Message" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default ContactInfo;