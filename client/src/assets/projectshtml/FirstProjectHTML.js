import React from 'react';

import './projects.css'
import { AiOutlineLink } from 'react-icons/ai';
import { Button } from 'react-bootstrap';

const FirstProjectHTML = () => {
    return (
        <div className="html-container">
            <div className="button-container-modal">
                <Button className="custom-button text-only-modal" onClick={() => window.open("https://homyz-real-estate.vercel.app/", "_blank")}>
                    <span>View Live Demo</span>
                </Button>
                <Button className="custom-button icon-and-text-modal" onClick={() => window.open("https://github.com/MaizNadeem/Real-Estate-Web", "_blank")}>
                    <AiOutlineLink />
                    <>Go to Source</>
                </Button>
            </div>
            <p>Introducing Homyz - the ultimate real estate platform! Buy or sell properties hassle-free with its user-friendly interface. List your property effortlessly, and explore countless options with a dynamic interactive map. Like your favourite residencies and secure your account with Auth0. Sleek UI powered by Mantine for a seamless experience. Get ready for the real estate adventure of a lifetime!</p>
            <h2>Deployment</h2>
            <p>Homyz Real Estate is now live on Vercel! Explore the website here: <a href="https://homyz-real-estate.vercel.app/">Homyz Real Estate Website</a>.</p>
            <h2>Key Features</h2>
            <ul>
                <li><strong>Discover Dream Properties</strong>: Uncover your perfect home with Homyz's powerful property search. Explore any location and its surroundings on an interactive map.</li>
                <li><strong>Love It, Save It</strong>: Fall in love with properties? Simply hit the heart button to save them to your personalized favourites list for future delight.</li>
                <li><strong>Fortress of Security</strong>: Your data is guarded by Auth0, ensuring a rock-solid and seamless user authentication experience.</li>
                <li><strong>Unlock Exclusive Features</strong>: Create an account, log in, and open the door to exclusive features, saving preferences, and personalized experiences.</li>
            </ul>
            <h2>Technologies</h2>
            <div className='technologies'>
                <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
                <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
                <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript" />
                <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
                <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express" />
                <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
                <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router" />
                <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
                <img src="https://img.shields.io/badge/json%20web%20tokens-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink" alt="JWT" />
                <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
                <img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" alt="VS Code" />
            </div>
            <ul>
                <li><strong>React</strong>: Empowering UI Magic. A dynamic JavaScript library for creating captivating user interfaces with ease.</li>
                <li><strong>Node.js</strong>: Unleashing Server-Side Potential. A powerful runtime environment enabling lightning-fast back-end development.</li>
                <li><strong>Express</strong>: Streamlined Web Applications. An agile Node.js framework simplifying server-side coding for web applications.</li>
                <li><strong>MongoDB</strong>: Rock-Solid Data Storage. A cutting-edge NoSQL database ensuring secure and reliable data storage.</li>
                <li><strong>Auth0</strong>: Fortified Authentication. A top-tier third-party service providing robust user authentication for enhanced security.</li>
                <li><strong>Mantine</strong>: Beauty in UI Components. A treasure trove of React components for crafting polished and stunning user interfaces.</li>
            </ul>
            <h2>Contact</h2>
            <p>Maiz - <a href="mailto:contact.maiznadeem@gmail.com">contact.maiznadeem@gmail.com</a></p>
            <p>Project Link: <a href="https://github.com/MaizNadeem/Real-Estate-Web">View Github</a></p>
        
            <hr />
            <h4 align="center">© M. Maiz Nadeem</h4>
        </div>
    );
}

export default FirstProjectHTML;
