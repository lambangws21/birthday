import  { useState } from "react";
import { motion, Variants } from "framer-motion";


interface Props {
  image: string;
  hueA: number;
  hueB: number;
}

const cardVariants: Variants = {
  Offscreen: {
      y:400,
  },
    hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

function Image({ image, hueA, hueB }: Props) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <motion.div
      className="card-container"
      initial="hidden"
      animate={isClicked ? "visible" : "hidden"}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
    >
      <div className="splash" style={{ background: `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})` }} />
      <motion.div className="card" variants={cardVariants}>
        <img src={image} alt="Food" style={{ width: "60%", height: "60%" }} className="image"/> {/* Menggunakan gambar */}
      </motion.div>
    </motion.div>
  );
}



export default Image;
