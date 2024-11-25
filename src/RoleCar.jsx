
export default function RoleCar(){
    return(
        <>
            <div className="roleCar p-3">
            <div className="container">
                <div className="row">
                <div className="col-md-6 align-self-center">
                    <div className="row gap-4 roleCarCards">
                        <div className="card col-md-6 p-0 text-center">
                            <img
                                src="/cars/CG-1.png"
                                className="img-fluid"
                                alt=""
                            />
                            <div className="card-body">
                                <span>This is the description</span>
                            </div>
                        </div>
                        <div className="card col-md-6 p-0 text-center">
                            <img
                            src="/cars/CG-2.png"
                            className="img-fluid"
                            alt=""
                            />
                            <div className="card-body">
                                <span>This is the description</span>
                            </div>
                        </div>
                        <div className="card col-md-6 p-0 text-center">
                            <img
                            src="/cars/livan-9-infotainment.webp"
                            className="img-fluid"
                            alt=""
                            />
                            <div className="card-body">
                                <span>This is the description</span>
                            </div>
                        </div>
                        <div className="card col-md-6 p-0 text-center">
                            <img
                            src="/cars/livan-9-interior-top.webp"
                            className="img-fluid"
                            alt=""
                            />
                            <div className="card-body">
                                <span>This is the description</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="about-text p-4">
                        <h1 className="mb-4 fw-bold" style={{color: "var(--primary-color)"}}>
                            We Are Dedicated to Provide Quality Service
                        </h1>
                        <p style={{color: "var(--secondary-color)"}}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque fugiat sit iste 
                            dolores, qui minima sapiente voluptatem voluptatibus rerum consectetur 
                            dignissimos voluptatum vitae magnam repudiandae ea. Quam ipsum repellendus corrupti!
                        </p>
                        <img src="/cars/img2.jpg" className="img-fluid" alt="" />
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}