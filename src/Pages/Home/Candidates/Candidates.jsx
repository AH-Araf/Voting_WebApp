import CountryTopCandidates from "./CountryTopCandidates";
import VoteFavCandidates from "./VoteFavCandidates";
import './Candidates.css'


const Candidates = () => {
  return (
    <div className="candidates-main-section mt-28">

      <div data-aos="fade-up">
        <h2 className="px-5 py-1 rounded-lg bg-emerald-800  text-white ">
          আপনার পছন্দের প্রার্থীকে ভোট দিন
        </h2>
        <div className="fav-candidate-body relative bg-emerald-200 p-2 py-8 rounded-lg">
          <VoteFavCandidates></VoteFavCandidates>

        </div>
        <div className="mt-5">
          <div className="flex justify-center">
            <p className="text-md text-green-600 rounded-full border-2 border-green-500 px-4 py-1 text-candidate">বিঃদ্রঃ এক নজরে প্রার্থীদের উন্নয়নমূলক কাজ দেখুন</p>
          </div>
        </div>
      </div>

      <div data-aos="fade-up">
        <h2 className="px-5 py-1 rounded-lg bg-red-600  text-white ">
          দেশের শীর্ষ পর্যায়ের প্রার্থীগণ
        </h2>
        <div className="top-candidate-body relative bg-red-100 p-2 py-4 rounded-lg">
          <CountryTopCandidates></CountryTopCandidates>
        </div>

        <div className="mt-5">
          <div className="flex justify-center items-center flex-col">
            <p className="text-md text-green-600 font-bold"><u>সর্বশেষ সেরা খবর</u></p>
            <p className="font-semibold text-red-600">Data will come from backend</p>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Candidates;