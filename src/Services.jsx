
export default function Services() {
    return (
        <div className="services">
            <div className="container py-5">
                <h1
                className="text-center mb-4 fw-bold"
                style={{color: "var(--primary-color)", textShadow: "2px 2px 2px #b3b3b3"}}
                >
                Our Services
                </h1>
                <div className="row">
                <div className="col-md-4">
                    <div className="service-item text-center p-4">
                    <img
                        className="img-fluid"
                        src="/services_images/delivery.jpg"
                        alt=""
                    />
                    <h3 className="mt-4" style={{color: "var(--primary-color)"}}>
                        Fast Delivery
                    </h3>
                    <p style={{color: "var(--secondary-color)"}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quibusdam, officiis.
                    </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="service-item text-center p-4">
                    <img
                        className="img-fluid"
                        src="/services_images/support.jpg"
                        alt=""
                    />
                    <h3 className="mt-4" style={{color: "var(--primary-color)"}}>
                        24/7 Support
                    </h3>
                    <p style={{color: "var(--secondary-color)"}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quibusdam, officiis.
                    </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="service-item text-center p-4">
                    <img
                        className="img-fluid"
                        src="/services_images/payment.jpg"
                        alt=""
                    />
                    <h3 className="mt-4" style={{color: "var(--primary-color)"}}>
                        Easy Payment
                    </h3>
                    <p style={{color: "var(--secondary-color)"}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quibusdam, officiis.
                    </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}