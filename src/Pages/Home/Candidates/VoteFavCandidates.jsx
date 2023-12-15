import gif from '../../../assets/icon/Fingerprint-scan-Green.gif'
import { useState, useEffect } from 'react';
import img from '../../../assets/a.jpg'
import ProgressBar from "@ramonak/react-progress-bar";
import './Candidates.css';

const VoteFavCandidates = () => {
    // eslint-disable-next-line no-unused-vars
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
        <div className='finger-print-btn'>
            <div>
                {/* <ul className='mb-8'>
                    {candidates.map((candidate) => (
                        <li key={candidate.first_name}>
                            <div className='flex gap-2 items-center'>
                                <input type="checkbox" checked="checked" className="checkbox checkbox-success checkbox-xs" />
                                <div className='bg-teal-100 p-5 vote-fav-candidate'>
                                    
                                    <img className='w-1/5 h-20px rounded-xl' src={img} alt="" />

                                    <div className=''>
                                        <p className='text-sm'><b>{candidate.political_party.name}</b></p>
                                        <p className='text-sm'>{`${candidate.first_name} ${candidate.last_name}`}</p>
                                        <p className='text-xs'><span className='me-7'>🟢এমপি পদপ্রার্থী</span><span>🟡মোট ভোট: {candidate.votes_gained}</span></p>
                                        <ProgressBar className="wrapper mt-1" completed={candidate.votes_gained_percentage} />
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul> */}
                {/*  */}
                <ul className='mb-8'>
                        <li>
                            <div className='flex gap-2 items-center'>
                                <input type="checkbox" checked="checked" className="checkbox checkbox-success checkbox-xs" />

                                <div className='bg-teal-100 vote-fav-candidate p-5'>
                                    <img className='w-1/5 h-20px rounded-xl' src={img} alt="" />
                                    <div className=''>
                                        <p className='text-sm'><b></b></p>
                                        <p className='text-sm'>Gwendolyn Holmes</p>
                                        <p className='text-xs'><span className='me-7'>🟢এমপি পদপ্রার্থী</span><span>🟡মোট ভোট: </span></p>
                                        <ProgressBar className="wrapper mt-1" completed={70} />
                                    </div>
                                </div>
                            </div>
                        </li>
                </ul>
                <ul className='mb-8'>
                        <li>
                            <div className='flex gap-2 items-center'>
                                <input type="checkbox" checked="checked" className="checkbox checkbox-success checkbox-xs" />

                                <div className='bg-teal-100 vote-fav-candidate p-5'>
                                    <img className='w-1/5 h-20px rounded-xl' src={img} alt="" />
                                    <div className=''>
                                        <p className='text-sm'><b></b></p>
                                        <p className='text-sm'>Gwendolyn Holmes</p>
                                        <p className='text-xs'><span className='me-7'>🟢এমপি পদপ্রার্থী</span><span>🟡মোট ভোট: </span></p>
                                        <ProgressBar className="wrapper mt-1" completed={70} />
                                    </div>
                                </div>
                            </div>
                        </li>
                </ul>
                <ul className='mb-8'>
                        <li>
                            <div className='flex gap-2 items-center'>
                                <input type="checkbox" checked="checked" className="checkbox checkbox-success checkbox-xs" />

                                <div className='bg-teal-100 vote-fav-candidate p-5'>
                                    <img className='w-1/5 h-20px rounded-xl' src={img} alt="" />
                                    <div className=''>
                                        <p className='text-sm'><b></b></p>
                                        <p className='text-sm'>Gwendolyn Holmes</p>
                                        <p className='text-xs'><span className='me-7'>🟢এমপি পদপ্রার্থী</span><span>🟡মোট ভোট: </span></p>
                                        <ProgressBar className="wrapper mt-1" completed={70} />
                                    </div>
                                </div>
                            </div>
                        </li>
                </ul>
                <ul className='mb-8'>
                        <li>
                            <div className='flex gap-2 items-center'>
                                <input type="checkbox" checked="checked" className="checkbox checkbox-success checkbox-xs" />

                                <div className='bg-teal-100 vote-fav-candidate p-5'>
                                    <img className='w-1/5 h-20px rounded-xl' src={img} alt="" />
                                    <div className=''>
                                        <p className='text-sm'><b></b></p>
                                        <p className='text-sm'>Gwendolyn Holmes</p>
                                        <p className='text-xs'><span className='me-7'>🟢এমপি পদপ্রার্থী</span><span>🟡মোট ভোট: </span></p>
                                        <ProgressBar className="wrapper mt-1" completed={70} />
                                    </div>
                                </div>
                            </div>
                        </li>
                </ul>
                <ul className='mb-8'>
                        <li>
                            <div className='flex gap-2 items-center'>
                                <input type="checkbox" checked="checked" className="checkbox checkbox-success checkbox-xs" />

                                <div className='bg-teal-100 vote-fav-candidate p-5'>
                                    <img className='w-1/5 h-20px rounded-xl' src={img} alt="" />
                                    <div className=''>
                                        <p className='text-sm'><b></b></p>
                                        <p className='text-sm'>Gwendolyn Holmes</p>
                                        <p className='text-xs'><span className='me-7'>🟢এমপি পদপ্রার্থী</span><span>🟡মোট ভোট: </span></p>
                                        <ProgressBar className="wrapper mt-1" completed={70} />
                                    </div>
                                </div>
                            </div>
                        </li>
                </ul>
                {/*  */}
                
            </div>
            <img className='h-28 w-28' src={gif} alt="" />
        </div>
    );
};

export default VoteFavCandidates;

