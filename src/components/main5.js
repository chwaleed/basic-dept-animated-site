import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Part5() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 }); // 60% in view

  return (
    <motion.div className="">
      <div>
        <div>BASIC/DEPT® HELPS BRANDS ● CONNECT W/ CULTURE</div>
      </div>
    </motion.div>
  );
}

export default Part5;
