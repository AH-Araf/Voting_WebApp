import { useState, useEffect } from 'react';
import moment from 'moment';
import './Countdown.css';

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    function calculateTimeLeft() {
        const targetDate = moment('2024-01-07'); 
        const now = moment();
        const duration = moment.duration(targetDate.diff(now));
        const days = formatNumber(Math.floor(duration.asDays()));
        const hours = formatNumber(duration.hours());
        const minutes = formatNumber(duration.minutes());
        const seconds = formatNumber(duration.seconds());

        return { days, hours, minutes, seconds };
    }

    function formatNumber(number) {
        return number < 10 ? `0${number}` : `${number}`;
    }

    const renderDigitBoxes = (number) => {
        return Array.from(String(number), (digit, index) => (
            <div key={index} className="digit-box">
                {digit}
            </div>
        ));
    };
       
    return (
        <div className="flex gap-4 font-bold">
            <div className='flex flex-col items-center text-green-700'>
                <div className="flex">
                    {renderDigitBoxes(timeLeft.days)}
                </div>
                <div className="label">দিন</div>
            </div>

            <div className='flex flex-col items-center text-green-700'>
                <div className="flex">
                    {renderDigitBoxes(timeLeft.hours)}
                </div>
                <div className="label">ঘন্টা</div>
            </div>

            <div className='flex flex-col items-center text-green-700'>
                <div className="flex">
                    {renderDigitBoxes(timeLeft.minutes)}
                </div>
                <div className="label">মিনিট</div>
            </div>

            <div className='flex flex-col items-center text-green-700'>
                <div className="flex">
                    {renderDigitBoxes(timeLeft.seconds)}
                </div>
                <div className="label">সেকেন্ড</div>
            </div>

        </div>
    );
};

export default Countdown;
