import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Space from "./components/Space/Space";
import Blog from "./components/Blog/Blog";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Space />
      <Blog />
      <Testimonials />
      <Footer />
    </>
  );
}
