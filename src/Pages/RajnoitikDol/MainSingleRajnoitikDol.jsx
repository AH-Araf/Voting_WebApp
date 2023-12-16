import { useLoaderData } from "react-router-dom";
import img from '../../assets/images/loginPageImg.png'
import img1 from '../../assets/a.jpg'

const MainSingleRajnoitikDol = () => {
    const a = useLoaderData();
    const { id, name, logo, sign_name, registration_date, website_url, registration_no, address, phone_no, mobile_no, email } = a;

    return (
        <div className="MainSingleRajnoitikDol-section">
            <div>
                <img className="h-20 w-20 rounded-2xl mb-5" src={img} alt="" />
                <p><span className='text-green-600 text-xl font-bold'>{name}</span></p>
                <div className="flex gap-5 mb-5 mt-2">
                    <p className="bg-green-700 px-3 py-1 text-white rounded-full">নিবন্ধন নম্বর: {registration_no}</p>
                    <p className="bg-green-700 px-3 py-1 text-white rounded-full">প্রতীকের নাম: {sign_name}</p>
                </div>
                <p className="text-green-700 font-semibold">কেন্দ্রীয় কার্যালয়ের ঠিকানা:</p>
                <p className="mb-6">{address}</p>

                <div className="political-party-details">
                    <div>
                        <p>ফোন:{phone_no}</p>
                        <p>ইমেইল:{email}</p>
                    </div>
                    <div>
                        <p>মোবাইল:{mobile_no}</p>
                        <p>ওয়েব এ্যাড্রেস:{website_url}</p>
                    </div>
                </div>
            </div>

            <div className="flex gap-5">
                <img className="h-24 w-24 rounded-full border-4 border-green-500" src={img1} alt="" />
                <img className="h-24 w-24 rounded-full border-4 border-green-500" src={img1} alt="" />
            </div>
        </div>
    );
};

export default MainSingleRajnoitikDol;