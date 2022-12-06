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
import Turntable1 from './../img/turntable/table1.png'
import Turntable2 from './../img/turntable/table2.png'
import Turntable3 from './../img/turntable/table3.png'
import Turntable4 from './../img/turntable/table4.png'
import Turntable5 from './../img/turntable/table5.png'
import Turntable6 from './../img/turntable/table6.png'
import Truck1 from './../img/truck/truck1.png'
import Truck2 from './../img/truck/truck2.png'
import Truck3 from './../img/truck/truck3.png'
import Truck4 from './../img/truck/truck4.png'
import Truck5 from './../img/truck/truck5.png'
import Truck6 from './../img/truck/truck6.png'

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
            theSource = Truck1;
            altText = "trailer";
        }
        if (categoryName === "Technology"){
            theSource = Turntable1;
            altText = "turntable body";
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
            theSource = Truck2;
            altText = "front and back of a truck";
        }
        if (categoryName === "Technology"){
            theSource = Turntable2;
            altText = "turntable body and tone arm joint";
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
            theSource = Truck3;
            altText = "front and back of a truck with its back wheels";
        }
        if (categoryName === "Technology"){
            theSource = Turntable3;
            altText = "turntable body and tone arm";
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
            theSource = Truck3;
            altText = "front and back of a truck with its front and back wheels";
        }
        if (categoryName === "Technology"){
            theSource = Turntable4;
            altText = "turntable body, tone arm, and vinyl record";
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
            theSource = Truck5;
            altText = "front and back of a truck with front and back wheels and windows";
        }
        if (categoryName === "Technology"){
            theSource = Turntable5;
            altText = "turntable body, tone arm, vinyl record, and volume slider";
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
            theSource = Truck6;
            altText = "front and back of a truck with front and back wheels, windows, headlights, and a door handle";
        }
        if (categoryName === "Technology"){
            theSource = Turntable6;
            altText = "turntable with slider and buttons";
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