import { useLoaderData } from "react-router-dom";


const MainSingleNews = () => {
    const a = useLoaderData();
    const {title,description,link,source,image} = a;
    return (
        <div>
            <p>{title}</p>
            <p>{description}</p>
            <p>{link}</p>
            <p>{source}</p>
            <p>{image}</p>
        </div>
    );
};

export default MainSingleNews;