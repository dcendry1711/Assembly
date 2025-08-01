export function Word(props){


    const letterEl = props.slowo.split('').map( (litera) => {

        const czyLiteraPoprawna = props.podaneLitery.includes(litera)
    
        return( 
            czyLiteraPoprawna ? <span key={litera} className="pole-litery">{litera}</span> 
                : 
            <span key={litera} className="pole-litery"></span> 
        )
    })

    return(
        <section className="hasło">
            {letterEl}
        </section>
    )
}