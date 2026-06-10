import { Hero } from '../components/modules/Hero';
import { StatsBand } from '../components/modules/StatsBand';
import { Services } from '../components/modules/Services';
import { WhyUs } from '../components/modules/WhyUs';
import { Process } from '../components/modules/Process';
import { Testimonials } from '../components/modules/Testimonials';
import { Zone } from '../components/modules/Zone';
import { Contact } from '../components/modules/Contact';

export const Home = () => {
  return (
    <>
      <Hero />
      <StatsBand />
      <Services />
      <WhyUs />
      <Process />
      <Testimonials />
      <Zone />
      <Contact />
    </>
  );
};
