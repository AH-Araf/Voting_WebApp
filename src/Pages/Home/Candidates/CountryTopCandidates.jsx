
import { useState, useEffect } from 'react';
import img from '../../../assets/a.jpg';
import './Candidates.css';

const CountryTopCandidates = () => {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://172.105.116.39:8000/api/user/private/candidates/', {
                    method: 'get',
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log(data);
                setCandidates(data);
            } catch (error) {
                console.error('Error fetching data:', error);

            }
        };

        fetchData();
    }, []);


    return (
        <div>
            <div>
                {/* <ul className='mb-3 border-b-2 border-slate-400'>
                    {candidates.map((candidate) => (
                        <li key={candidate.first_name}>
                            <div>
                                <div className=' top-candidate p-5'>
                                    <img className='w-1/5 h-20px rounded-xl' src={img} alt="" />

                                    <div className=''>
                                        <p><b>{candidate.political_party.name}</b></p>
                                        <p>{`${candidate.first_name} ${candidate.last_name}`}</p>
                                        <p className='text-xs'><span className='me-7'>🟢এমপি পদপ্রার্থী</span><span>🔵রাজশাহী{candidate.votes_gained}</span></p>

                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul> */}

                {/*  */}
                <ul className='border-b-2 border-slate-300'>
                        <li>
                            <div>
                                <div className=' top-candidate p-5'>
                                    <img className='w-1/5 h-20px rounded-xl' src={img} alt="" />
                                    <div className=''>
                                        {/* <p><b>{candidate.political_party.name}</b></p>
                                        <p>{`${candidate.first_name} ${candidate.last_name}`}</p> */}
                                        <p>Gwendolyn Holmes</p>
                                        <p className='text-xs'><span className='me-7'>🟢এমপি পদপ্রার্থী</span><span>🔵রাজশাহী</span></p>

                                    </div>
                                </div>
                            </div>
                        </li>
                </ul>
                <ul className='border-b-2 border-slate-300'>
                        <li>
                            <div>
                                <div className=' top-candidate p-5'>
                                    <img className='w-1/5 h-20px rounded-xl' src={img} alt="" />
                                    <div className=''>
                                        {/* <p><b>{candidate.political_party.name}</b></p>
                                        <p>{`${candidate.first_name} ${candidate.last_name}`}</p> */}
                                        <p>Gwendolyn Holmes</p>
                                        <p className='text-xs'><span className='me-7'>🟢এমপি পদপ্রার্থী</span><span>🔵রাজশাহী</span></p>

                                    </div>
                                </div>
                            </div>
                        </li>
                </ul>
                <ul className='border-b-2 border-slate-300'>
                        <li>
                            <div>
                                <div className=' top-candidate p-5'>
                                    <img className='w-1/5 h-20px rounded-xl' src={img} alt="" />
                                    <div className=''>
                                        {/* <p><b>{candidate.political_party.name}</b></p>
                                        <p>{`${candidate.first_name} ${candidate.last_name}`}</p> */}
                                        <p>Gwendolyn Holmes</p>
                                        <p className='text-xs'><span className='me-7'>🟢এমপি পদপ্রার্থী</span><span>🔵রাজশাহী</span></p>

                                    </div>
                                </div>
                            </div>
                        </li>
                </ul>
                <ul className='border-b-2 border-slate-300'>
                        <li>
                            <div>
                                <div className=' top-candidate p-5'>
                                    <img className='w-1/5 h-20px rounded-xl' src={img} alt="" />
                                    <div className=''>
                                        {/* <p><b>{candidate.political_party.name}</b></p>
                                        <p>{`${candidate.first_name} ${candidate.last_name}`}</p> */}
                                        <p>Gwendolyn Holmes</p>
                                        <p className='text-xs'><span className='me-7'>🟢এমপি পদপ্রার্থী</span><span>🔵রাজশাহী</span></p>

                                    </div>
                                </div>
                            </div>
                        </li>
                </ul>
                {/*  */}
            </div>
        </div>
    );
};

export default CountryTopCandidates;

