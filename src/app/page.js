import Nav from '@/components/sections/Nav';
import Hero from '@/components/sections/Hero';
import SocialProofBar from '@/components/sections/SocialProofBar';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import About from '@/components/sections/About';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
import CallToAction from '@/components/sections/CallToAction';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <div id="page-root">
        <Nav />
        <main id="main">
          <Hero />
          <SocialProofBar />
          <Services />
          <Portfolio />
          <About />
          <Process />
          <Testimonials />
          <CallToAction />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
