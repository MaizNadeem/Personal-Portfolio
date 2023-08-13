import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { FaGraduationCap } from 'react-icons/fa';
import { GiBlackBook } from 'react-icons/gi';
import { BsFillAwardFill } from 'react-icons/bs';
import colorSharp from '../assets/img/color-sharp.png';
import { Meteors } from './Meteors';
import { useInView } from 'react-intersection-observer';
import 'animate.css/animate.min.css';

const educationItems = [
    {
        id: 1,
        institution: 'University of XYZ',
        degree: 'Bachelor of Science in Computer Science',
        year: '2018 - 2022',
        icon: <FaGraduationCap className="text-white text-2xl" />,
    },
    {
        id: 2,
        institution: 'ABC Community College',
        degree: 'Associate Degree in Web Development',
        year: '2016 - 2018',
        icon: <GiBlackBook className="text-white text-2xl" />,
    },
    {
        id: 3,
        institution: 'High School Name',
        degree: 'High School Diploma',
        year: '2012 - 2016',
        icon: <BsFillAwardFill className="text-white text-2xl" />,
    },
];

const workItems = [
    {
        id: 1,
        position: 'Software Engineer',
        company: 'TechCo',
        year: '2022 - Present',
        icon: <FaGraduationCap className="text-white text-2xl" />,
    },
    {
        id: 2,
        position: 'Web Developer',
        company: 'WebDev Agency',
        year: '2019 - 2022',
        icon: <GiBlackBook className="text-white text-2xl" />,
    },
    {
        id: 3,
        position: 'Intern',
        company: 'Tech Startup',
        year: '2018',
        icon: <BsFillAwardFill className="text-white text-2xl" />,
    },
];

const EducationItem = ({ institution, degree, year, icon, isLast }) => (
    <div className={`bg-[#151515] rounded-xl p-6 ${isLast ? 'mb-0' : 'mb-12'} relative shadow-md hover:shadow-lg transition duration-300`}>
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-gray-600 rounded-full w-8 h-8 flex items-center justify-center shadow-md">
                {icon}
            </div>
        </div>
        <h2 className="text-lg font-semibold mb-2 text-white">{degree}</h2>
        <p className="text-gray-400 mb-2">{institution}</p>
        <p className="text-gray-600">{year}</p>
    </div>
);
  
const LineConnector = () => (
    <div className="absolute left-1/2 rounded-full bottom-0 transform -translate-x-1/2 w-1 h-full bg-gray-300 z-[-1]" />
);
  
const SectionToggle = ({ activeSection, onToggle }) => (
    <div className="mb-8 flex space-x-4 items-center">
        <button
            className={`font-semibold ${
            activeSection === 'education'
                ? 'text-white'
                : 'text-gray-500'
            }`}
            onClick={() => onToggle('education')}
        >
            Education
        </button>
        <span className="text-white-500">•</span>
        <button
            className={`font-semibold ${
            activeSection === 'work'
                ? 'text-white'
                : 'text-gray-500'
            }`}
            onClick={() => onToggle('work')}
        >
            Work Experience
        </button>
    </div>
);
  
const Info = () => {
    const [activeSection, setActiveSection] = useState('education');
    const [animatedItems, setAnimatedItems] = useState([]);
    const [ref, inView] = useInView({ triggerOnce: false });
    
    const toggleSection = (section) => {
        setActiveSection(section);
        setAnimatedItems([]);
    };
  
    const sectionItems = activeSection === 'education' ? educationItems : workItems;
  
    useEffect(() => {
        if (inView && animatedItems.length < sectionItems.length) {
            const newAnimatedItems = sectionItems.slice(0, animatedItems.length + 1);
            setAnimatedItems(newAnimatedItems);
        }
    }, [inView, animatedItems, sectionItems]);
  
    return (
        <section
            id="aboutme"
            className="relative bg-no-repeat bg-cover"
            style={{
                backgroundImage: `linear-gradient(rgba(21, 21, 21, 0.7), rgba(21, 21, 21, 0.7)), url(${colorSharp})`,
                minHeight: "800px",
            }}
            ref={ref}
        >
            <Container>
            <div className='flex flex-col py-24'>
                <h2 className="mb-12" style={{ fontWeight: 700, fontSize: "45px" }}>
                    About Me
                </h2>
                <div className='flex flex-row gap-10'>
                    <div className="flex flex-col items-center w-1/2 relative gap-6">
                        <SectionToggle
                        activeSection={activeSection}
                        onToggle={toggleSection}
                        />
                        <div className="w-full max-w-xl relative">
                            {sectionItems.map((item, index) => (
                                <React.Fragment key={item.id}>
                                {animatedItems.includes(item) && (
                                    <div className="animate__animated animate__slideInUp" style={{ animationDelay: `${index * 0.3}s` }}>
                                    <EducationItem
                                        institution={item.institution || item.company}
                                        degree={item.degree || item.position}
                                        year={item.year}
                                        icon={item.icon}
                                        isLast={index === sectionItems.length - 1}
                                    />
                                    </div>
                                )}
                                {index < sectionItems.length - 1 && <LineConnector />}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                    <div className="w-1/2 bg-gray-800 p-6 rounded-lg">
                        {/* Your content for the right side */}
                    </div>
                </div>
            </div>
            <Meteors number={30} />
            </Container>
        </section>
    );
};
  
export default Info;