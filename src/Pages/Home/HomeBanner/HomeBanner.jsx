import bannerImg from '../../../assets/banner/Banner.jpg'
import './HomeBanner.css'
import { RiWhatsappFill } from "react-icons/ri";
import { IoIosMail } from "react-icons/io";

const HomeBanner = () => {
    return (
        <div>
            <div>
                <img className='home-banner-img' src={bannerImg} alt="Norway" />
                <div className="text-block text-lg font-serif bg-slate-400 bg-opacity-10 p-5 rounded-lg">
                    <p>After receiving the data from backend,</p>
                    <p>the rest of th details will be shown here.</p>
                </div>
            </div>

            <div className='flex justify-center py-6 bg-green-50'>
                <button className="" onClick={() => document.getElementById('my_modal_1').showModal()}><p className='text-green-600 text-xl'>আপনার প্রতিষ্ঠানের ডিজিটাল মার্কেটিং করতে ক্লিক করন</p></button>
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

export default HomeBanner;



// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyBKS1rkbmWZD_iN1MJ0-yrJ3qv5DHkYZcc",
//   authDomain: "votekoren.firebaseapp.com",
//   projectId: "votekoren",
//   storageBucket: "votekoren.appspot.com",
//   messagingSenderId: "954271290762",
//   appId: "1:954271290762:web:27d6e6a9d8d5e95e116473"
// };

// const app = initializeApp(firebaseConfig);