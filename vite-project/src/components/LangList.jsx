export function LangList(props){

    const langEl = props.lang.map((lang,index) => {

        const styleColor = {backgroundColor: lang.backgroundColor, color: lang.color}

        return (
        <button 
            style={styleColor} 
            className="lang-btn" 
            id={index} 
            key={lang.name}>
                {lang.name}
            </button> )
    })

    return(
        <section className="sekcja-jezyki">
          {langEl}
        </section>
    )
}