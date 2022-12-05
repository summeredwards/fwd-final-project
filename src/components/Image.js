import React from 'react'
import Hamburger1 from './../img/hamburger/burger1.png'
import Hamburger2 from './../img/hamburger/burger2.png'
import Hamburger3 from './../img/hamburger/burger3.png'
import Hamburger4 from './../img/hamburger/burger4.png'
import Hamburger5 from './../img/hamburger/burger5.png'
import Hamburger6 from './../img/hamburger/burger6.png'
import Dog1 from './../img/dog/dog1.png'
import Dog2 from './../img/dog/dog2.png'
import Dog3 from './../img/dog/dog3.png'
import Dog4 from './../img/dog/dog4.png'
import Dog5 from './../img/dog/dog5.png'
import Dog6 from './../img/dog/dog6.png'

const  Image = ({wrongLetters, categoryName}) => {
    const errors = wrongLetters.length;
    let theSource;
    let altText;

    if (errors === 1){
        if (categoryName === "Animals"){
            theSource = Dog1;
            altText = "dog body"
        }
        if (categoryName === "Food"){
            theSource = Hamburger1;
            altText = "bottom bun";
        }
        if (categoryName === "Transportation"){

        }
        if (categoryName === "Technology"){

        }
    }
    if (errors === 2){
        if (categoryName === "Animals"){
            theSource = Dog2;
            altText = "dog body and back legs"
        }
        if (categoryName === "Food"){
            theSource = Hamburger2;
            altText = "bottom bun with patty";
        }
        if (categoryName === "Transportation"){

        }
        if (categoryName === "Technology"){

        }
    }
    if (errors === 3){
        if (categoryName === "Animals"){
            theSource = Dog3;
            altText = "dog body and legs"
        }
        if (categoryName === "Food"){
            theSource = Hamburger3;
            altText = "bottom bun with patty and cheese";
        }
        if (categoryName === "Transportation"){

        }
        if (categoryName === "Technology"){

        }
    }
    if (errors === 4){
        if (categoryName === "Animals"){
            theSource = Dog4;
            altText = "dog body, legs, and head"
        }
        if (categoryName === "Food"){
            theSource = Hamburger4;
            altText = "bottom bun with patty, cheese, and lettuce";
        }
        if (categoryName === "Transportation"){

        }
        if (categoryName === "Technology"){

        }
    }
    if (errors === 5){
        if (categoryName === "Animals"){
            theSource = Dog5;
            altText = "a dog without its tail"
        }
        if (categoryName === "Food"){
            theSource = Hamburger5;
            altText = "bottom bun with patty, cheese, lettuce, and tomato";
        }
        if (categoryName === "Transportation"){

        }
        if (categoryName === "Technology"){

        }
    }
    if (errors === 6){
        if (categoryName === "Animals"){
            theSource = Dog6;
            altText = "a dog"
        }
        if (categoryName === "Food"){
            theSource = Hamburger6;
            altText = "a hamburger";
        }
        if (categoryName === "Transportation"){

        }
        if (categoryName === "Technology"){

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