import colorSharp from "../assets/img/color-sharp.png"
import web from '../assets/skills/web.png'
import net from '../assets/skills/net.png'
import reactNative from '../assets/skills/react-native.png'
import photoshop from '../assets/skills/photoshop.png'
import premierePro from '../assets/skills/premiere-pro.png'

import Carousel from 'react-multi-carousel';

import ProgressBar from "./ProgressBar";

import 'react-multi-carousel/lib/styles.css';

const Skills = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                            <div className="gd-carousel-wrapper">
                            <Carousel 
                                swipeable={true}
                                draggable={true}
                                arrows={true}
                                responsive={responsive}
                                infinite={false}
                                className="gd-carousel">
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '1rem' }} >
                                    <ProgressBar percentage={95} image={web} color='##3583DD' />
                                    <h5>Web Development</h5>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '1rem' }} >
                                    <ProgressBar percentage={90} image={reactNative} color='#61DAFA' />
                                    <h5>React Native</h5>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '1rem' }} >
                                    <ProgressBar percentage={90} image={net} color='#512BD4' />
                                    <h5>.NET Framework</h5>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '1rem' }} >
                                    <ProgressBar percentage={85} image={photoshop} color='#001834' />
                                    <h5>Adobe Photoshop</h5>
                                </div>
                                <div className="item">
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '1rem' }} >
                                    <ProgressBar percentage={90} image={premierePro} color='#00004A' />
                                    <h5>Adobe Premiere Pro</h5>
                                    </div>
                                </div>
                            </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Skills-Background" />
        </section>
    )
}

export default Skills