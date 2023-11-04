import "./cardImage.css";

export default function CardImage({title="", content="",image=""}){
    return (
    <div className="card text-bg-dark ">
    <img src={image} className="card-img" ></img>
    <div className="card-img-overlay">
    <h5 className="card-title display-1">{title}</h5>
    <p className="card-text fs-3">{content}</p>
    </div>
    </div>
);
}