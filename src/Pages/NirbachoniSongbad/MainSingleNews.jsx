import { useLoaderData } from "react-router-dom";
import demoimg from '../../assets/banner/newsExampleImg.jpg'


const MainSingleNews = () => {
    const a = useLoaderData();
    const { title, description, link, source} = a;
    return (
        <div>
            <img className="news-banner-img" src={demoimg} alt="" />

            <div className="MainSingleNews-part">
                <p className="text-2xl font-bold">{title}</p>
                <p className="text-slate-400 mb-10">{link}</p>
                <p>{description}</p>
                
                {/* <p>{source}</p> */}
            </div>

        </div>
    );
};

export default MainSingleNews;