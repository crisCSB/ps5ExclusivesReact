import "./customCardInverted.css";

export default function CustomCardInverted({title,content,image,backgroundColor,textColor}){
    return(
        <div className="customCardInverted" 
        style={{backgroundColor:backgroundColor,color:textColor}}>
        <div className="carContent">
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
        <div className="rev">
        <img src={image} className="thisImage2" alt="" />
        </div>
        </div>
    )
}