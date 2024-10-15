import { useState, useEffect } from 'react';

export function useCountdown(endTime) {
    const [countdown, setCountdown] = useState('');

    useEffect(() => {
        if (!endTime) return;

        const calculateCountdown = () => {
            const end = new Date(endTime);
            const now = new Date();
            const timeDiff = end - now;

            if (timeDiff <= 0) {
                setCountdown('00D:00H:00M:00S');
                return;
            }

            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

            setCountdown(`${days}D:${hours}H:${minutes}M:${seconds}S`);
        };

        const timer = setInterval(calculateCountdown, 1000);

        return () => clearInterval(timer);
    }, [endTime]);

    return countdown;
}
