import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ForWho from '@/components/ForWho';
import HowItWorks from '@/components/HowItWorks';
import Conditions from '@/components/Conditions';
import Technologies from '@/components/Technologies';
import FirstConsult from '@/components/FirstConsult';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ForWho />
        <HowItWorks />
        <Conditions />
        <Technologies />
        <FirstConsult />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
