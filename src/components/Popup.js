import React, { useEffect } from 'react'
import { checkWin } from '../helpers/helpers';

const  Popup = ({ correctLetters, wrongLetters, selectedWord, setPlayable, playAgain }) => {
    let finalMessage= '';
    let playable = true;

    if(checkWin(correctLetters, wrongLetters, selectedWord) === 'win' ){
        finalMessage = 'Congratulations! You won!';
        playable = false;
    } else if(checkWin(correctLetters, wrongLetters, selectedWord) === 'lose'){
        finalMessage = 'Game over. You lost.';
        playable = false;
    }

    useEffect(() => setPlayable(playable));

    return(
        <>
            <div className="popup-container" style={finalMessage !== '' ? {display:'flex'} : {}}>
                <div className="popup">
                    <h2>{finalMessage}</h2>
                    <button onClick={playAgain}>Play Again</button>
                </div>
            </div>
        </>
    )
}

export default Popup;