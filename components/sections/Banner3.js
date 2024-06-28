export default function Banner3() {
    return (
        <>
            <section className="single_banner style_one" style={{ marginTop: "-50px", marginBottom: "-60px" }}>
                <div className="content_box">
                    <div className="large-container">
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <div className="image">
                                    <img src="/assets/images/slider/newBan.png" style={{ height: '500px' }} className="img-fluid" alt="img" />
                                    <div className="row">
                                        <div className="col-12" style={{ backgroundColor: 'white', padding: '10px', borderRadius: '8px' }}>
                                            <div className="d-flex justify-content-around">
                                                <div className="service-card">
                                                    <img src="/assets/images/icons/car.png" alt="Car" />
                                                    <p>Car</p>
                                                </div>
                                                <div className="service-card">
                                                    <img src="/assets/images/icons/bike.png" alt="Bike" />
                                                    <p>Bike</p>
                                                </div>
                                                <div className="service-card">
                                                    <img src="/assets/images/icons/commercial.png" alt="Commercial" />
                                                    <p>Commercial</p>
                                                </div>
                                                <div className="service-card">
                                                    <img src="/assets/images/icons/health.png" alt="Health" />
                                                    <p>Health</p>
                                                </div>
                                                <div className="service-card">
                                                    <img src="/assets/images/icons/life.png" alt="Life" />
                                                    <p>Life</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1"></div>
                            <div className="col-lg-6">
                                <div className="section_title type_one">
                                    <div className="title_whole">
                                        <h2 className="title">
                                            Partner With Us,
                                            Grow Your Insurance
                                            Business Today
                                        </h2>
                                    </div>
                                </div>
                                <div className="newsteller_simple" style={{ marginTop: '30px' }}>
                                    <div className="input_group">
                                        <form method="post">
                                            <input type="number" name="MOBILE" placeholder="Your mobile number" required />
                                            <input type="submit" value="Sign up" />
                                        </form>
                                    </div>
                                </div>
                                <div className="review_box d-flex align-items-center">
                                    <div className="rimage">
                                        <img src="/assets/images/slider/review-girls.png" className="img-fluid" alt="img" />
                                    </div>
                                    <div className="section_title type_one">
                                        <div className="title_whole">
                                            <h2 className="title"> Excellent 12,534+ reviews</h2>
                                        </div>
                                        <p>4.8 of 5 <small><i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /></small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Inline CSS for the new component */}
            <style jsx>{`
                .service-card {
                    text-align: center;
                    padding: 10px;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    transition: transform 0.2s, box-shadow 0.2s;
                    width: 100px;
                    height: 100px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between; /* Changed from center to space-between */
                }
                .service-card img {
                    width: 50px;
                    height: 50px;
                }
                .service-card p {
                    margin: 0; /* Set margin to 0 */
                    color: #000;
                }
                .service-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
                }
            `}</style>
        </>
    );
}
