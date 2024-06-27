import { Autoplay, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
}

const testimonials = [
    {
        imgSrc: "/assets/images/testimonial/test-3-min.png",
        name: "Amit Sharma",
        position: "POS Certified Partner",
        comment: "Insofy is a customised solution to our needs as agents. The integration of new payment methods & enhanced security features is extremely beneficial.",
        reviewer: "Rajesh Kumar",
        rating: 5
    },
    {
        imgSrc: "/assets/images/testimonial/test-2-min.png",
        name: "Priya Menon",
        position: "POS Certified Partner",
        comment: "Insofy has revolutionised our payment processing with its user-friendly interface and reliable performance.",
        reviewer: "Anjali Gupta",
        rating: 4
    },
    {
        imgSrc: "/assets/images/testimonial/test-1-min.png",
        name: "Ravi Verma",
        position: "POS Certified Partner",
        comment: "With Insofy, we have seen a significant reduction in transaction errors and an increase in customer satisfaction.",
        reviewer: "Vikram Singh",
        rating: 5
    },
    {
        imgSrc: "/assets/images/testimonial/test-4-min.png",
        name: "Suman Rao",
        position: "POS Certified Partner",
        comment: "The efficiency and reliability of Insofy have significantly improved our operational workflow.",
        reviewer: "Neha Patel",
        rating: 5
    },
    {
        imgSrc: "/assets/images/testimonial/test-5-min.png",
        name: "Deepak Kapoor",
        position: "POS Certified Partner",
        comment: "Insofy's seamless integration with our existing systems has saved us a lot of time and effort.",
        reviewer: "Sunita Reddy",
        rating: 4
    },
    {
        imgSrc: "/assets/images/testimonial/test-6-min.png",
        name: "Kiran Desai",
        position: "POS Certified Partner",
        comment: "The customer support provided by Insofy is top-notch. They are always available to help with any issues.",
        reviewer: "Anand Iyer",
        rating: 5
    },
    {
        imgSrc: "/assets/images/testimonial/test-7-min.png",
        name: "Meera Nair",
        position: "POS Certified Partner",
        comment: "Insofy's advanced analytics tools have given us valuable insights into our sales data.",
        reviewer: "Ravi Malhotra",
        rating: 4
    },
    {
        imgSrc: "/assets/images/testimonial/test-8-min.png",
        name: "Rajiv Agarwal",
        position: "POS Certified Partner",
        comment: "The security features of Insofy have given us peace of mind when handling sensitive financial transactions.",
        reviewer: "Manisha Joshi",
        rating: 5
    },
    {
        imgSrc: "/assets/images/testimonial/test-9-min.png",
        name: "Anita Singh",
        position: "POS Certified Partner",
        comment: "Insofy has made payment processing so much easier and faster for our business.",
        reviewer: "Ashok Mehta",
        rating: 5
    },
    {
        imgSrc: "/assets/images/testimonial/test-10-min.png",
        name: "Vishal Bhardwaj",
        position: "POS Certified Partner",
        comment: "Insofy's POS system is highly intuitive and easy to use, making it a great choice for our staff.",
        reviewer: "Pooja Sethi",
        rating: 4
    },
];



export default function Testimonial4() {
    return (
        <>
            <section className="testimonial-section">
                {/*-============spacing==========-*/}
                <div className="pd_top_20" />
                {/*-============spacing==========-*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section_title text-center type_one">
                                <h4 className="sm_title"> Testimonial</h4>
                                <div className="title_whole">
                                    <h2 className="title"> Our Partners Speak For Us</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pd_bottom_30" />
                    <div className="testimonial_carousel  position-relative position_one nav_false dot_true">
                        <Swiper {...swiperOptions} className="theme_carousel ">
                            {testimonials.map((testimonial, index) => (
                                <SwiperSlide className="testimonial_box type_two " key={index}>
                                    <div className="auth d-flex align-items-center clearfix">
                                        <div className="image_box">
                                            <img src={testimonial.imgSrc} alt="img" className="img-fluid" />
                                        </div>
                                        <div className="cont">
                                            <h4 className="title_no_a_24">{testimonial.name}</h4>
                                            <p>{testimonial.position}</p>
                                        </div>
                                    </div>
                                    <div className="title_no_a_22 t_comment">
                                        <sup>“</sup>{testimonial.comment}<sub>“</sub>
                                    </div>
                                    <div className="box">
                                        <h6>{testimonial.reviewer}</h6>
                                        <p>
                                            {Array.from({ length: 5 }, (_, i) => (
                                                <i key={i} className={`fa fa-star ${i < testimonial.rating ? 'fill' : 'empty'}`} />
                                            ))}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                {/*-============spacing==========-*/}
                <div className="pd_top_70" />
                {/*-============spacing==========-*/}
            </section>
        </>
    )
}
