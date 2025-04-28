import Hasan from "../assets/Hasan.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible: {
    x:0,
    opacity:1,
    transition: {duration: 0.5, delay: delay} 
  }
})
const Hero = () => {
	return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-5xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
            >
              Ilma Jakariya
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
              drag="x"
              dragConstraints={{ left: 8, right: 8 }}
              className="mb-3 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tighter text-transparent"
            >
              Chemist
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="text-justify"
            >
              Hello, I am Ilma Jakariy, an aspiring chemist and a passionate
              undergraduate currently pursuing my Bachelor of Science degree in
              Applied Science. Throughout my academic journey, I have developed
              a strong foundation in chemistry, with a keen interest in both
              theoretical concepts and practical laboratory work. My studies
              have equipped me with essential skills in chemical analysis,
              laboratory safety, research methodologies, and scientific
              reporting. I am particularly interested in exploring areas such as
              organic chemistry, analytical techniques, and environmental
              science. My goal is to apply my knowledge and skills to real-world
              challenges, contributing to scientific innovation and the
              betterment of society. I am committed to continuous learning,
              professional growth, and staying updated with the latest
              advancements in the field of chemistry. With a passion for
              discovery and a drive for excellence, I am excited to embark on
              opportunities that will shape me into a skilled and responsible
              chemist. Thank you for visiting — welcome to my portfolio!
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="hidden lg:block lg:ml-[8rem] justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="size-40 mt-2 lg:h-[35rem] lg:w-[24rem]"
              src={Hasan}
              alt="Ilma Jakariya"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
