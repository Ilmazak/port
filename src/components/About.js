import AboutMe from "../assets/AboutME.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const About = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Tailwind's lg breakpoint
    };

    updateScreenSize(); // Initial check
    window.addEventListener("resize", updateScreenSize); // Update on resize

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  // Define animations based on screen size
  const smallScreenAnimation = { scale: 1.1, opacity: 1 };
  const largeScreenAnimation = { x: 100, opacity: 1 };

  return (
    <div className="border-b border-neutral-900">
      <h1 className="my-20 text-center text-3xl">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full flex justify-center items-center lg:w-1/2 lg:p-8">
          <motion.img
            initial={{ opacity: 0 }}
            animate={
              isLargeScreen ? largeScreenAnimation : smallScreenAnimation
            }
            transition={{ duration: 1, delay: 1 }}
            className="w-[24rem] h-[24rem]"
            src={AboutMe}
            alt="About Me"
          />
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center lg:justify-start">
            <motion.p
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="lg:my-8 max-w-xl py-6 text-justify"
            >
              As part of my final-year research project at Adam Tyre Industries
              (Pvt) Ltd., I worked on “Innovative Accelerator Formulations to
              Reduce the Curing Time in Bicycle Tyre Vulcanization.” I designed
              and tested new accelerator systems to improve curing efficiency in
              natural rubber compounds, collaborating closely with production
              engineers and lab staff. Using techniques such as cure curve
              analysis (Rheometer), tensile testing, and abrasion resistance
              evaluation, I helped develop formulations that enhanced process
              efficiency and reduced energy costs during pilot testing. This
              experience strengthened my skills in polymer science, industrial
              research, and laboratory analysis.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
