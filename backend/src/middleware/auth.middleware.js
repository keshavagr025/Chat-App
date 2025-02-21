import jwt from "jsonwebtoken";
import User from "../modles/user.model.js";


export const protectRoute = async (req, res, next) => {
    try {

        const token = req.cookies?.jwt;  // Use optional chaining

        if (!token) {
            return res.status(401).json({ message: "Unauthorized - No token provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.userId).select("-password");

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error("Error in protectRoute:", error.message);

        if (error.name === "TokenExpiredError") {
            return res.status(401).json({ message: "Unauthorized - Token expired" });
        } else if (error.name === "JsonWebTokenError") {
            return res.status(401).json({ message: "Unauthorized - Invalid token" });
        }

        return res.status(500).json({ message: "Internal Server Error" });
    }
};
