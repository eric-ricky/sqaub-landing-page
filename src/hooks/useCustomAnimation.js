import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const useCustomAnimation = (threshold) => {
  // animation
  const { ref, inView } = useInView({ threshold });
  const fadeUp = useAnimation();

  useEffect(() => {
    if (inView) {
      fadeUp.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
          ease: [0.6, -0.05, 0.01, 0.99],
          delay: 0.1,
        },
      });
    }
    if (!inView)
      fadeUp.start({
        y: 60,
        opacity: 0,
      });
  }, [inView, fadeUp]);

  return { ref, fadeUp };
};

export default useCustomAnimation;
