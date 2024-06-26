import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
};

const testimonialData = [
  {
    id: 1,
    image: "/assets/images/testimonial/test-3-min.png",
    name: "Amit Sharma",
    role: "POS Certified Partner",
    comment: "Insofy is a customised solution to our needs as agents. The integration of new payment methods & enhanced security features is extremely beneficial.",
    stars: 5,
  },
  {
    id: 2,
    image: "/assets/images/testimonial/test-2-min.png",
    name: "Priya Menon",
    role: "POS Certified Partner",
    comment: "Insofy has revolutionised our payment processing with its user-friendly interface and reliable performance.",
    stars: 4,
  },
  {
    id: 3,
    image: "/assets/images/testimonial/test-1-min.png",
    name: "Ravi Verma",
    role: "POS Certified Partner",
    comment: "With Insofy, we have seen a significant reduction in transaction errors and an increase in customer satisfaction.",
    stars: 5,
  },
  {
    id: 4,
    image: "/assets/images/testimonial/test-4-min.png",
    name: "Suman Rao",
    role: "POS Certified Partner",
    comment: "The efficiency and reliability of Insofy have significantly improved our operational workflow.",
    stars: 5,
  },
  {
    id: 5,
    image: "/assets/images/testimonial/test-5-min.png",
    name: "Deepak Kapoor",
    role: "POS Certified Partner",
    comment: "Insofy's seamless integration with our existing systems has saved us a lot of time and effort.",
    stars: 4,
  },
  {
    id: 6,
    image: "/assets/images/testimonial/test-6-min.png",
    name: "Kiran Desai",
    role: "POS Certified Partner",
    comment: "The customer support provided by Insofy is top-notch. They are always available to help with any issues.",
    stars: 5,
  },
  {
    id: 7,
    image: "/assets/images/testimonial/test-7-min.png",
    name: "Meera Nair",
    role: "POS Certified Partner",
    comment: "Insofy's advanced analytics tools have given us valuable insights into our sales data.",
    stars: 4,
  },
  {
    id: 8,
    image: "/assets/images/testimonial/test-8-min.png",
    name: "Rajiv Agarwal",
    role: "POS Certified Partner",
    comment: "The security features of Insofy have given us peace of mind when handling sensitive financial transactions.",
    stars: 5,
  },
  {
    id: 9,
    image: "/assets/images/testimonial/test-9-min.png",
    name: "Anita Singh",
    role: "POS Certified Partner",
    comment: "Insofy has made payment processing so much easier and faster for our business.",
    stars: 5,
  },
  {
    id: 10,
    image: "/assets/images/testimonial/test-10-min.png",
    name: "Vishal Bhardwaj",
    role: "POS Certified Partner",
    comment: "Insofy's POS system is highly intuitive and easy to use, making it a great choice for our staff.",
    stars: 4,
  },
  
];

export default function Testimonial2() {
  return (
    <section className="testimonial-section bg_op_5" style={{ backgroundImage: 'url(assets/images/map-frame-2.png)' }}>
      <div className="pd_top_90" />
      <div className="container">
        <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 pd_right_60">
                            <div className="image_box_only  type_six color_two">
                                <div className="image one">
                                    <img src="assets/images/about/testi1.png" alt="img" className="img-fluid" />
                                    {/* <div className="content text-center">
                                        <Link href="#">
                                            <svg width={55} height={55} viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx={28} cy={27} r={20} fill="white" />
                                                <circle cx="27.5" cy="27.5" r="27.5" fill="white" fillOpacity="0.1" />
                                                <path d="M22 33.25L33.25 22M33.25 22H24.8125M33.25 22V30.4375" stroke="#2D947A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <h6 className="title_no_a_20">We’ve More <br />
                                                Then 2563+ Global
                                                Clients</h6>
                                            <svg width={71} height={7} viewBox="0 0 71 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M61.3463 7C58.7897 7 57.4874 5.61327 56.3384 4.38975C55.301 3.28482 54.4815 2.41206 52.7303 2.41206C50.979 2.41206 50.1595 3.28482 49.1219 4.38975C47.9731 5.61327 46.6709 7 44.1141 7C41.5573 7 40.2553 5.61327 39.1063 4.38975C38.0689 3.28482 37.2495 2.41206 35.4983 2.41206C33.7472 2.41206 32.9278 3.28482 31.8905 4.38975C30.7416 5.61327 29.4394 7 26.8826 7C24.3262 7 23.0243 5.61327 21.8755 4.38975C20.8383 3.28482 20.0189 2.41206 18.268 2.41206C16.517 2.41206 15.6976 3.28482 14.6602 4.38975C13.5114 5.61327 12.2091 7 9.65253 7C7.09575 7 5.79352 5.61327 4.64453 4.38975C3.60713 3.28482 2.78775 2.41206 1.03653 2.41206C0.464193 2.41206 0 1.87216 0 1.20603C0 0.540101 0.464193 0 1.03653 0C3.59314 0 4.89537 1.38673 6.04436 2.61025C7.08176 3.71518 7.90131 4.58794 9.65253 4.58794C11.4036 4.58794 12.223 3.71518 13.2604 2.61045C14.4092 1.38673 15.7114 0 18.268 0C20.8244 0 22.1265 1.38693 23.2753 2.61045C24.3125 3.71538 25.1317 4.58794 26.8826 4.58794C28.6338 4.58794 29.4532 3.71518 30.4906 2.61045C31.6394 1.38673 32.9417 0 35.4983 0C38.0551 0 39.3571 1.38673 40.5061 2.61045C41.5435 3.71518 42.3631 4.58794 44.1141 4.58794C45.8655 4.58794 46.6849 3.71518 47.7223 2.61045C48.8713 1.38673 50.1735 0 52.7303 0C55.287 0 56.5893 1.38673 57.7383 2.61045C58.7757 3.71518 59.595 4.58794 61.3463 4.58794C63.0978 4.58794 63.9174 3.71518 64.9551 2.61025C66.1041 1.38673 67.4065 0 69.9635 0C70.5358 0 71 0.540101 71 1.20603C71 1.87216 70.5358 2.41206 69.9635 2.41206C68.2119 2.41206 67.3924 3.28482 66.3546 4.38975C65.2056 5.61327 63.9034 7 61.3463 7Z" fill="white" />
                                            </svg>
                                        </Link>
                                    </div> */}
                                </div>
                            </div>
                        </div>
          <div className="col-lg-6 col-md-12">
            <div className="section_title type_three pd_left_20">
              <h4 className="sm_title">Clients Testimonials</h4>
              <div className="title_whole">
                <h2 className="title">Amazing Feedback Say About Services</h2>
              </div>
            </div>
            <div className="pd_bottom_30" />
            <div className="testimonial_carousel position-relative position_one nav_false dot_true dot_left color_three">
              <Swiper {...swiperOptions} className="theme_carousel">
                {testimonialData.map((testimonial) => (
                  <SwiperSlide key={testimonial.id} className="testimonial_box type_two color_two">
                    <div className="auth d-flex align-items-center clearfix">
                      <div className="image_box">
                        <img src={testimonial.image} className="img-fluid" alt="image" />
                      </div>
                      <div className="cont">
                        <h4 className="title_no_a_24">{testimonial.name}</h4>
                        <p>{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="title_no_a_22 t_comment">
                      <sup>“</sup>{testimonial.comment}<sub>“</sub>
                    </div>
                    <div className="box">
                      <h6>Jacob Leonardo</h6>
                      <p>
                        {[...Array(testimonial.stars)].map((_, index) => (
                          <i key={index} className="fa fa-star fill" />
                        ))}
                        {[...Array(5 - testimonial.stars)].map((_, index) => (
                          <i key={index} className="fa fa-star empty" />
                        ))}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="pd_bottom_90" />
    </section>
  );
}
