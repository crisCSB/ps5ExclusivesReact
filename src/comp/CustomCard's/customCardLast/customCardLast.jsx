import "./customCardLast.css";

export default function CustomCardLast({image="",title="",content=""}){
    return (
    <div className="text-center">
    <img className="circle" src={image} />

    <div className="des mt-3">
    <h1>{title}</h1>
    <p>{content}</p>
    </div>
    </div>);
}