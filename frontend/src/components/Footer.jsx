import { useThemeStore } from "../store/useThemeStore";
import { MessageSquareHeart, Github, Twitter, Instagram, Info } from "lucide-react";
import { motion } from "framer-motion"; // 🎉 Import Framer Motion

const Footer = () => {
  const { theme } = useThemeStore();

  return (
    <footer className="w-full py-4 px-6 bg-base-200 text-base-content flex justify-between items-center">
      {/* Left Section */}
      <div className="flex items-center space-x-2">
        {/* 💖 Bouncing Logo Icon */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <MessageSquareHeart />
        </motion.div>

        <span className="text-lg font-bold">Talkie Walkie</span>
        <span className="text-sm text-base-content/70">
        "Creating bonds beyond boundaries, one message at a time."
        </span>
      </div>

      {/* Middle Section - Social Icons */}
      <div className="flex space-x-4">
        {/* GitHub */}
        <motion.a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <Github size={20} />
        </motion.a>

        {/* Twitter */}
        <motion.a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <Twitter size={20} />
        </motion.a>

        {/* Instagram */}
        <motion.a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <Instagram size={20} />
        </motion.a>

        {/* Info */}
        <motion.a
          href="https://yourwebsite.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <Info size={20} />
        </motion.a>
      </div>

      {/* Right Section */}
      <span className="text-sm text-base-content/70">
        © {new Date().getFullYear()} Talkie Walkie - Made by Keshav Agrawal
      </span>
    </footer>
  );
};

export default Footer;
