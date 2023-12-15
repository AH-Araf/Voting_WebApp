import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleNirbachoniSongbad from "./SingleNirbachoniSongbad";

const NirbachoniSongbad = () => {
    const news = useLoaderData();
    const [visibleNews, setVisibleNews] = useState(3);

    const handleLoadMore = () => {
        setVisibleNews((prevVisibleNews) => prevVisibleNews + 3);
    };

    return (
        <div>
            <p className="text-lg font-bold text-green-700 mt-10 mb-10 text-center">
                সাম্প্রতিক সময় নির্বাচনী সংবাদ
            </p>
            <div>
                {news.slice(0, visibleNews).map((a) => (
                    <SingleNirbachoniSongbad key={a.id} a={a} />
                ))}
            </div>
            {visibleNews < news.length && (
                <div className="flex justify-center">
                    <button
                        className="btn btn-active btn-success text-white"
                        onClick={handleLoadMore}
                    >
                        আরও নিউজ
                    </button>
                </div>
            )}
        </div>
    );
};

export default NirbachoniSongbad;
