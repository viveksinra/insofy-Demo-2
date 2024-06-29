import Link from "next/link";

export default function Process2() {
    const steps = [
        {
            step: "Step 01",
            title: "Partner with us",
            description: "Fill up the simple one-time form and you are set to go with the best earnings & benefits on offer!",
            imgSrc: "/assets/images/process/cus-pro1.png",
        },
        {
            step: "Step 02",
            title: "Expand your network & start earning",
            description: "We're here to simplify the process for you as a leading insurance broker!",
            imgSrc: "/assets/images/process/process-1-2.png",
        },
        {
            step: "Step 03",
            title: "Earn good commission",
            description: "Make more money per insurance policy! Too good to be true? Speak to our experts to know how!",
            imgSrc: "/assets/images/process/cus-commi.png",
        },
    ];

    return (
        <>
            <section style={{marginTop:"25px"}} className="process-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 m-auto">
                            <div className="section_title text-center type_four">
                                <h4 className="sm_title">Become A POSP Partner</h4>
                                <div className="title_whole">
                                    <h2  style={{color:"#148776"}} className="title">How It Works</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {steps.map((step, index) => (
                            <div 
                            // style={{ marginLeft: index % 2 === 0 ? "100px" : "0px", marginRight: index % 2 === 0 ? "100px" : "0px" }}
                             className="col-lg-4 col-md-6 col-sm-6 col-xs-12 my-3" key={index}>
                                <div className="process_box type_two type_three color_two hover_1_get">
                                    <div className="image_box hover_1">
                                        <img src={step.imgSrc} alt="img" className="img-fluid" />
                                        <div className="oh ho_1" />
                                        <div className="oh ho_2" />
                                        <div className="oh ho_3" />
                                        <div className="oh ho_4" />
                                        <div className="icon trans" />
                                    </div>
                                    <div className="content_no">
                                        <div className="con_top">
                                            <p className="step">{step.step}</p>
                                            <div className="title_22">
                                                <Link href="#">{step.title}</Link>
                                            </div>
                                        </div>
                                        <p>{step.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <style jsx>{`
                .process-section {
                    padding-left: 15px;
                    padding-right: 15px;
                }
                .custom-container {
                    max-width: 100%;
                    padding: 0 15px;
                }
                .process_box {
                    margin: 0 10px;
                }
                // @media (min-width: 768px) {
                //     .process-section {
                //         padding-left: 30px;
                //         padding-right: 30px;
                //     }
                //     .custom-container {
                //         max-width: 1680px;
                //         padding: 0 30px;
                //     }
                // }
            `}</style>
        </>
    );
}
