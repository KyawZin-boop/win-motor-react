
export default function About() {
    return (
        <div className="about py-5">
            <div className="container">
                <div className="row">
                <div className="col-md-6">
                    <div className="about-text p-4">
                    <h1 className="mb-4 fw-bold" style={{color: "var(--primary-color)"}}>
                        Who We Are
                    </h1>
                    <p style={{color: "var(--secondary-color)"}}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Cupiditate rem cum enim itaque totam mollitia, labore vitae
                        saepe est magnam quibusdam non in iure nam. Doloribus aliquid
                        sunt laboriosam ab. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Magni, provident veritatis et error suscipit
                        eos, est velit dolores perferendis asperiores facere quas
                        laborum recusandae, delectus accusamus dicta maiores earum unde?
                    </p>
                    <p style={{color: "var(--secondary-color)"}}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
                        et vitae nemo suscipit mollitia ratione reiciendis dolor aliquid
                        quia, iste numquam quis doloremque temporibus ducimus, minima in
                        magni obcaecati odit.
                    </p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="about-img">
                    <img
                        src="/car_images/slide3.png"
                        className="img-fluid"
                        alt=""
                    />
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}