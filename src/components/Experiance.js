import React from 'react';
import { motion } from 'framer-motion';


const container = (delay) => ({
  hidden: {x: 100, opacity: 0},
  visible: {
    x:0,
    opacity:1,
    transition: {duration: 0.5, delay: delay} 
  }
});

const Experience = () => {
  const exp = [
    {
      year: "Nov 2024 - April 2025",
      role: "Research Assistant",
      company: "Adam's Tyre Pvt Ltd",
      description:
        "During my industrial research at Adam's Tyre Pvt Ltd, I worked on an innovative project to reduce the curing time in bicycle tyre vulcanization. I designed and tested novel accelerator systems for natural rubber compounds, collaborating with production engineers and lab staff to ensure industrial viability. My work involved using techniques such as cure curve analysis, tensile strength testing, and abrasion assessments, which resulted in improved process efficiency and reduced energy costs during the pilot testing phase.",
      stack: ["Industrial Research", "Innovative Accelerator Formulations", "Curing Time Reduction", "Bicycle Tyre Vulcanization"],
    },
  ];

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-3xl">Experiences</h1>
      <div>
        {exp.map((item, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <motion.p
              initial={{x:0, opacity:0}}
              animate={{x:100, opacity:1}}
              transition={{duration:1, delay:1.2}}
              className="mb-2 text-sm text-neutral-400">{item.year}</motion.p>
            </div>
            <motion.div
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {item.role} - <span className="text-sm text-purple-300">{item.company}</span>
              </h6>
              <p className="mb-4 text-neutral-400 text-justify">{item.description}</p>
              <div>
                {item.stack.map((stack, idx) => (
                  <span key={idx} className="mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400">
                    {stack}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
