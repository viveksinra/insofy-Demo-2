import Layout from "@/components/layout/Layout";
import Banner2 from "@/components/sections/Banner2";
import Blog1 from "@/components/sections/Blog1";
import Client2 from "@/components/sections/Client2";
import Faq1 from "@/components/sections/Faq1";
import Process2 from "@/components/sections/Process2";
import Service6 from "@/components/sections/Service6";
import Testimonial2 from "@/components/sections/Testimonial2";
export default function Home1() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <Banner2 />
        <Service6 />
        <Process2 />
        <Client2 />
        <Testimonial2 />
        <Faq1 />
        <Blog1 />
      </Layout>
    </>
  );
}
