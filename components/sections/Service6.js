import Link from "next/link"

export default function Service6() {
    const services = [
        {
            icon: "flaticon-salary",
            title: "Timely Payouts",
            image: "/assets/images/service/other-ser-1.png",
            description: "Say goodbye to long waits for payments on policy issuance! With us, get TIMELY PAYOUT",
            linkText: "Start Earning Now",
            link: "/service"
        },
        {
            icon: "flaticon-management",
            title: "Fully Digital Process",
            image: "/assets/images/service/other-ser-2.jpg",
            description: "No middlemen, no hidden charges - what you deserve is what you get! View & track your payments with your unique ID!",
            linkText: "Sign Up",
            link: "/service"
        },
        {
            icon: "flaticon-business-trip",
            title: "Dedicated Support",
            image: "/assets/images/service/other-ser-3.jpg",
            description: "Stuck somewhere? No worries! Our dedicated support team is there to help you-wherever, whenever!",
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
                                    <h2 className="title"> Advantages with Insofy POSP</h2>
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
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6" key={index}>
                                    <div className="service_box type_six hover_1_get borenable color_two trans">
                                        <div className="d-flex trans">
                                            <div className="icon trans">
                                                <i className={` ${service.icon} trans`} />
                                            </div>
                                            <div className="title_22">
                                                <Link href={service.link}>{service.title}</Link>
                                            </div>
                                        </div>
                                        <Link href={service.link} className="img_bx">
                                            <div className="image trans hover_1">
                                                <img src={service.image} className="img-fluid" alt="service" />
                                                <div className="oh ho_1" />
                                                <div className="oh ho_2" />
                                                <div className="oh ho_3" />
                                                <div className="oh ho_4" />
                                            </div>
                                        </Link>
                                        <div className="content">
                                            <p className="trans">{service.description}</p>
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
        </>
    );
}
