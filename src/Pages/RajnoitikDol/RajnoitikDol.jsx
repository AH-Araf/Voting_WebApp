import { useLoaderData } from "react-router-dom";
import SingleRajnoitikDol from "./SingleRajnoitikDol";


const RajnoitikDol = () => {
    const politicalParties = useLoaderData();
    // console.log(politicalParties);
    return (
        <div>
            <p>RajnoitikDol</p>
            {politicalParties.map((a) => (
                <SingleRajnoitikDol key={a.id} a={a} />
            ))}
        </div>
    );
};

export default RajnoitikDol;