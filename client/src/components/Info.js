import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { FaGraduationCap, FaVideo, FaYoutube } from 'react-icons/fa';
import { GiBlackBook } from 'react-icons/gi';
import { BsFillAwardFill } from 'react-icons/bs';
import colorSharp from '../assets/img/color-sharp.png';
import { Meteors } from './Meteors';
import { useInView } from 'react-intersection-observer';
import 'animate.css/animate.min.css';

const educationItems = [
    {
        id: 1,
        institution: 'COMSATS University (CUI) Islamabad',
        degree: 'Bachelor of Science in Computer Science',
        year: '2021 - 2024',
        icon: <FaGraduationCap className="text-white text-2xl" />,
    },
    {
        id: 2,
        institution: 'Government College University (GCU), Lahore',
        degree: 'Higher Secondary Education (FSc.)',
        year: '2018 - 2020',
        icon: <GiBlackBook className="text-white text-2xl" />,
    },
    {
        id: 3,
        institution: 'Pak Angels High School',
        degree: 'Secondary Education',
        year: '2016 - 2018',
        icon: <BsFillAwardFill className="text-white text-2xl" />,
    },
];

const workItems = [
    {
        id: 1,
        position: 'Senior Video Editor',
        company: 'EcommerceWala (ecommercewala.org)',
        year: 'Dec 2021 - Aug 2023',
        icon: <FaVideo className="text-white text-2xl" />,
    },
    {
        id: 2,
        position: 'Social Media Manager',
        company: 'Sagar Publishers',
        year: 'Jan 2021 - Oct 2022',
        icon: <FaYoutube className="text-white text-2xl" />,
    },
];

const EducationItem = ({ institution, degree, year, icon, isLast }) => (
    <div className={`bg-[#151515] rounded-2xl p-6 ${isLast ? 'mb-0' : 'mb-12'} relative shadow-md hover:shadow-lg transition duration-300`}>
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-[#B8B8B8] rounded-full w-8 h-8 flex items-center justify-center shadow-md">
                {icon}
            </div>
        </div>
        <h2 className="text-lg font-semibold mb-2 text-white">{degree}</h2>
        <p className="text-[#B8B8B8] mb-2">{institution}</p>
        <p className="text-[#B8B8B8]">{year}</p>
    </div>
);
  
const LineConnector = () => (
    <div className="absolute left-1/2 rounded-full bottom-0 transform -translate-x-1/2 w-1 h-full bg-[#B8B8B8] z-[-1]" />
);
  
const SectionToggle = ({ activeSection, onToggle }) => (
    <div className="mb-8 flex space-x-4 items-center">
        <button
            className={`font-semibold ${
            activeSection === 'education'
                ? 'text-white'
                : 'text-[#B8B8B8]'
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
                : 'text-[#B8B8B8]'
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
                backgroundImage: `linear-gradient(rgba(21, 21, 21, 0.3), rgba(21, 21, 21, 0.3)), url(${colorSharp})`,
                minHeight: "800px",
            }}
            ref={ref}
        >
            <Container>
            <div className='flex flex-col py-12 md:py-24 lg:py-24 xl:py-24'>
                <h2 className="mb-8 md:mb-12 lg:mb-12 xl:mb-12 text-3xl md:text-4xl lg:text-4xl xl:text-4xl" style={{ fontWeight: 700 }}>
                    About Me
                </h2>
                <div className='flex flex-col md:flex-col lg:flex-row xl:flex-row gap-10 items-center justify-center'>
                    <div className="flex flex-col items-center w-full md:w-full lg:w-1/2 xl:w-1/2 relative gap-6">
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
                    <div className="w-full md:w-full lg:w-1/2 xl:w-1/2 bg-[#151515] p-6 rounded-3xl">

                        <h3 class="text-white text-lg font-semibold mb-2 text-left">Who am I?</h3>
                        <p class="text-[#B8B8B8] mb-4 text-left">
                            I am a passionate and dedicated student from Lahore, Pakistan with a strong background in Computer Science.
                            I have made Web, Mobile and Desktop Applications with different tech stacks. I've also worked professionally as a Video Editor. I'm more of a frontend guy trying to become a Full-Stack Developer.
                        </p>
                        
                        <h3 class="text-white text-lg font-semibold mb-2 text-left">Interests & Hobbies</h3>
                        <p class="text-[#B8B8B8] mb-4 text-left">
                            In my free time, I enjoy many video games.
                            Favourite Sport is Football.
                        </p>
                        
                        <h3 class="text-white text-lg font-semibold mb-2 text-left">Languages</h3>
                        <p class="text-[#B8B8B8] mb-4 text-left">
                            I am fluent in English and Urdu, allowing me to communicate with no language barrier internationally as well as in my local country.
                        </p>
                        <hr></hr>
                        <p class="text-[#B8B8B8] text-left">
                        I like collaborative environments, valuing teamwork and understanding the dynamics of group synergy. My dedication to meeting deadlines and adhering to schedules ensures efficient project execution. I've successfully completed projects that required intricate problem-solving and critical thinking, demonstrating my ability to navigate complex challenges with innovative solutions.
                        </p>

                    </div>
                </div>
            </div>
            <Meteors number={30} />
            </Container>
        </section>
    );
};
  
export default Info;