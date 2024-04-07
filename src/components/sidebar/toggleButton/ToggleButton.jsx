

import { motion } from "framer-motion";
import HomeIcon from "../../../assets/icons/home.png";


const ToggleButton = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      <motion.img
        src={HomeIcon}

        alt="Home"
        width="35"
        // height="35"
        style={{
          position: "relative", 
          top: "2px",         
          left: "10px",
               
        }}
        initial={{ opacity: 1, scale: 1 }} // Initial animation state
        animate={{ opacity: 1, scale: 1 }} // Animation when clicked
        transition={{ duration: 0.5 }} // Animation duration
        whileHover={{ scale: 1.2 }} // Zoom effect on hover
      />
    </button>
  );
};

export default ToggleButton;
