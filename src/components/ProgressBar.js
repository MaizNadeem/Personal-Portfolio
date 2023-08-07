import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = ({ percentage }) => {
    
    const [isVisible, setIsVisible] = useState(false);
    const [currentPercentage, setCurrentPercentage] = useState(0);

    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView && !isVisible) {
            setIsVisible(true);
        }
    }, [inView, isVisible]);

    useEffect(() => {
        if (isVisible) {
            const animationDuration = 500;
            const step = (percentage - currentPercentage) / (animationDuration / 10);

            const interval = setInterval(() => {
                setCurrentPercentage(prevPercentage => prevPercentage + step);
            }, 10);

            return () => {
                clearInterval(interval);
            };
        }
    }, [isVisible, percentage, currentPercentage]);

    return (
        <div
            style={{
                width: 140,
                height: 140,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            ref={ref}
        >
            <CircularProgressbar
                value={currentPercentage}
                text={`${Math.round(currentPercentage)}%`}
                styles={buildStyles({
                    pathColor: '#9F3483',
                    trailColor: 'transparent',
                    textColor: 'white',
                    textSize: '18px',
                    rotation: 0.25,
                })}
            />
        </div>
    );
};

export default ProgressBar;
