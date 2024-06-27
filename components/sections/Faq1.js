import React, { useState } from "react";

export default function Faq1() {
    const [isActive, setIsActive] = useState(null); // Change isActive state to hold only the active key

    const faqs = [
        {
            key: 1,
            question: "How does a POSP make money?",
            answer: "A POSP makes money based on the number of policies s/he sells and the number of renewals they get. A POSP has no fixed working hours, neither does s/he have a fixed income. So the number of policies you sell, the higher is your income!"
        },
        {
            key: 2,
            question: "Who can become a POSP?",
            answer: "To eligibility criteria to become a POSP insurance agent is: ● Minimum 18 years of age ● Minimum educational qualification is Class 10th pass from a recognised board ● Valid Aadhaar Card & PAN Card"
        },
        {
            key: 3,
            question: "What can I sell as a POSP?",
            answer: "As a POSP, you can sell: ● Motor Insurance ● Health Insurance ● Life Insurance ● Travel Insurance ● Personal Accident Insurance etc."
        },
        {
            key: 4,
            question: "Can a POSP sell both life and general insurance?",
            answer: "Yes, a POSP can sell multiple insurances like life insurance, term insurance, motor insurance, health insurance, travel insurance etc."
        },
    ];

    const handleToggle = (key) => {
        if (isActive === key) {
            setIsActive(null);
        } else {
            setIsActive(key);
        }
    };

    return (
        <>
            <section className="faq-section">
                <div className="pd_top_10" />
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-6 col-sm-12">
                            <div className="section_title type_one">
                                <h4 className="sm_title"> FAQs</h4>
                                <div className="title_whole">
                                    <h2 className="title"> What is POSP in Insurance?</h2>
                                </div>
                                <div className="pd_bottom_20" />
                            </div>
                            <div className="position-relative br_left_3px_theme_color pd_left_10">
                                POSP in insurance stands for Point of Sales Person, which means POSP is an insurance agent who is authorised to sell insurance policies to customers directly.
                            </div>
                            <div className="pd_bottom_30" />
                            <div className="block_faq">
                                <div className="accordion-box">
                                    {faqs.map(faq => (
                                        <div key={faq.key} className={isActive === faq.key ? "accordion active-block" : "accordion"}>
                                            <div className={isActive === faq.key ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(faq.key)}>
                                                <div className="question_box">
                                                    <div className="title_no_a_18 trans">{faq.question}</div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: isActive === faq.key ? "block" : "none" }}>
                                                {faq.answer}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="pd_bottom_40" />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 pd_left_30">
                            <div className="image_box_only type_three">
                                <div className="image three">
                                    <img src="assets/images/about/faqboy.png" alt="img" className="img-fluid" />
                                </div>
                            </div>
                            <div className="pd_bottom_40" />
                        </div>
                    </div>
                </div>
                <div className="pd_bottom_10" />
            </section>
        </>
    );
}
