import "./customCard.css";

export default function CustomCard({title,content,image,backgroundColor,textColor}){
    return (
        <div className="customCard "
        style={{backgroundColor:backgroundColor,color:textColor}}>
        <div className="nor">
        <img className="thisImage1" src={image} alt="" />
        </div>
        <div className="carContent">
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
        </div>
    );
}