export function Word(props){

    const letterEl = props.slowo.split('').map( litera => {
        
        return(
            <span key={litera} className="pole-litery">{litera}</span>
        )
    })

    return(
        <section className="hasło">
            {letterEl}
        </section>
    )
}