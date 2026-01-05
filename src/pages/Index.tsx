import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { ClientLogos } from "@/components/landing/ClientLogos";
import { About } from "@/components/landing/About";
import { Services } from "@/components/landing/Services";
import { Stats } from "@/components/landing/Stats";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";
import { Team } from "@/components/landing/Team";
import { Testimonials } from "@/components/landing/Testimonials";
import { Pricing } from "@/components/landing/Pricing";
import { ServiceAreas } from "@/components/landing/ServiceAreas";
import { Gallery } from "@/components/landing/Gallery";
import { FAQ } from "@/components/landing/FAQ";
import { BlogPreview } from "@/components/landing/BlogPreview";
import { Contact } from "@/components/landing/Contact";
import { CTABanner } from "@/components/landing/CTABanner";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Pro-Plumber | Professional Plumbing Services - 24/7 Emergency</title>
        <meta
          name="description"
          content="Pro-Plumber offers professional plumbing services with 24/7 emergency support. Expert pipe repair, water heater installation, drain cleaning & more. Free estimates!"
        />
        <meta name="keywords" content="plumber, plumbing services, emergency plumber, pipe repair, drain cleaning, water heater" />
        <link rel="canonical" href="https://pro-plumber.com" />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <ClientLogos />
        <About />
        <Services />
        <Stats />
        <WhyChooseUs />
        <Team />
        <Testimonials />
        <Pricing />
        <ServiceAreas />
        <Gallery />
        <FAQ />
        <BlogPreview />
        <Contact />
        <CTABanner />
        <Footer />
      </main>
    </>
  );
};

export default Index;
