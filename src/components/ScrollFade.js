import { motion } from "framer-motion";
import variants from "../scrollTransition";

export default function ScrollFade(props) {
    return (
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={variants}
          viewport={{ once: false, amount: 0.3 }}
        >{props.children}</motion.div>
    );
}