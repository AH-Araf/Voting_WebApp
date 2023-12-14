import { RiWhatsappFill } from "react-icons/ri";
import { IoIosMail } from "react-icons/io";

const HomeDetails = () => {
    return (
        <div>
            <div className="mt-20 bg-green-50 py-10">
                <div className="flex justify-center">
                    <p className="text-xl font-bold text-green-700">নির্বাচনী এলাকা সংক্রান্ত তথ্যাদি</p>
                </div>

                <div className="flex justify-evenly mt-10">

                    <div className="flex flex-col items-center">
                        <p className="font-semibold text-orange-600">ভোটার সংখ্যা</p>
                        <div className="radial-progress text-orange-500" style={{ "--value": 88 }} role="progressbar">88%</div>
                    </div>

                    <div className="flex flex-col items-center">
                        <p className="font-semibold text-yellow-500">আসন সংখ্যা</p>
                        <div className="radial-progress text-yellow-400" style={{ "--value": 90 }} role="progressbar">99%</div>
                    </div>

                    <div className="flex flex-col items-center">
                        <p className="font-semibold text-green-500">প্রার্থী সংখ্যা</p>
                        <div className="radial-progress text-green-400" style={{ "--value": 78 }} role="progressbar">78%</div>
                    </div>

                    <div className="flex flex-col items-center">
                        <p className="font-semibold text-violet-600">মহিলা প্রার্থী সংখ্যা</p>
                        <div className="radial-progress text-violet-500" style={{ "--value": 83 }} role="progressbar">83%</div>
                    </div>
                </div>

            </div>
            
            <div className='flex justify-center py-6 bg-green-800'>
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

export default HomeDetails;