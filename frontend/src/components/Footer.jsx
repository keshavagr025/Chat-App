import { useThemeStore } from "../store/useThemeStore";
import { MessageSquareHeart, Github, Twitter, Instagram, Info } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const { theme } = useThemeStore();

  return (
    <footer className="w-full py-4 px-6 bg-base-200 text-base-content flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      {/* Left Section */}
      <div className="flex items-center space-x-2 text-center md:text-left">
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <MessageSquareHeart />
        </motion.div>

        <div>
          <span className="text-lg font-bold block">Talkie Walkie</span>
          <span className="text-sm text-base-content/70 block">
            "Creating bonds beyond boundaries, one message at a time."
          </span>
        </div>
      </div>

      {/* Middle Section - Social Icons */}
      <div className="flex space-x-4">
        {[{ icon: Github, link: "https://github.com" }, { icon: Twitter, link: "https://twitter.com" }, { icon: Instagram, link: "https://instagram.com" }, { icon: Info, link: "https://yourwebsite.com" }].map(({ icon: Icon, link }, index) => (
          <motion.a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <Icon size={20} />
          </motion.a>
        ))}
      </div>

      {/* Right Section */}
      <span className="text-sm text-base-content/70 text-center md:text-right">
        © {new Date().getFullYear()} Talkie Walkie - Made by Keshav Agrawal
      </span>
    </footer>
  );
};

export default Footer;
