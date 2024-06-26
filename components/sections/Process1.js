import Link from "next/link"


export default function Process1() {
    return (
        <>
            <section className="process-section  position-relative">
                {/*-============spacing==========-*/}
                <div className="pd_top_90" />
                {/*-============spacing==========-*/}
                <div className="ab_img_center height_264px pd_top_40">
                    <img src="/assets/images/arrow.png" className="img-fluid m-auto" alt="img" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section_title text-center type_one">
                                <h4 className="sm_title"> Become A POSP Partner</h4>
                                <div className="title_whole">
                                    <h2 className="title"> How It Works</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_60" />
                    {/*-============spacing==========-*/}
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            {/*-============spacing==========-*/}
                            <div className="pd_top_60" />
                            {/*-============spacing==========-*/}
                            <div className="process_box  type_one">
                                <div className="image_box">
                                    <img src="/assets/images/process/process-1-1.png" className="img-fluid" alt="img" />
                                    <p>Step 01</p>
                                </div>
                                <div className="content">
                                    <div className="icon trans">
                                        <i className=" flaticon-insurance" />
                                    </div>
                                    <div className="title_22">
                                        <Link href="#">
                                        Partner with us</Link>
                                    </div>
                                    <p>Fill up the simple one-time form and you are set to go with the best earnings & benefits on offer!

</p>
                                    <div className="border_bg" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="process_box  type_one">
                                <div className="image_box">
                                    <img src="/assets/images/process/process-1-2.png" className="img-fluid" alt="img" />
                                    <p>Step 02</p>
                                </div>
                                <div className="content">
                                    <div className="icon trans">
                                        <i className=" flaticon-interview" />
                                    </div>
                                    <div className="title_22">
                                        <Link href="#">
                                        Expand your network & start earning </Link>
                                    </div>
                                    <p>We're here to simplify the process for you as a leading insurance broker!

</p>
                                    <div className="border_bg" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            {/*-============spacing==========-*/}
                            <div className="pd_top_60" />
                            {/*-============spacing==========-*/}
                            <div className="process_box  type_one">
                                <div className="image_box">
                                    <img src="/assets/images/process/process-1-3.png" className="img-fluid" alt="img" />
                                    <p>Step 03</p>
                                </div>
                                <div className="content">
                                    <div className="icon trans">
                                        <i className=" flaticon-piggy-bank" />
                                    </div>
                                    <div className="title_22">
                                        <Link href="#">
                                        Earn good commission </Link>
                                    </div>
                                    <p>Make more money per insurance policy! Too good to be true? Speak to our experts to know how!

</p>
                                    <div className="border_bg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*-============spacing==========-*/}
    
                <div className="pd_bottom_10" />
                {/*-============spacing==========-*/}
            </section>

        </>
    )
}
