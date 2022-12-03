import React, { useEffect } from 'react'
import { checkForWin } from '../helpers/helpers';

const  EndWindow = ({ correctLetters, wrongLetters, selectedWord, setPlaying, playAgain, animalChange, foodChange, tranChange, techChange, animalWords, foodWords, tranWords, techWords }) => {
    let endGameMessage= '';
    let currentlyPlaying = true;

    if(checkForWin(correctLetters, wrongLetters, selectedWord) === 'win' ){
        endGameMessage = 'Congratulations! You won!';
        currentlyPlaying = false;
    } else if(checkForWin(correctLetters, wrongLetters, selectedWord) === 'lose'){
        endGameMessage = 'Game over. You lost.';
        currentlyPlaying = false;
    }

    useEffect(() => setPlaying(currentlyPlaying));

    return(
        <>
            <div className="endwindow-container" style={endGameMessage !== '' ? {display:'flex'} : {}}>
                <div className="endwindow">
                    <h2>{endGameMessage}</h2>
                    <h3>Choose your next category</h3>
                    <button onClick={() => animalChange(animalWords)}>
                        Animals
                    </button>
                    <button onClick={() => foodChange(foodWords)}>
                        Food
                    </button>
                    <button onClick={() => tranChange(tranWords)}>
                        Transportation
                    </button>
                    <button onClick={() => techChange(techWords)}>
                        Technology
                    </button>
                    <h3>and...</h3>
                    <button onClick={playAgain}>Play Again</button>
                </div>
            </div>
        </>
    )
}

export default EndWindow;