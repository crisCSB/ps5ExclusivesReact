
export default function Intro(){
    return (
    <div id="carouselExampleInterval" className="carousel slide mt-5" data-bs-ride="carousel">
    <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
        <img src="https://media3.giphy.com/media/O8hMm6b18r9zabvup6/giphy.gif" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
        <img src="https://wallpapercave.com/wp/wp9250684.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
        <img src="https://blog.playstation.com/tachyon/2023/07/1876acc018df537d3f409db4ddd302326916ec93-scaled.jpg" className="d-block w-100" alt="..." />
        </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>
    </div>
    );
}