import React from 'react'

import './projects.css';
import { AiOutlineLink } from 'react-icons/ai';
import { Button } from 'react-bootstrap';

const FourthProjectHTML = () => {
    return (
        <div className='html-container'>

            <div className="button-container-modal">
                <Button className="custom-button icon-and-text-modal" onClick={() => window.open("https://github.com/MaizNadeem/NFT-Marketplace.git", "_blank")}>
                    <AiOutlineLink size={20} style={{ marginRight: "10px" }} />
                    <>Go to Source</>
                </Button>
            </div>

            <p>This repository contains the source code for a modern NFT Marketplace app built using React Native. The app allows users to explore and trade various digital assets as non-fungible tokens (NFTs).</p>

            <h2>Features</h2>

            <ul>
                <li>Browse and discover a wide range of NFTs from different artists and creators.</li>
                <li>Buy and sell NFTs securely using integrated cryptocurrency payments.</li>
                <li>Create and mint your own NFTs to showcase your digital creations.</li>
                <li>Connect with a vibrant community of artists, collectors, and enthusiasts.</li>
            </ul>

            <h2>Screenshots</h2>

            <div style={{textAlign: "center"}} className='nft-screenshots'>
                <img src="https://raw.githubusercontent.com/MaizNadeem/NFT-Marketplace/main/images/Image%201.jpg" alt="Home Page" style={{marginRight: "20px"}} />
                <img src="https://raw.githubusercontent.com/MaizNadeem/NFT-Marketplace/main/images/Image%202.jpg" alt="Details Page" />
            </div>

            <h2>Download</h2>

            <p>You can download the Android build of the app from here: <a href="#">NFT Marketplace App (apk)</a></p>

            <h2>Deployment</h2>

            <p>Follow the steps below to run the app locally on your own device:</p>

            <ol>
                <li>Clone this repository.</li>
                <li>Install the required dependencies using <code>npm install</code> or <code>yarn install</code>.</li>
                <li>Run the app on an emulator or physical device using <code>npm start</code> or <code>yarn start</code>.</li>
            </ol>

            <h2>Technologies Used</h2>

            <ul>
                <li>React Native Expo</li>
                <li>Firebase Realtime Database</li>
                <li>React Navigation</li>
            </ul>

            <h2>Contributing</h2>

            <p>Contributions are welcomed! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.</p>

            <hr />

            <h4 align="center">© M. Maiz Nadeem</h4>

        </div>
    )
}

export default FourthProjectHTML