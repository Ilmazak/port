import primg from "../assets/prj.png";
import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
	offscreen: {
		y: 300,
		opacity: 0,
	},
	onscreen: {
		y: 0,
		opacity: 1,
		transition: {
			type: "spring",
			bounce: 0.4,
			duration: 0.8,
		},
	},
};

const prj = [
	{
		title: "Industrial Research, Adam Tyre Industries (PVT) LTD.",
		img: primg,
		description:"Innovative Accelerator Formulations to Reduce the Curing Time in Bicycle Tyre Vulcanization •Designed and tested novel accelerator systems to reduce cure time in natural rubber compounds •Collaborated with production engineers and lab staff to ensure industrial viability •Applied techniques such as cure curve analysis (Rheometer), tensile strength, abrasion and compound stability and hardness tests. •Resulted in improved process efficiency and reduced energy costs in pilot testing phase",
		stacks: ["React", "Spring Boot", "MongoDB", "Blockchain"],
		link: "https://unimed-link",
	},
];

const Projects = () => {
	return (
		<div className="border-b border-neutral-900 pb-4">
			<h1 className="my-20 text-center text-4xl">Projects</h1>
			<div>
				{prj.map((prs, index) => (
					<div
						className="mb-8 flex flex-col lg:flex-row lg:items-start lg:justify-center"
						key={index}>
						<motion.div
							initial="offscreen"
							whileInView="onscreen"
							viewport={{ once: true, amount: 0.8 }}
							variants={cardVariants}
							className="w-full lg:w-1/4 flex items-center justify-center mb-4 lg:mb-0">
							<img
								src={prs.img}
								alt={prs.title}
								className="rounded-lg shadow-md w-[15rem] h-[10rem]"
							/>
						</motion.div>
						<motion.div
							initial={{ x: 100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 1, delay: 1.2 }}
							className="w-full max-w-[90%] lg:w-[65%] lg:ml-4">
							<h6 className="mb-2 font-semibold text-lg">{prs.title}</h6>
							<p className="mb-4 text-neutral-400 text-justify">
								{prs.description}
							</p>
							{prs.stacks.map((stc, index) => (
								<span
									className="mr-2 mt-3 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400"
									key={index}>
									{stc}
								</span>
							))}
						</motion.div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
