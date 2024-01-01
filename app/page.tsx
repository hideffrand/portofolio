"use client";

import { motion } from "framer-motion";
import WorksSection from "@/components/WorksSection";
import { words } from "@/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Headline from "@/components/Headline";
import Services from "@/components/Services";
import ColorPallete from "@/components/ColorPallete";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        id="home"
        className="w-full h-screen px-4 py-10 mb-10 flex flex-col justify-between"
      >
        <div className="w-full flex flex-col md:flex-row justify-between items-end">
          <Headline text={words.deff} />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full md:w-1/5 text-white font-poppins text-sm md:text-md uppercase text-justify"
          >
            Hi, I am Deffrand Farera, an
            enthusiast-self-motivated-creative-independent Frontend Developer
            and Web Designer.
          </motion.p>
        </div>
        <div className="w-full h-1/2 bg-secondary-black rounded-xl"></div>
      </main>
      <Services />
      <WorksSection />
      <section className="w-full h-screen"></section>
      <AboutMe />
      <Footer />
    </>
  );
}
