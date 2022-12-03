import React from 'react'

const  Header = ({categoryName}) => {
    return(
        <>
            <h1>Hangman</h1>
            <p>Enter letters using your keyboard to figure out the word!</p>
            <p>Category is: {categoryName}</p>
        </>
    )
}

export default Header;