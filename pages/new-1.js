import Layout from "@/components/layout/Layout"

import Banner3 from "@/components/sections/Banner3"
import Blog4 from "@/components/sections/Blog4"
import Client2 from "@/components/sections/Client2"

import Faq1 from "@/components/sections/Faq1"
import Process1 from "@/components/sections/Process1"

import Process2 from "@/components/sections/Process2"
import Process3 from "@/components/sections/Process3"
import Service1 from "@/components/sections/Service1"
import Service2 from "@/components/sections/Service2"
import Service3 from "@/components/sections/Service3"
import Service4 from "@/components/sections/Service4"
import Service5 from "@/components/sections/Service5"
import Service6 from "@/components/sections/Service6"
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
                <Service1 />
                <Service2 />
                <Service3 />
                <Service4 />
                {/* <Service5 /> */}
                <Service6 />
       
                <Process1 />
                <Process2 />
                <Process3 />

                <Faq1 />  

                <Testimonial1 />
                <Testimonial2 />
                <Testimonial3 />
                <Testimonial4 />
                <Testimonial5 />

                <div className="divider" />
                <Blog4 />
                <Client2 />

            </Layout>
        </>
    )
}