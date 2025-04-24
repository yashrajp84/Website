import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RotatingText = ({
  texts,
  mainClassName,
  staggerFrom, // Note: staggerFrom and staggerDuration might need custom logic if not directly supported by a single motion element
  initial,
  animate,
  exit,
  staggerDuration,
  splitLevelClassName,
  transition,
  rotationInterval,
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (!texts || texts.length <= 1) return; // No rotation needed for 0 or 1 item

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, rotationInterval || 2000); // Default interval if not provided

    return () => clearInterval(intervalId);
  }, [texts, rotationInterval]);

  if (!texts || texts.length === 0) {
    return null;
  }

  // Framer Motion's AnimatePresence requires a unique key for the animated component
  // to detect when it enters or exits.
  return (
    <div className={mainClassName}>
      <AnimatePresence mode='wait'>
        <motion.span
          key={currentIndex} // Unique key for AnimatePresence
          className={splitLevelClassName}
          initial={initial || { opacity: 0, y: 20 }} // Default initial if not provided
          animate={animate || { opacity: 1, y: 0 }} // Default animate if not provided
          exit={exit || { opacity: 0, y: -20 }} // Default exit if not provided
          transition={transition || { duration: 0.5 }} // Default transition if not provided
        >
          {texts[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default RotatingText;