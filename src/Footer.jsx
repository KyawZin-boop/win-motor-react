
export default function Footer() {
    return (
        <div className="footer">
            <div className="footerDiv p-4">
                <div className="contact text-white">
                <h3 className="mb-4">Contact Us</h3>
                <p className="fs-4" style={{color: "var(--primary-color)"}}>
                    Win Motor Myanamr Company Limited
                </p>
                <p style={{color: "#ffeb3b"}}>
                    No.11, 1st Floor, Pyay Street, Yangon, Myanmar
                </p>
                <h3 className="mb-4" style={{color: "var(--primary-color)"}}>
                    +95 9422243666
                </h3>
                <p style={{color: "#ffeb3b"}}>Email: 6V0f1@example.com</p>
                <p style={{color: "#ffeb3b"}}>www.winmotormyanmar.com</p>
                <div></div>
                </div>
                <div className="links text-white">
                <h3 className="mb-4" style={{color: "#ffeb3b"}}>Links</h3>
                <p><a href="#" className="nav-link text-white">Home</a></p>
                <p><a href="#" className="nav-link text-white">About</a></p>
                <p><a href="#" className="nav-link text-white">Contact</a></p>
                <p><a href="#" className="nav-link text-white">Privacy Policy</a></p>
                <p><a href="#" className="nav-link text-white">Terms & Conditions</a></p>
                </div>
                <div className="map">
                <div
                    style={{
                    position: "relative",
                    overflow: "hidden",
                    paddingTop: "56.25%",
                    height: 0,
                    maxWidth: "100%",
                    height: "auto",
                    }}
                >
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2700.367682605706!2d96.13298961277937!3d16.831484929141265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ssg!4v1731505753092!5m2!1sen!2ssg"
                    width="600"
                    height="450"
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        border: 0,
                    }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    >
                    </iframe>
                </div>
                </div>
            </div>
        </div>
    )
}