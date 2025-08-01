import clsx from 'clsx'

export function LangList(props){

    const langEl = props.lang.map((lang,index) => {

        const doUsunieca = props.licznikBledneLitery > index
        const styleColor = {backgroundColor: lang.backgroundColor, color: lang.color}

        const langClassname = clsx('lang-btn', doUsunieca && 'lost')

        return (
        <button 
            style={styleColor} 
            className={langClassname}
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