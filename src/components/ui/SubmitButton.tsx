import React from "react";
import { useFormStatus } from "react-dom";
import { motion } from "framer-motion";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <motion.button
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
      whileTap={{ scale: 0.8 }}
      type="submit"
      className="sm:w-[10rem] bg-white sm:h-9 w-[5] h-4 sm:text-base text-sm rounded-full inline-flex justify-center items-center p-4 transition ease-in-out duration-150 cursor-pointer capitalize"
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-darkBlue"></div>
      ) : (
        <span className="text-darkBlue font-montserrat font-semibold capitalize">
          send message
        </span>
      )}
    </motion.button>
  );
};

export default SubmitButton;
