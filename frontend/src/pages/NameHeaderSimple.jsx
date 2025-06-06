// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "@fontsource/carattere";

const NameHeaderSimple = () => {
    const barHeights = [30, 50, 40, 60, 35, 55, 45, 50, 30, 60, 45, 55];

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
      className="flex flex-col items-center mt-20 px-4"
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
        className="flex flex-wrap justify-center text-center"
        style={{
          fontSize: 'clamp(2.5rem, 8vw, 3.5rem)',
          background: 'linear-gradient(to right, #64ffda, #4fd1c5)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 20px rgba(100, 255, 218, 0.2)'
        }}
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
        className="mt-2 flex flex-wrap justify-center text-center"
        style={{
          fontSize: 'clamp(1.5rem, 4vw, 2rem)',
          color: '#d4d7df'
        }}
      >
        {"I'm a full stack developer.".split("").map((char, i) => (
          <motion.span key={i} variants={letterVariants}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>

      {/* Equalizer */}
      <div className="flex items-end gap-1 sm:gap-2 h-24 mt-4 overflow-hidden">
        {barHeights.map((height, i) => (
          <motion.div
            key={i}
            className="w-3 sm:w-5 rounded-t-full"
            style={{
              background: 'linear-gradient(to top, #64ffda 0%, rgba(100, 255, 218, 0.3) 100%)',
              boxShadow: '0 0 10px rgba(100, 255, 218, 0.3)'
            }}
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
        {["♪", "♫", "♬", "♩"].map((note, i) => (
          <motion.span
            key={i}
            className="text-2xl sm:text-3xl mx-2 sm:mx-3"
            style={{
              color: '#64ffda',
              textShadow: '0 0 10px rgba(100, 255, 218, 0.5)'
            }}
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
