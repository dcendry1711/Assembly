import { useState } from 'react'
import { Header } from './components/Header'
import { GameStatus } from './components/GameStatus'
import { LangList } from './components/LangList'
import { languages } from './languages'
import { Word } from './components/Word'
import { Keyboard } from './components/Keyboard'
import { NewGame } from './components/NewGame'
import Confetti from 'react-confetti'

export function App() {

  const [slowo, setSlowo] = useState('react')
  const [podaneLitery, setPodaneLitery] = useState([])

  const licznikBledneLitery = podaneLitery.filter( litera => !slowo.split('').includes(litera)).length

  const graPrzegrana = (licznikBledneLitery === (languages.length - 1))
  const graWygrana = slowo.split('').every( letter => podaneLitery.includes(letter) )

  const koniecGry = graPrzegrana || graWygrana
  
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const letterArr = alphabet.split('')

  function podajLitere(id){
   setPodaneLitery(prev => [...prev, id])
  }

  return (
    <>
      <main>
        <Header />

        <GameStatus />

        <LangList 
          lang={languages}
          podaneLitery={podaneLitery}
          slowo={slowo}
          licznikBledneLitery={licznikBledneLitery}
        />

        <Word 
          slowo={slowo}
          podaneLitery={podaneLitery}
        />

        <Keyboard 
          letterArr={letterArr} 
          podajLitere={podajLitere} 
          podaneLitery={podaneLitery}
          slowo={slowo}
          koniecGry={koniecGry}
        />
        {koniecGry && <NewGame />}
        {graWygrana && <Confetti />}
      </main>
    </>
  )
}
