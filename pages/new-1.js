import Layout from "@/components/layout/Layout"
import About2 from "@/components/sections/About2"
import About3 from "@/components/sections/About3"
import About4 from "@/components/sections/About4"
import Banner1 from "@/components/sections/Banner1"
import Banner3 from "@/components/sections/Banner3"
import Blog4 from "@/components/sections/Blog4"
import Client1 from "@/components/sections/Client1"
import Client2 from "@/components/sections/Client2"
import Client3 from "@/components/sections/Client3"
import Client4 from "@/components/sections/Client4"
import Client5 from "@/components/sections/Client5"
import Content5 from "@/components/sections/Content5"
import Faq1 from "@/components/sections/Faq1"
import Form3 from "@/components/sections/Form3"
import Funfacts2 from "@/components/sections/Funfacts2"
import Process1 from "@/components/sections/Process1"
import Process2 from "@/components/sections/Process2"
import Process3 from "@/components/sections/Process3"
import Service6 from "@/components/sections/Service6"
import Service7 from "@/components/sections/Service7"
import Testimonial1 from "@/components/sections/Testimonial1"
import Testimonial2 from "@/components/sections/Testimonial2"
import Testimonial3 from "@/components/sections/Testimonial3"
import Testimonial4 from "@/components/sections/Testimonial4"
import Testimonial5 from "@/components/sections/Testimonial5"
export default function Home4() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={2}>
                <Banner3 />
                <Service6 />
                {/* <About3 /> */}
                {/* <Service7 /> */}
                {/* <Content5 /> */}
                {/* <Process1 /> */}
                <Process2 />
                {/* <Funfacts2 /> */}
                {/* <Form3 /> */}
                {/* <Testimonial1 /> */}
                {/* <Testimonial2 /> */}
                {/* <Testimonial3 /> */}
                {/* <Testimonial5 /> */}
                <Faq1 />  

                <Testimonial4 />

                <div className="divider" />
                <Blog4 />
                <Client2 />

            </Layout>
        </>
    )
}