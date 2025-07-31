export function Keyboard(props){

    const letterArr = props.alphabet.split('')

    const keypad = letterArr.map( letter => {

        const stylKlawisza = {backgroundColor: '#FCBA29'}

        return (
            <button className="klawisz" style={stylKlawisza} key={letter}>{letter}</button>
        )
    })

    return(
        <section className="klawiatura">
           {keypad}
        </section>
    )
}