import CountryTopCandidates from "./CountryTopCandidates";
import VoteFavCandidates from "./VoteFavCandidates";


const Candidates = () => {
  return (
    <div className="flex justify-around mt-28">

      <div data-aos="fade-right">
        <div className="relative bg-emerald-200 p-2 py-8 rounded-lg">
          <VoteFavCandidates></VoteFavCandidates>
          <h2 className="rounded-lg -top-7 absolute border  p-2 bg-emerald-800  text-white ">
            আপনার পছন্দের প্রার্থীকে ভোট দিন
          </h2>
        </div>
        <div className="mt-5">
          <div className="flex justify-center">
            <p className="text-md text-green-600 rounded-full border-2 border-green-500 px-4 py-1">বিঃদ্রঃ এক নজরে প্রার্থীদের উন্নয়নমূলক কাজ দেখুন</p>
          </div>
        </div>
      </div>

      <div data-aos="fade-left">
        <div className="relative bg-red-100 p-2 py-8 rounded-lg">
          <CountryTopCandidates></CountryTopCandidates>
          <h2 className="rounded-lg -top-7 absolute border  p-2 bg-red-600  text-white ">
            দেশের শীর্ষ পর্যায়ের প্রার্থীগণ
          </h2>
        </div>

        <div className="mt-5">
          <div className="flex justify-center">
            <p className="text-md text-green-600 font-bold"><u>সর্বশেষ সেরা খবর</u></p>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Candidates;