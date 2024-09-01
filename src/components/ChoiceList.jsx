import './../styles/choiceList.css'

export const ChoiceList = ({listImg, bold, description}) => {
    return(
        <div className='whyList'>
            <img className='listImg' src={ listImg } alt="" />
            <p className="bold">{ bold }</p>
            <p className="description">{ description }</p>
        </div>
    )
}