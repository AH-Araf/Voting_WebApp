import bannerImg from '../../../assets/banner/Banner.jpg'
import './HomeBanner.css'
import { RiWhatsappFill } from "react-icons/ri";
import { IoIosMail } from "react-icons/io";

const HomeBanner = () => {
    return (
        <div>
            <div className="container">
                <img src={bannerImg} alt="Norway" />
                <div className="text-block">
                    <h4>Nature</h4>
                    <p>What a beautiful sunrise</p>
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