import React from 'react'

import './projects.css';
import { AiOutlineLink } from 'react-icons/ai';
import { Button } from 'react-bootstrap';

const FifthProjectHTML = () => {
    return (
        <div className='html-container'>

            <div className="button-container-modal">
                <Button className="custom-button text-only-modal" onClick={() => window.open("https://maiznadeem.github.io/Pig-Game/", "_blank")}>
                    <span>View Live Demo</span>
                </Button>
                <Button className="custom-button icon-and-text-modal" onClick={() => window.open("https://github.com/MaizNadeem/Pig-Game.git", "_blank")}>
                    <AiOutlineLink size={20} style={{ marginRight: "10px" }} />
                    <>Go to Source</>
                </Button>
            </div>

            <h2>Demo</h2>

            <p>Play it here: <a href="https://maiznadeem.github.io/Pig-Game/">https://maiznadeem.github.io/Pig-Game/</a></p>

            <h2>Online Multiplayer Pig Dice Game Instructions:</h2>

            <h3>Objective:</h3>
            <p>Be the first player to reach 100 points by rolling a dice and accumulating points, but be careful not to roll a 1, which will cause you to lose your accumulated points for that turn.</p>

            <h3>Setup:</h3>
            <ol>
                <li>Open the online multiplayer pig dice game.</li>
                <li>Click on "New Game" to start a new match. All scores will be reset to zero.</li>
            </ol>

            <h3>Gameplay:</h3>
            <ol>
                <li>The game is played in turns, with each player taking their turn in sequence.</li>
                <li>On your turn, a single dice will be displayed.</li>
                <li>Click the dice to roll it. The value rolled will determine your score for that turn.</li>
                <li>The points you accumulate on your turn will be shown in a temporary box.</li>
            </ol>

            <h3>Rules:</h3>
            <ol>
                <li>If you roll a 1 on the dice, all the points in your temporary box are lost, and your turn ends. It becomes the next player's turn.</li>
                <li>To continue accumulating points, you can choose to roll the dice again by clicking it.</li>
                <li>Each time you roll the dice and get a non-1 value, the points are added to your temporary box.</li>
                <li>You can keep rolling the dice and accumulating points until you decide to "Hold."</li>
                <li>If you choose to "Hold," all the points in your temporary box are added to your total score, and your turn ends. The next player's turn begins.</li>
                <li>Players switch turns whenever one player decides to "Hold" or rolls a 1.</li>
            </ol>

            <h3>Winning:</h3>
            <p>The first player to reach or exceed 100 points wins the game. As soon as a player reaches 100 points, the game ends, and that player is declared the winner.</p>

            <h3>Note:</h3>
            <p>This game is designed for multiplayer, so make sure to take turns with other players. Pay attention to your accumulated points and the risk of rolling a 1 to make strategic decisions.</p>

            <hr />
            <h4 align="center">© M. Maiz Nadeem</h4>

        </div>
    )
}

export default FifthProjectHTML