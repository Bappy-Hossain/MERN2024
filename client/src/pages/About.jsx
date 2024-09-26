import Analytics from "../components/Analytics.jsx";
import {useAuth} from "../store/auth.jsx";

const About = () => {
    const {user} = useAuth();
    return(
        <>
            <main>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-content">
                            <p>Welcome, {user ? `${user.username} to our website!` : `to our website!`}</p>
                            <h1>Why Choose Us?</h1>
                            <p>
                                Expertise: Our team consists of experienced IT professionals who are passionate
                                about staying up-to-date with the latest industry trends.
                            </p>
                            <p>
                                Customization: We understand that every business is unique.That's why we create
                                solutions that are tailored to your specific needs and goals.
                            </p>
                            <p>
                                Customer-Centric Approach: We prioritize your satisfaction and provide top-notch
                                support to address your IT concerns.
                            </p>
                            <p>
                                Affordability: We offer competitive pricing without compromising on the quality
                                of our services.
                            </p>
                            <p>
                                Reliability: Count on us to be there when you need us. We're committed to ensuring
                                your IT environment is reliable and available 24/7.
                            </p>
                            <div className="btn btn-group">
                                <a href="/contact">
                                    <button className="btn">Connect Now</button>
                                </a>
                                <a href="/services">
                                    <button className="btn secondary-btn">Learn More</button>
                                </a>
                            </div>
                        </div>
                        <div className="hero-image">
                            <img src="/images/about.png" alt="coding buddies" width="400" height="500"/>
                        </div>
                    </div>
                </section>
            </main>
            <Analytics/>
        </>
    )
}
export default About;