import React from 'react';

import './projects.css';
import { AiOutlineLink } from 'react-icons/ai';
import { Button } from 'react-bootstrap';

const SecondProjectHTML = () => {
    return (
        <div className="html-container">

            <div className="button-container-modal">
                <Button className="custom-button text-only-modal" onClick={() => window.open("https://drive.google.com/file/d/1yGeEmzMSG1cvEjTx2Am3kkB4xIG3apDv/view?usp=drive_link", "_blank")}>
                    <span>Downlaod for Android</span>
                </Button>
                <Button className="custom-button icon-and-text-modal" onClick={() => window.open("https://github.com/MaizNadeem/Deliveroo-2.0.git", "_blank")}>
                    <AiOutlineLink size={20} style={{ marginRight: "10px" }} />
                    <>Go to Source</>
                </Button>
            </div>

            <p>Deliveroo Clone with React Native Expo (React Navigation, Redux, Tailwind CSS & Firebase)</p>

            <h2>Installation</h2>
            <p>To install the Deliveroo app on your Android device, follow these steps:</p>
            <ol>
                <li>Download the APK file from the following link: <a href="https://drive.google.com/file/d/1yGeEmzMSG1cvEjTx2Am3kkB4xIG3apDv/view?usp=drive_link">Download APK</a></li>
                <li>Once the APK is downloaded, open it on your Android device.</li>
                <li>If prompted, allow the installation of apps from unknown sources in your device settings.</li>
                <li>Follow the on-screen instructions to install the app.</li>
                <li>Once the installation is complete, you can open the app and start using the Deliveroo Clone with React Native!</li>
            </ol>
            <p>Please note that this installation method is for Android devices only.</p>

            <h2>About the Project</h2>
            <p>The "Deliveroo" app is a React Native Expo application for food delivery. It utilizes a variety of technologies to create a comprehensive solution. Here's an overview of the project:</p>

            <h3>Project Description</h3>
            <p>The "Deliveroo" app aims to provide a seamless food delivery experience to users. It offers a range of screens to facilitate different functionalities, including:</p>
            <ul>
                <li><strong>Splash Screen:</strong> Initial screen with branding and loading indicators.</li>
                <li><strong>Login and Signup Screens:</strong> Enable users to create accounts or authenticate for personalized features.</li>
                <li><strong>Dashboard Screen:</strong> Main screen to browse, search restaurants, explore menus, and place orders.</li>
                <li><strong>Basket Screen:</strong> Display items in the user's basket for order review and modification.</li>
                <li><strong>Profile Screen:</strong> Manage personal info, view order history, and customize preferences.</li>
                <li><strong>Restaurant Screen:</strong> Detailed info about a specific restaurant, including menu, reviews, and location.</li>
                <li><strong>Delivery Screen:</strong> Track the status and progress of ongoing food delivery, including estimated arrival time.</li>
            </ul>

            <h2>Screenshots</h2>
            <div style={{display: "flex", alignItems:"center" }}>
                <img src="https://raw.githubusercontent.com/MaizNadeem/Deliveroo-2.0/main/Screenshots/4.jpg" alt="Deliveroo Screenshot" style={{ margin: "10px", borderRadius:"10px" }} />
                <img src="https://raw.githubusercontent.com/MaizNadeem/Deliveroo-2.0/main/Screenshots/5.jpg" alt="Deliveroo Screenshot" style={{ marginRight: "10px", borderRadius:"10px" }} />
                <img src="https://raw.githubusercontent.com/MaizNadeem/Deliveroo-2.0/main/Screenshots/6.jpg" alt="Deliveroo Screenshot" style={{ borderRadius:"10px" }} />
                <img src="https://raw.githubusercontent.com/MaizNadeem/Deliveroo-2.0/main/Screenshots/7.jpg" alt="Deliveroo Screenshot" style={{ margin: "10px", borderRadius:"10px" }} />
            </div>

            <h2>Technologies</h2>
            <div className="technologies">
                <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Native" />
                <img src="https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37" alt="Expo" />
                <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
                <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
                <img src="https://img.shields.io/badge/Firebase-FFC900?style=for-the-badge&logo=Firebase&logoColor=white" alt="Firebase" />
                <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="NodeJS" />
                <img src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white" alt="Redux" />
                <img src="https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white" alt="Google Cloud" />
                <img src="https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql" alt="Apollo-GraphQL" />
                <img src="https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white" alt="Yarn" />
                <img src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white" alt="Visual Studio Code" />
                <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" />
                <img src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white" alt="Jest" />
            </div>

            <h3>Front-end:</h3>
            <ul>
                <li><strong>React Native:</strong> A popular JavaScript framework for building native mobile applications.</li>
                <li><strong>Redux:</strong> A state management library that helps manage the app's global state and facilitates data flow between components.</li>
                <li><strong>React Navigation:</strong> A routing and navigation library for React Native that allows seamless navigation between different screens.</li>
                <li><strong>Tailwind CSS:</strong> A utility-first CSS framework used for styling the app's user interface.</li>
            </ul>

            <h3>API:</h3>
            <ul>
                <li><strong>Google Maps (Cloud API):</strong> An API provided by Google Maps that enables integration with maps and location-based services.</li>
            </ul>

            <h3>Back-end (Firebase):</h3>
            <ul>
                <li><strong>Firestore:</strong> A NoSQL database provided by Firebase for storing and syncing data in real-time.</li>
                <li><strong>Firebase Authentication:</strong> Firebase service for user authentication, enabling users to sign up and log in securely.</li>
                <li><strong>Storage Bucket:</strong> Firebase's storage service for storing and serving user-generated content like images and videos.</li>
                <li><strong>Cloud Functions:</strong> Serverless functions that run in response to events in Firebase, allowing custom server-side logic.</li>
                <li><strong>GraphQL:</strong> A query language and runtime that enables efficient communication between the client and server, reducing unnecessary data transfers and improving performance.</li>
                <li><strong>Node JS:</strong> A server-side JavaScript runtime that powers the backend server of the app, handling authentication, data retrieval, and server-side operations.</li>
            </ul>

            <h2>Getting Started</h2>
            <h3>Run Locally</h3>
            <p>Install this project with expo using git-cli.</p>
            <ol>
                <li>Clone the project:</li>
                <pre><code>git clone https://github.com/MaizNadeem/Deliveroo-2.0.git</code></pre>
                <li>Change directory:</li>
                <pre><code>cd Deliveroo-2.0</code></pre>
                <li>Install dependencies:</li>
                <pre><code>npm install</code></pre>
                <li>Update the `DeliveryScreen.js` file with your own Google Maps API key:</li>
                <ol>
                    <li>Open the file located at `Deliveroo-2.0/screens/DeliveryScreen.js`.</li>
                    <li>Look for the line `const apiKey = process.env.GOOGLE_MAPS_API_KEY;`.</li>
                    <li>Replace `process.env.GOOGLE_MAPS_API_KEY` with your API key:</li>
                    <pre><code>const apiKey = "YOUR_API_KEY";</code></pre>
                    <li>Replace `"YOUR_API_KEY"` with your actual Google Maps API key obtained from Google Cloud Platform (cloud.google.com).</li>
                    <li>Save the file after making the changes.</li>
                </ol>
                <li>Remember to handle sensitive information securely and avoid sharing API keys publicly.</li>
                <li>It's all! You can start the expo server now for development:</li>
                <pre><code>npx expo start</code></pre>
            </ol>

            <h2>Contact</h2>
            <p>Maiz - <a href="mailto:contact.maiznadeem@gmail.com">contact.maiznadeem@gmail.com</a></p>
            <p>Project Link: <a href="https://github.com/MaizNadeem/Deliveroo-2.0.git">View Github</a></p>
            
            <hr />
            <h4 align="center">© M. Maiz Nadeem</h4>
        
        </div>
    );
}

export default SecondProjectHTML;
