import './choclate.css'

function Choclate({name,mailId,imgUrl})
{
    return(
        <div className='StyleC'>
            <img src={imgUrl} className="img" alt="img"/>
            <h1 className="topHeading">{name}</h1>
            <h3 className="topHeading">{mailId}</h3>
            </div>
        
    )
}
export default Choclate;