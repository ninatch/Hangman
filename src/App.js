import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Figure from './components/Figure'
import WrongLetters from './components/WrongLetters'
import Word from './components/Word'

const App = () => {

    const words = ['cat', 'puppy', 'chihuahua']
    const selectedWord = words[Math.floor(Math.random() * words.length)]
    
    const [correctLetters, setCorrectLetters] = useState([])
    const [wrongLetters, setWrongLetters] = useState([])


    useEffect(() => {
        const handleKeydown = event => {
            const { key, keyCode } = event;
            if (keyCode >= 65 && keyCode <= 90) {
                const letter = key.toLowerCase();
                if (selectedWord.includes(letter)) {
                    if (!correctLetters.includes(letter)) {
                        setCorrectLetters(currentLetters => [...currentLetters, letter]);
                    } else {
                        console.log('wrong letter')
                    }
                } else {
                    if (!wrongLetters.includes(letter)) {
                        setWrongLetters(currentLetters => [...currentLetters, letter]);
                    } else {
                        console.log('letter already used')
                    }
                }
            }
        }
        window.addEventListener('keydown', handleKeydown)
        
        return () => window.removeEventListener('keydown', handleKeydown)
        }, [correctLetters, wrongLetters])

    return (
        <>
            <Header />
            <Figure wrongLetters={wrongLetters}/>
            <WrongLetters wrongLetters={wrongLetters}/>
            <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
        </>
    )
}

export default App