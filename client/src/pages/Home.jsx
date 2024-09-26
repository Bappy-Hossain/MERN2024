import Analytics from "../components/Analytics.jsx";

const Home = () => {
    return(
        <>
            <main>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-content">
                            <p>We are the World best IT Company</p>
                            <h1>Welcome To Bappy Ahmed</h1>
                            <p>Are you ready to take your business to the next level with cutting-edge IT solutions?
                                Look no further!At Bappy Ahmed,
                                we specialize in providing innovative IT services & solutions tailored to meet your
                                unique needs.</p>
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
                            <img src="/images/home.png" alt="coding together" width="400" height="500"/>
                        </div>
                    </div>
                </section>
            </main>

            <Analytics/>

            <section className="section-hero">
                <div className="container grid grid-two-cols">
                    <div className="hero-image">
                        <img src="/images/design.png" alt="coding together" width="400" height="500"/>
                    </div>
                    <div className="hero-content">
                        <p>We are here to help you</p>
                        <h1>Get Started Today</h1>
                        <p>Are you ready to take your business to the next level with cutting-edge IT solutions? Look no
                            further!At Bappy Ahmed,
                            we specialize in providing innovative IT services & solutions tailored to meet your unique
                            needs.</p>
                        <div className="btn btn-group">
                            <a href="/contact">
                                <button className="btn">Connect Now</button>
                            </a>
                            <a href="/services">
                                <button className="btn secondary-btn">Learn More</button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home;