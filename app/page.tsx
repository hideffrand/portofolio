import ThingsIDo from "./components/ThingsIDo";
import SelectedWork from "./components/SelectedWork";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Navbar from "@/components/Navbar";
import Footer from "./components/Footer";

const Page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ThingsIDo />
      <Experience />
      <SelectedWork />
      <Footer />
    </>
  );
};

export default Page;
