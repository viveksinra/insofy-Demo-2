import Layout from "@/components/layout/Layout"

import Banner3 from "@/components/sections/Banner3"
import Blog4 from "@/components/sections/Blog4"
import Client2 from "@/components/sections/Client2"

import Faq1 from "@/components/sections/Faq1"

import Process2 from "@/components/sections/Process2"
import Service6 from "@/components/sections/Service6"

import Testimonial4 from "@/components/sections/Testimonial4"
export default function Home4() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={2}>
                <Banner3 />
                <Service6 />
       
                <Process2 />

                <Faq1 />  

                <Testimonial4 />

                <div className="divider" />
                <Blog4 />
                <Client2 />

            </Layout>
        </>
    )
}