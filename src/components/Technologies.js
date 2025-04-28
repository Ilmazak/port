import { RiReactjsLine } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { motion } from "framer-motion";

const Technologies = () => {
	return (
		<div className="border-b border-neutral-900 pb-24">
			<h1 className="my-20 text-center text-3xl">Technologies</h1>
			<div className="flex flex-wrap items-center justify-center gap-4">
				{/* Reusable motion div for icons */}
				{[
					{ Icon: RiReactjsLine, color: "#61DAFB" },
					{ Icon: SiNextdotjs, color: "black" },
					{ Icon: SiTailwindcss, color: "#38BDF8" },
					{ Icon: SiSpringboot, color: "#6DB33F" },
					{ Icon: FaJava, color: "#007396" },
					{ Icon: SiDjango, color: "#092E20" },
					{ Icon: SiPython, color: "#3776AB" },
					{ Icon: SiPhp, color: "#777BB4" },
					{ Icon: SiMongodb, color: "#47A248" },
					{ Icon: SiMysql, color: "#4479A1" },
				].map(({ Icon, color }, index) => (
					<motion.div
						key={index}
						whileHover={{
							scale: 1.2,
							rotateY: 180, // Flip effect
						}}
						className="rounded-2xl border-4 border-neutral-900 p-4"
					>
						<Icon className="text-5xl" style={{ color }} />
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default Technologies;
