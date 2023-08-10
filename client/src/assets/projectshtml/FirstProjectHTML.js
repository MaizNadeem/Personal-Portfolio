import React from 'react';

import './projects.css'
import { AiOutlineExpand, AiOutlineLink } from 'react-icons/ai';
import { Button } from 'react-bootstrap';

const FirstProjectHTML = () => {
    return (
        <div className="html-container">
            <div className="button-container-modal">
                <Button className="custom-button text-only-modal">
                    <a href='https://homyz-real-estate.vercel.app/'>View Live Demo</a>
                </Button>
                <Button className="custom-button icon-and-text-modal" >
                    <AiOutlineLink size={20} style={{ marginRight: "10px" }} />
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
            <h2>Run on Local Machine</h2>
            <ol>
                <li>Clone this repository to your local machine:
                    <pre><code>git clone https://github.com/MaizNadeem/Real-Estate-Web.git</code></pre>
                </li>
                <li>Navigate to the project directory:
                    <pre><code>cd Real-Estate-Web</code></pre>
                </li>
                <li>Install the required dependencies for both the client and server sides:
                    <pre><code>cd client
                    npm install
                    cd ../server
                    npm install</code></pre>
                </li>
                <li>Auth0 Configuration Changes:
                    <ul>
                        <li>In the server directory, go to <code>./config/auth0Config.js</code> and update the <code>issuerBaseURL</code> with the correct Auth0 issuer URL from your own App.</li>
                    </ul>
                </li>
                <li>MongoDB Configuration Changes:
                    <ul>
                        <li>In the server directory, create a <code>.env</code> file and set the following variables with your own MongoDB and Auth0 credentials:
                            <pre><code>PORT=8000
                            DATABASE_URL=your_mongodb_url_here
                            ISSUER_BASE_URL=your_auth0_issuer_url_here</code></pre>
                        </li>
                    </ul>
                </li>
                <li>Auth0 Configuration Changes on the client side:
                    <ul>
                        <li>In the client directory, go to <code>./config.js</code> and replace the <code>domain</code>, <code>clientID</code> with your own Auth0 app configuration.</li>
                    </ul>
                </li>
                <li>Update API URL:
                    <ul>
                        <li>In the client directory, go to <code>./src/utils/api.js</code> and update the <code>baseURL</code> to your own server URL or <code>http://localhost:8000/api</code>.</li>
                    </ul>
                </li>
                <li>Start the development servers for both the client and server sides:
                    <pre><code>cd client
                    npm run dev
                    cd ../server
                    npm start</code></pre>
                </li>
                <li>Open your web browser and visit <a href="http://localhost:3000">http://localhost:3000</a> to access the Homyz website. Additionally, you can access the server at <a href="http://localhost:8000">http://localhost:8000</a>.</li>
            </ol>
            <p>Now you can explore the Homyz Real Estate website locally and make any necessary changes to suit your requirements. If you have any questions or face any issues during the setup process, don't hesitate to seek assistance. Happy coding!</p>
            <h3>Contributing</h3>
            <p>Contributions to this project are welcomed. If you wish to contribute, please follow the standard GitHub workflow by creating pull requests and discussing any proposed changes via issues.</p>
            <h3>Reporting Issues</h3>
            <p>If you encounter any issues while using the Homyz website or have any suggestions for improvement, please open an issue on the GitHub repository. Your feedback is valuable to us, and we will address any reported issues promptly.</p>
            <h2>Contact</h2>
            <p>Maiz - <a href="mailto:contact.maiznadeem@gmail.com">contact.maiznadeem@gmail.com</a></p>
            <p>Project Link: <a href="https://github.com/MaizNadeem/Real-Estate-Web">View Github</a></p>
        </div>
    );
}

export default FirstProjectHTML;
