// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "@fontsource/carattere"; // Import Carattere font

const NameHeaderSimple = () => {
    const barHeights = [30, 50, 40, 60, 35, 55, 45, 50, 30, 60, 45, 55]; // Added 2 more bars

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <div
      className="flex flex-col items-center mt-20 text-white" // Removed w-screen h-screen
      style={{
        fontFamily: 'Carattere, cursive',
        fontWeight: 600,
      }}
    >
      {/* Greeting */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="text-5xl flex flex-wrap justify-center"
      >
        {"Hi, I'm Shivani Kolanu".split("").map((char, i) => (
          <motion.span key={i} variants={letterVariants}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>

      {/* Title */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="text-3xl mt-2 flex flex-wrap justify-center"
      >
        {"I'm a full stack developer.".split("").map((char, i) => (
          <motion.span key={i} variants={letterVariants}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>

      {/* Equalizer */}
      <div className="flex items-end gap-2 h-24 mt-4">
        {barHeights.map((height, i) => (
          <motion.div
            key={i}
            className="w-5 bg-gradient-to-t from-gray-100 to-gray-200 rounded-t-full"
            initial={{ height }}
            animate={{ height: [height, height + 30, height] }}
            transition={{
              duration: 1 + (i % 3) * 0.3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      {/* Floating Notes */}
      <div className="relative flex justify-center items-center h-12 mt-4 w-full overflow-visible">
        {["♪", "♫", "♬", "♩", "♭", "♯", "𝄞", "𝄢"].map((note, i) => (
          <motion.span
            key={i}
            className="text-3xl text-gray-100 mx-3"
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: [-10, -30, -10],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          >
            {note}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default NameHeaderSimple;
