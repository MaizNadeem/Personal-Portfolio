import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

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
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <CircularProgressbar
                    value={currentPercentage}
                    text={`${Math.round(currentPercentage)}%`}
                    styles={{
                        path: {
                            stroke: 'transparent',
                        },
                        trail: {
                            stroke: 'transparent',
                        },
                        text: {
                            fill: "white",
                        },
                    }}
                />
                <svg width="100%" height="100%" viewBox="0 0 100 100" style={{ position: 'absolute', top: 0, left: 0 }}>
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#9F3483" />
                            <stop offset="100%" stopColor="#5933B4" />
                        </linearGradient>
                    </defs>
                    <circle
                        cx="50"
                        cy="50"
                        r="47"
                        fill="none"
                        strokeWidth="6"
                        stroke="url(#gradient)"
                        strokeDasharray={`${currentPercentage}, 100`}
                        strokeLinecap="round"
                        transform="rotate(0 50 50)"
                    />
                </svg>
            </div>
        </div>
    );
};

export default ProgressBar;
