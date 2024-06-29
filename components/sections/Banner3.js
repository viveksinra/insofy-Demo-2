export default function Banner3() {
    return (
        <>
            <section className="single_banner style_one bg_light_2" style={{ marginTop: "-50px", marginBottom: "-60px",}}>
                <div className="content_box">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <div className="image">
                                    <img src="/assets/images/slider/newBan.png" style={{ height: '500px' }} className="img-fluid" alt="img" />
                                    
                                </div>
                            </div>
                            <div className="col-lg-1"></div>
                            <div className="col-lg-6">
                                <div className="section_title type_one">
                                    <div className="title_whole">
                                    <h2 className="title" style={{ color: '#158777' }}>
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
                                {/* <div className="review_box d-flex align-items-center">
                                    <div className="rimage">
                                        <img src="/assets/images/slider/review-girls.png" className="img-fluid" alt="img" />
                                    </div>
                                    <div className="section_title type_one">
                                        <div className="title_whole">
                                            <h2 className="title"> Excellent 12,534+ reviews</h2>
                                        </div>
                                        <p>4.8 of 5 <small><i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /></small></p>
                                    </div>
                                </div> */}
                                <div className="row">
                                        <div className="col-12" style={{  padding: '10px', borderRadius: '8px' }}>
                                            <div className="d-flex justify-content-around">
                                                <div className="service-card" >
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
                                                <div className="service-card life">
                                                    <img src="/assets/images/icons/life.png" alt="Life" />
                                                    <p>Life</p>
                                                    <div className="overlay">
                                                        <p style={{color:"white"}}>Coming Soon</p>
                                                    </div>
                                                </div>
                                            </div>
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
                    justify-content: center;
                    position: relative;
                    // background-color: #d4d4d4;
                }
                .service-card img {
                    width: 70px;
                    height: 80px;
                }
                .service-card p {
                    margin: 0;
                    font-size: 0.8em;
                    color: #000;
                }
                .service-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
                }
                .service-card.life:hover .overlay {
                    display: flex;
                }
                .overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.7);
                    color: white;
                    display: none;
                    align-items: center;
                    justify-content: center;
                    border-radius: 8px;
                    transition: display 0.2s;
                    font-weight: bold;
                    font-size: 1.2em;
                }
            `}</style>
        </>
    );
}
