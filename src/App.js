//reference: https://www.youtube.com/watch?v=jj0W8tYX_q8

import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Image from './components/Image';
import WrongLetters from './components/WrongLetters';
import Notification from './components/Notification';
import Word from './components/Word';
import EndWindow from './components/EndWindow';
import {sameLetterNotification} from './helpers/helpers';

const animalWords = ['chameleon', 'orangutan', 'turtle', 'dolphin', 'penguin', 'toad',
    'giraffe', 'elephant', 'zebra', 'beaver', 'snail', 'bunny', 'hippopotamus', 'toucan', 'alligator'];
const foodWords = ['ketchup', 'strawberry', 'zucchini', 'doughnut', 'sandwich', 'spaghetti',
    'calzone', 'croissant', 'avocado', 'cauliflower', 'brownie', 'burrito', 'quesadilla', 'sundae', 'tomato'];
const tranWords = ['ship', 'automobile', 'airplane', 'train', 'scooter', 'sailboat', 'bicycle', 'shuttle',
'carriage', 'convertible', 'ferry', 'rowboat', 'subway', 'motorcycle', 'submarine'];
const techWords =['smartphone', 'webcam', 'microphone', 'projector', 'printer', 'drone', 'internet', 
'television', 'wifi', 'smartwatch', 'monitor', 'speaker', 'charger', 'router', 'radio']

let randomNumber = Math.floor(Math.random() * 15)
console.log(randomNumber);
let selectedWord = animalWords[randomNumber];

function App() {
  const [categoryName, setCategoryName] = useState('Animals');
  const [category, setCategory] = useState(animalWords);
  const [currentlyPlaying, setPlaying] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setshowNotification] = useState(false);

  useEffect(() => {
    const handlePlayerInput = event => {
      const {key, keyCode} = event;
        if (currentlyPlaying && keyCode >= 65 && keyCode <= 90) {
          const letter = key.toLowerCase();
          if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
              setCorrectLetters(currentLetters => [...currentLetters, letter]);
            } else {
              sameLetterNotification(setshowNotification);
            }
          } else {
            if (!wrongLetters.includes(letter)) {
              setWrongLetters(wrongLetters => [...wrongLetters, letter]);
            } else {
              sameLetterNotification(setshowNotification);
            }
          }
        }
    }
    window.addEventListener('keydown', handlePlayerInput);

    return () => window.removeEventListener('keydown', handlePlayerInput);

  }, [correctLetters, wrongLetters, currentlyPlaying]);

  function playAgain(){
    setPlaying(true);
    
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * 15);
    console.log(random);
    selectedWord = category[random];
  }

function animalChange(animalWords){
    let selectedCategory = [...category, animalWords];
    selectedCategory = animalWords;
    console.log(selectedCategory);
    setCategory(selectedCategory);
    setCategoryName('Animals');
}

function foodChange(foodWords){
    let selectedCategory = [...category, foodWords];
    selectedCategory = foodWords;
    console.log(selectedCategory);
    setCategory(selectedCategory);
    setCategoryName('Food');
}

function tranChange(tranWords){
  let selectedCategory = [...category, tranWords];
  selectedCategory = tranWords;
  console.log(selectedCategory);
  setCategory(selectedCategory);
  setCategoryName('Transportation');
}

function techChange(techWords){
  let selectedCategory = [...category, techWords];
  selectedCategory = techWords;
  console.log(selectedCategory);
  setCategory(selectedCategory);
  setCategoryName('Technology');
}

  return (
    <>
      <Header categoryName={categoryName}/>
      <div className='game-container'>
        <Image wrongLetters={wrongLetters}/>
        <WrongLetters wrongLetters={wrongLetters}/>
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <EndWindow correctLetters={correctLetters} wrongLetters={wrongLetters} 
      selectedWord={selectedWord} setPlaying={setPlaying} playAgain={playAgain} 
      animalChange={animalChange} foodChange={foodChange} tranChange={tranChange} 
      techChange={techChange} animalWords={animalWords} foodWords={foodWords} 
      tranWords={tranWords} techWords={techWords}/>
      <Notification showNotification={showNotification}/>
    </>
  );
}

export default App;
