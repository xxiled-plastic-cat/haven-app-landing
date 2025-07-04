import type { MetaFunction } from "@remix-run/node";
import ThemeWrapper from '../components/layout/ThemeWrapper';
import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';
import HowItWorks from '../components/sections/HowItWorks';
import WhyHaven from '../components/sections/WhyHaven';
import Security from '../components/sections/Security';
import FAQ from '../components/sections/FAQ';
import Footer from '../components/layout/Footer';

export const meta: MetaFunction = () => {
  return [
    { title: "Haven - Save Simply, Earn Effortlessly" },
    { name: "description", content: "A modern way to grow your dollars with real yield—safe, simple, and automatic." },
  ];
};

export default function Index() {
  return (
    <ThemeWrapper>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <WhyHaven />
        <Security />
        <FAQ />
      </main>
      <Footer />
    </ThemeWrapper>
  );
}


