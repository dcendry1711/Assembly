import clsx from 'clsx'

export function Keyboard(props){

    const keyboard = props.letterArr.map( (letter) => {

        const czyPodanoLitere = props.podaneLitery.includes(letter)
        const czyLiteraPrawidlowa = czyPodanoLitere && props.slowo.includes(letter)
        const czyLiteraZla = czyPodanoLitere && !props.slowo.includes(letter)
        
        const classNameKlawisz = clsx('klawisz', czyLiteraPrawidlowa && 'poprawny', czyLiteraZla && 'niepoprawny')
    
        return (
            <button 
                key={letter} 
                className={classNameKlawisz}
                onClick={() => props.podajLitere(letter)}
                disabled={props.koniecGry}
                >
                    {letter}
                </button>
        )
    })

    return(
        <section className="klawiatura">
            {keyboard}
        </section>
    )
}