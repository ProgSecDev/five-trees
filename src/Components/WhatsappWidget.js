// src/components/WhatsAppWidget.js
import { motion } from "framer-motion";
import WhatsAppIcon from "../../src/assets/Whatsapp/whatsapp.png";

export default function WhatsAppWidget({
  phone = "+35797499995",
  message = "Hello! I would like to know more.",
  position = "right",
}) {
  const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.2 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 10,
      }}
      className={`fixed z-50 p-2 rounded-full shadow-lg bg-green-500 cursor-pointer
        bottom-16 ${position === "right" ? "right-4" : "left-6"}`}
    >
      <img src={WhatsAppIcon} alt="WhatsApp" className="w-12 h-12" />
    </motion.a>
  );
}
