import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, PersonStanding, Settings, User } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion"; // 🎉 Framer Motion

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    document.documentElement.setAttribute("data-theme", theme);
  };

  return (
    <header className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 backdrop-blur-lg bg-base-100/80">
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          {/* Logo Section */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
              {/* 💃 Bouncing Person Icon */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                className="size-9 rounded-lg bg-primary/10 flex items-center justify-center"
              >
                <PersonStanding className="w-5 h-5 text-primary" />
              </motion.div>
              <h1 className="text-lg font-bold">Talkie Walkie</h1>
            </Link>
          </div>

          {/* Right Icons Section */}
          <div className="flex items-center gap-2">
            {/* ⚙️ Bouncing Settings Icon */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
            >
              <Link to={"/settings"} className="btn btn-sm gap-2 transition-colors">
                <Settings className="w-4 h-4" />
                <span className="hidden sm:inline">Settings</span>
              </Link>
            </motion.div>

            {authUser && (
              <>
                {/* 👤 Bouncing User Icon */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                >
                  <Link to={"/profile"} className="btn btn-sm gap-2">
                    <User className="size-5" />
                    <span className="hidden sm:inline">Profile</span>
                  </Link>
                </motion.div>

                {/* 🚀 Wiggle Effect for Logout Icon */}
                <motion.div
                  animate={{ rotate: [-5, 5, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  <button className="flex gap-2 items-center" onClick={logout}>
                    <LogOut className="size-5" />
                    <span className="hidden sm:inline">Logout</span>
                  </button>
                </motion.div>
              </>
            )}

            {/* 🌙 Pulsating Theme Toggle */}
            {/* <motion.button
              onClick={toggleTheme}
              className="btn btn-sm"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              {theme === "light" ? "🌙" : "☀️"}
            </motion.button> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
