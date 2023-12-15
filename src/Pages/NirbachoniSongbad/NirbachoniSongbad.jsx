import { useLoaderData } from "react-router-dom";
import SingleNirbachoniSongbad from "./SingleNirbachoniSongbad";

const NirbachoniSongbad = () => {
    const news = useLoaderData();
    
    return (
        <div>
            <p className="text-lg font-bold text-green-700 ms-20 mt-10">সাম্প্রতিক সময় নির্বাচনী সংবাদ</p>
            {/* <div className="flex justify-center items-center h-52">
                <p className="text-2xl font-bold text-white bg-red-400 px-5 py-7">Data will come from the backend</p>
            </div> */}
            <div>
                {
                    news.map(a => <SingleNirbachoniSongbad
                    key={a.id}
                    a={a}
                >
                </SingleNirbachoniSongbad>)
                }
            </div>
            <div className="flex justify-center">
                <p className="btn btn-active btn-success text-white">আরও নিউজ</p>
            </div>
        </div>
    );
};

export default NirbachoniSongbad;

