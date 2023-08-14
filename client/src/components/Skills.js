import colorSharp from "../assets/img/color-sharp.png"
import web from '../assets/skills/web.png'
import net from '../assets/skills/net.png'
import reactNative from '../assets/skills/react-native.png'
import photoshop from '../assets/skills/photoshop.png'
import premierePro from '../assets/skills/premiere-pro.png'

import node from "../assets/icons/node.png"
import react from "../assets/icons/react.png"
import redux from "../assets/icons/redux.png"
import tailwind from "../assets/icons/tailwind.png"
import mongo from "../assets/icons/mongo.png"
import bootstrap from "../assets/icons/bootstrap.png"
import micnet from "../assets/icons/net.png"
import sqlserver from "../assets/icons/sqlserver.png"
import express from "../assets/icons/express.png"
import graphql from "../assets/icons/graphql.png"
import gcp from "../assets/icons/gcp.png"
import azure from "../assets/icons/azure.png"
import firebase from "../assets/icons/firebase.png"
import vs from "../assets/icons/vs.png"
import vscode from "../assets/icons/vscode.png"
import javascript from "../assets/icons/javascript.png"
import csharp from "../assets/icons/csharp.png"
import c from "../assets/icons/c.png"
import cpp from "../assets/icons/cpp.png"
import java from "../assets/icons/java.png"
import pr from "../assets/icons/pr.png"
import ps from "../assets/icons/ps.png"
import ae from "../assets/icons/ae.png"
import canva from "../assets/icons/canva.png"

import Carousel from 'react-multi-carousel';

import ProgressBar from "./ProgressBar";

import 'react-multi-carousel/lib/styles.css';

const Skills = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const imagesArray = [ node, react, redux, tailwind, mongo, bootstrap, micnet, sqlserver, express, graphql, gcp, azure, firebase, vs, vscode, javascript, csharp, c, cpp, java, pr, ps, ae, canva ]

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>I have learnt many aspects of Development including Routing, APIs and caching.<br></br> My video editing skills help me to create stunning designs as I like making better designs.</p>
                            <div className="gd-carousel-wrapper">
                            <Carousel 
                                swipeable={true}
                                draggable={true}
                                arrows={true}
                                responsive={responsive}
                                infinite={false}
                                className="gd-carousel">
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '1rem' }} >
                                    <ProgressBar percentage={80} image={web} color='##3583DD' />
                                    <h5>Web Development</h5>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '1rem' }} >
                                    <ProgressBar percentage={85} image={reactNative} color='#61DAFA' />
                                    <h5>React Native</h5>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '1rem' }} >
                                    <ProgressBar percentage={75} image={net} color='#512BD4' />
                                    <h5>.NET Framework</h5>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '1rem' }} >
                                    <ProgressBar percentage={90} image={premierePro} color='#00004A' />
                                    <h5>Video Editing</h5>
                                </div>
                                <div className="item">
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '1rem' }} >
                                    <ProgressBar percentage={80} image={photoshop} color='#001834' />
                                    <h5>Graphic Designing</h5>
                                    </div>
                                </div>
                            </Carousel>
                            </div>
 
                        </div>
                        <div className="skills-icon-wrap">
                                <h5>Versatile Toolkit: Technologies, and Languages I've Engaged With</h5>
                                <div className="image-gallery">
                                {imagesArray.map((image, index) => (
                                    <div className="image-item">
                                        <img src={image} alt={`Icon ${index}`} />
                                    </div>
                                ))}
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