// import { useState } from "react";
// import { motion, Variants } from "framer-motion";

// interface Props {
//   emoji: string;
//   hueA: number;
//   hueB: number;
// }

// const cardVariants: Variants = {
//   offscreen: {
//     y: 400,
//   },
//   onscreen: {
//     y: 50,
//     rotate: -10,
//     transition: {
//       type: "spring",
//       bounce: 0.6,
//       duration: 0.9,
//     },
//   },
// };

// const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

// function Card({ emoji, hueA, hueB }: Props) {
//   const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

//   const [isClicked, setIsClicked] = useState(false);

//   const handleClick = () => {
//     setIsClicked(true);
//   };

//   return (
//     <motion.div
//       className="card-container"
//       initial="offscreen"
//       whileInView={isClicked ? "onscreen" : "offscreen"}
//       onClick={handleClick}
//       viewport={{ once: true, amount: 0.9 }}
//     >
//       <div className="splash" style={{ background }} />
//       <motion.div className="card text-[164px]" variants={cardVariants}>
//         {emoji}
//       </motion.div>
//     </motion.div>
//   );
// }

// export default Card;


import { useState } from "react";
import { motion, Variants } from "framer-motion";

interface Props {
  emoji: string;
  hueA: number;
  hueB: number;
  greeting: string; // Tambahkan properti greeting
}

const cardVariants: Variants = {
  offscreen: {
    y: 400,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.6,
      duration: 0.9,
    },
  },
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

function Card({ emoji, hueA, hueB, greeting }: Props) { // Tambahkan properti greeting pada parameter
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView={isClicked ? "onscreen" : "offscreen"}
      onClick={handleClick}
      viewport={{ once: true, amount: 0.9 }}
    >
      <div className="splash" style={{ background }} />
      <motion.div className="card text-[164px]" variants={cardVariants}>
        <div className="flex flex-col justify-center items-center">
          <span className="text-[104px] -mt-10 mb-2">{emoji}</span>
          <p className="text-[24px] font-bold leading-normal"> {greeting}</p> {/* Tambahkan teks ucapan */}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Card;
