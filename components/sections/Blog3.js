import Link from "next/link"


export default function Blog3() {
    return (
        <>
            <section className="news-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto">
                            <div className="section_title text-center type_four">
                                <h4 className="sm_title"> Latest News &amp; Blog</h4>
                                <div className="title_whole">
                                    <h2 className="title"> Read Our Latest Articles</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_30" />
                    {/*-============spacing==========-*/}
                    <div className="blog_post position-relative">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="blog_box type_two type_three type_four trans hover_1_get hover_1 color_two">
                                    <img src="/assets/images/blog/blog-9-min.png" className="img-fluid" alt="blog" />
                                    <div className="oh ho_1" />
                                    <div className="oh ho_2" />
                                    <div className="oh ho_3" />
                                    <div className="oh ho_4" />
                                    <div className="blog_inner trans">
                                        <div className="content">
                                            <div className="d-flex top_c align-items-center">
                                                <span className="date_tm"><i className="fi-rr-calendar" />
                                                    <time className="date published" >
                                                        Jan 3, {new Date().getFullYear()}
                                                    </time>
                                                </span>
                                            </div>
                                            <h4 className="title_22">
                                                <Link href="/blog">
                                                    Former insures only the marine perils
                                                </Link>
                                            </h4>
                                            <p className="descs">
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem…
                                            </p>
                                            <div className="bottm_contet d-flex align-items-center">
                                                <div className="d-flex authour align-items-center">
                                                    <img src="/assets/images/gavatar.png" className="gav" alt="blog" />
                                                    Bradley R Grady
                                                </div>
                                                <Link href="/blog" className="rd_more">
                                                    Read More <i className="fi-rr-arrow-small-right" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="blog_box type_two type_three type_four trans hover_1_get hover_1 color_two">
                                    <img src="/assets/images/blog/blog-8-min.png" className="img-fluid" alt="blog" />
                                    <div className="oh ho_1" />
                                    <div className="oh ho_2" />
                                    <div className="oh ho_3" />
                                    <div className="oh ho_4" />
                                    <div className="blog_inner trans">
                                        <div className="content">
                                            <div className="d-flex top_c align-items-center">
                                                <span className="date_tm">
                                                    <i className="fi-rr-calendar" />
                                                    <time className="date published" >
                                                        Jan 3, {new Date().getFullYear()}
                                                    </time>
                                                </span>
                                            </div>
                                            <h4 className="title_22">
                                                <Link href="/blog">
                                                    Insurance covers risk of fire absence
                                                </Link>
                                            </h4>
                                            <p className="descs">
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem…
                                            </p>
                                            <div className="bottm_contet d-flex align-items-center">
                                                <div className="d-flex authour align-items-center">
                                                    <img src="/assets/images/gavatar.png" className="gav" alt="blog" />
                                                    Bradley R Grady
                                                </div>
                                                <Link href="/blog" className="rd_more">
                                                    Read More <i className="fi-rr-arrow-small-right" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="blog_box type_two type_three type_four trans hover_1_get hover_1 color_two">
                                    <img src="/assets/images/blog/blog-7-min.png" className="img-fluid" alt="blog" />
                                    <div className="oh ho_1" />
                                    <div className="oh ho_2" />
                                    <div className="oh ho_3" />
                                    <div className="oh ho_4" />
                                    <div className="blog_inner trans">
                                        <div className="content">
                                            <div className="d-flex top_c align-items-center">
                                                <span className="date_tm">
                                                    <i className="fi-rr-calendar" />
                                                    <time className="date published" >
                                                        Jan 3, {new Date().getFullYear()}
                                                    </time>
                                                </span>
                                            </div>
                                            <h4 className="title_22">
                                                <Link href="/blog">
                                                    Earning the interests of our clients
                                                </Link>
                                            </h4>
                                            <p className="descs">
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem…
                                            </p>
                                            <div className="bottm_contet d-flex align-items-center">
                                                <div className="d-flex authour align-items-center">
                                                    <img src="/assets/images/gavatar.png" className="gav" alt="blog" />
                                                    Bradley R Grady
                                                </div>
                                                <Link href="/blog" className="rd_more">
                                                    Read More <i className="fi-rr-arrow-small-right" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*-============spacing==========-*/}
                <div className="pd_bottom_70" />
                {/*-============spacing==========-*/}
            </section>

        </>
    )
}
