import { motion, useAnimationControls } from 'framer-motion';
import React, { useState } from 'react';

interface JellyProps {
  children: React.ReactNode;
}

const JellyText = ({ children }: JellyProps) => {
  const controls = useAnimationControls();
  const [isPlay, setIsPlay] = useState(false);

  const rubberband = () => {
    controls.start({
      transform: [
        'scale3d(1, 1 , 1)',
        'scale3d(1.4, 0.55 , 1)',
        'scale3d(0.75, 1.25 , 1)',
        'scale3d(1.25, 1.05 , 1)',
        'scale3d(0.9, 1.05 , 1)',
        'scale3d(1, 1 , 1)',
      ],
      transition: {
        times: [0, 0.4, 0.6, 0.7, 0.8, 0.9],
        duration: 0.6,
        ease: 'easeInOut',
      },
    });
    setIsPlay(true);
  };

  return (
    <motion.span
      animate={controls}
      onMouseOver={() => {
        if (!isPlay) rubberband();
      }}
      onAnimationComplete={() => setIsPlay(false)}
      style={{ display: 'inline-block' }}
    >
      {children}
    </motion.span>
  );
};

export default JellyText;
