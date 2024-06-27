import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Banner1 from "@/components/sections/Banner1"
import Banner2 from "@/components/sections/Banner2"
import Blog1 from "@/components/sections/Blog1"
import Client1 from "@/components/sections/Client1"
import Client2 from "@/components/sections/Client2"
import Faq1 from "@/components/sections/Faq1"
import Form1 from "@/components/sections/Form1"
import Funfacts1 from "@/components/sections/Funfacts1"
import Process1 from "@/components/sections/Process1"
import Process2 from "@/components/sections/Process2"
import Process3 from "@/components/sections/Process3"
import Service1 from "@/components/sections/Service1"
import Service2 from "@/components/sections/Service2"
import Service3 from "@/components/sections/Service3"
import Service4 from "@/components/sections/Service4"
import Service5 from "@/components/sections/Service5"
import Service6 from "@/components/sections/Service6"
import Slider1 from "@/components/sections/Slider1"
import Testimonial1 from "@/components/sections/Testimonial1"
import Testimonial2 from "@/components/sections/Testimonial2"
import Testimonial3 from "@/components/sections/Testimonial3"
import Testimonial4 from "@/components/sections/Testimonial4"
import Testimonial5 from "@/components/sections/Testimonial5"
export default function Home1() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
            <Banner2 />
       
                <Service6 />
                <Process2 />
                <Client2 />




                
                {/* <Funfacts1 />
                <Form1 /> */}
                <Testimonial2 />
                <Faq1 />                
                <Blog1 />
            </Layout>
        </>
    )
}