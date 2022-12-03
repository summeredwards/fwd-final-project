import React from 'react'
import Hamburger1 from './../img/hamburger/burger1.png'
import Hamburger2 from './../img/hamburger/burger2.png'
import Hamburger3 from './../img/hamburger/burger3.png'
import Hamburger4 from './../img/hamburger/burger4.png'
import Hamburger5 from './../img/hamburger/burger5.png'
import Hamburger6 from './../img/hamburger/burger6.png'

const  Image = ({wrongLetters, categoryName}) => {
    const errors = wrongLetters.length;
    let theSource;
    let altText;

    if (errors == 1){
        if (categoryName == "Animals"){
            
        }
        if (categoryName == "Food"){
            theSource = Hamburger1;
            altText = "bottom bun";
        }
        if (categoryName == "Trasportation"){

        }
        if (categoryName == "Technology"){

        }
    }
    if (errors == 2){
        if (categoryName == "Animals"){
            
        }
        if (categoryName == "Food"){
            theSource = Hamburger2;
            altText = "bottom bun with patty";
        }
        if (categoryName == "Trasportation"){

        }
        if (categoryName == "Technology"){

        }
    }
    if (errors == 3){
        if (categoryName == "Animals"){
            
        }
        if (categoryName == "Food"){
            theSource = Hamburger3;
            altText = "bottom bun with patty and cheese";
        }
        if (categoryName == "Trasportation"){

        }
        if (categoryName == "Technology"){

        }
    }
    if (errors == 4){
        if (categoryName == "Animals"){
            
        }
        if (categoryName == "Food"){
            theSource = Hamburger4;
            altText = "bottom bun with patty, cheese, and lettuce";
        }
        if (categoryName == "Trasportation"){

        }
        if (categoryName == "Technology"){

        }
    }
    if (errors == 5){
        if (categoryName == "Animals"){
            
        }
        if (categoryName == "Food"){
            theSource = Hamburger5;
            altText = "bottom bun with patty, cheese, lettuce, and tomato";
        }
        if (categoryName == "Trasportation"){

        }
        if (categoryName == "Technology"){

        }
    }
    if (errors == 6){
        if (categoryName == "Animals"){
            
        }
        if (categoryName == "Food"){
            theSource = Hamburger6;
            altText = "a hamburger";
        }
        if (categoryName == "Trasportation"){

        }
        if (categoryName == "Technology"){

        }
    }

    return(
        <>
        <div className="image-container">
            {errors > 0 && <img className="images" src={theSource} alt={altText} />}
        </div>
        </>
    )
}

export default Image;