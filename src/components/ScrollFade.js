import { motion } from "framer-motion";
import variants from "../scrollTransition";
import { useMediaQuery } from 'react-responsive';

export default function ScrollFade(props) {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1280px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

  if (isTabletOrMobile !== true) {
    return (
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={variants}
          viewport={{ once: true, amount: 0.3 }}
        >{props.children}</motion.div>
    );
  }
  else {
    return (
      <div>
        {props.children}
      </div>
    );
  }
}