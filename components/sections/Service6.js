import Link from "next/link"

export default function Service6() {
    const services = [
        {
            icon: "flaticon-salary",
            title: "Timely Payouts",
            image: "/assets/images/service/clock_1.jpg",
            description: "Say goodbye to long waits for payments on policy issuance! With us, get TIMELY PAYOUT",
            linkText: "Start Earning Now",
            link: "/service"
        },
        {
            icon: "flaticon-management",
            title: "Fully Digital Process",
            image: "/assets/images/service/OnlinePaymentByBarsrsind.jpg",
            description: "No middlemen, no hidden charges - what you deserve is what you get! help you-wherever",
            linkText: "Sign Up",
            link: "/service"
        },
        {
            icon: "flaticon-business-trip",
            title: "Dedicated Support",
            image: "/assets/images/service/other-ser-3.png",
            description: "Stuck somewhere? No worries! Our dedicated support team is there to help you-wherever",
            linkText: "Register With Us",
            link: "/service"
        }
    ];

    return (
        <>
            <section className="service bg_light_2 bg_op_4" style={{ backgroundImage: 'url(assets/images/about-dot-bg.png)!important' }}>
                {/*-============spacing==========-*/}
                <div className="pd_top_50" />
                {/*-============spacing==========-*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section_title text-center type_five">
                                <h4 className="sm_title"> Why Choose Us</h4>
                                <div className="title_whole">
                                    <h2 style={{color:"#148776"}} className="title"> Advantages with Insofy POSP</h2>
                                </div>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_40" />
                            {/*-============spacing==========-*/}
                        </div>
                    </div>
                    <div className="service_post position-relative">
                        <div className="row">
                            {services.map((service, index) => (
                                <div
                                    className={`col-lg-4 col-md-6 col-sm-6 col-xs-12 my-3 service-box-${index}`}
                                    key={index}
                                >
                                    <div className="service_box type_six hover_1_get borenable color_two trans">
                                        <Link href={service.link} className="img_bx">
                                            <div className="image trans hover_1">
                                                <img src={service.image} style={{ height: '400px', width:"100%" }} className="img-fluid" alt="service" />
                                                <div className="oh ho_1" />
                                                <div className="oh ho_2" />
                                                <div className="oh ho_3" />
                                                <div className="oh ho_4" />
                                            </div>
                                        </Link>
                                        <div className="content">
                                            <h5>{service.title}</h5>
                                            <p style={{color:"#0243ab"}} className="trans">{service.description}</p>
                                            <Link href={service.link} className="theme_btn">
                                                {service.linkText} 
                                                <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 11L11 1L1 11ZM11 1H3.5H11ZM11 1V8.5V1Z" fill="#696E77"></path>
                                                    <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="#696E77" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/*-============spacing==========-*/}
                <div className="pd_bottom_50" />
                {/*-============spacing==========-*/}
            </section>
            <style jsx>{`
   

                @media (min-width: 992px) {
                    .service-box-0 {
                        padding-left: 0px;
                        padding-right: 60px;
                    }
                    .service-box-1 {
                        padding-left: 30px;
                        padding-right: 30px;
                    }
                    .service-box-2 {
                        padding-left: 60px;
                        padding-right: 0px;
                    }
                }
            `}</style>
        </>
    );
}
