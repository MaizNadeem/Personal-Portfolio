import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = ({ percentage, image, color }) => {
    
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
            <CircularProgressbarWithChildren
                value={currentPercentage}
                styles={buildStyles({
                    pathColor: color,
                    trailColor: 'transparent',
                    textColor: 'white',
                    textSize: '18px',
                    rotation: 0.25,
                })}
            >
                <div style={{ width: 50, marginTop: 15 }}>
                    <img  style={{ borderRadius: 10 }} src={image} alt="doge" />
                </div>
                <div style={{ fontSize: 12, marginTop: 5 }}>
                    <strong>{Math.round(currentPercentage)}%</strong>
                </div>
            </CircularProgressbarWithChildren>
        </div>
    );
};

export default ProgressBar;
