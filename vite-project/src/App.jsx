import { useState } from 'react'
import { Header } from './components/Header'
import { GameStatus } from './components/GameStatus'
import { LangList } from './components/LangList'
import { languages } from './languages'
import { Word } from './components/Word'
import { Keyboard } from './components/Keyboard'
import { NewGame } from './components/NewGame'

export function App() {

  const [slowo, setSlowo] = useState('react')

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'

  return (
    <>
      <main>
        <Header />
        <GameStatus />
        <LangList lang={languages}/>
        <Word  slowo={slowo}/>
        <Keyboard alphabet={alphabet}/>
        <NewGame />
      </main>
    </>
  )
}
