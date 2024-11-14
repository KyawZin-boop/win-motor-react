
export default function Slider() {
    return (
        <div className="slider">
        <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
        >
            <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="slide-text">
                <span>Porsche 911 GT3</span>
                </div>
                <img
                src="/car_images/slider3.jpeg"
                className="d-block w-100"
                alt="slider_image"
                />
            </div>
            <div className="carousel-item">
                <div className="slide-text">
                <span>BMW 330i M Sport</span>
                </div>
                <img
                src="/car_images/slider1.jpeg"
                className="d-block w-100"
                alt="slider_image"
                />
            </div>
            <div className="carousel-item">
                <div className="slide-text">
                <span>Nissan GTR R35</span>
                </div>
                <img
                src="/car_images/slider2.jpeg"
                className="d-block w-100"
                alt="slider_image"
                />
            </div>
            </div>
            <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
            >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
            </button>
            <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
            >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
            </button>
        </div>
        </div>
    )
}