
import "../App.css"
import React, { useState, useEffect } from 'react';
import Button from './Button'

const NumberCounting = () => {
  const [title, setTitle] = useState('Guesse A Number');
  const [remaining, setRemaining] = useState('');
  const [remainigNumber, setRemainigNumber] = useState(3);
  const [loss, setLoss] = useState(false);
  const [userGuess, setUserGuess] = useState('');
  const [rightuserGuess, setRightuserGuess] = useState(0);
  const [theme, setTheme] = useState('blue')

  useEffect(() => {
    setRightuserGuess(Math.floor(Math.random() * 10));
  }, [loss]);

  useEffect(() => {
    if (remainigNumber === 0) {
      setLoss(true);
      setRemainigNumber(3)
      setTitle('You Lose!')
      setUserGuess("")
      setTheme('red')
    }
  }, [remainigNumber]);

  const randomNumber = (userGuess) => {
    if (remainigNumber > 0) {
      setRemainigNumber(prev => prev - 1);
      if (userGuess === rightuserGuess) {
        setTitle('You Won');
        setRemainigNumber(3)
        setTheme('orange')
        setRemaining('Play Again');
        setLoss(true);
        
      } else {
        setRemaining('Play');
      }
    }
    else {
      setLoss(true);
    }
  }
  const startAgainButton = () => {
    setTitle('GUESS A NUMBER');
    setLoss(false);
    setRemaining('Play Again');
  };
  return (
    <div >
      <div>{title}</div>
      <div>
        {(!loss) ? (<p>You have {remainigNumber} Guesses.</p>) : (<p>The Right Answer is {rightuserGuess}</p>)}
      </div>
      {loss ? (
        <div>
          <Button onClick={() => startAgainButton()}>{remaining}</Button>
        </div>
      ) : (
        <div>
          <Button onClick={() => randomNumber(0)}>0</Button>
          <Button onClick={() => randomNumber(1)}>1</Button>
          <Button onClick={() => randomNumber(2)}>2</Button>
          <Button onClick={() => randomNumber(3)}>3</Button>
          <Button onClick={() => randomNumber(4)}>4</Button>
          <Button onClick={() => randomNumber(5)}>5</Button>
          <Button onClick={() => randomNumber(6)}>6</Button>
          <Button onClick={() => randomNumber(7)}>7</Button>
          <Button onClick={() => randomNumber(8)}>8</Button>
          <Button onClick={() => randomNumber(9)}>9</Button>
        </div>
      )}
    </div>
  );
}
export default NumberCounting;

































































