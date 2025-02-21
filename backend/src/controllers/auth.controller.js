import { generateToken } from "../lib/unilt.js";
import User from "../modles/user.model.js";
import bcrypt from "bcryptjs";
import cloudinary from "../lib/cloudinary.js"
// Constants for error messages
const ERROR_MESSAGES = {
  INVALID_CREDENTIALS: "Invalid credentials",
  EMAIL_ALREADY_EXISTS: "Email already exists",
  PASSWORD_TOO_SHORT: "Password must be at least 6 characters",
  MISSING_FIELDS: "All fields are required",
  INTERNAL_SERVER_ERROR: "Internal server error",
};

// Constants for HTTP status codes
const HTTP_STATUS_CODES = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  INTERNAL_SERVER_ERROR: 500,
  CREATED: 201,
  OK: 200,
};

// Signup controller
export const signup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    // Validate input fields
    if (!fullName || !email || !password) {
      return res.status(HTTP_STATUS_CODES.BAD_REQUEST).json({ message: ERROR_MESSAGES.MISSING_FIELDS });
    }

    // Validate password length
    if (password.length < 6) {
      return res.status(HTTP_STATUS_CODES.BAD_REQUEST).json({ message: ERROR_MESSAGES.PASSWORD_TOO_SHORT });
    }

    // Check if email already exists
    const existingUser  = await User.findOne({ email });
    if (existingUser ) {
      return res.status(HTTP_STATUS_CODES.BAD_REQUEST).json({ message: ERROR_MESSAGES.EMAIL_ALREADY_EXISTS });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    // Save new user and generate JWT token
    await newUser.save();
    generateToken(newUser._id, res);

    // Return user data
    res.status(HTTP_STATUS_CODES.CREATED).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      email: newUser.email,
      profilePic: newUser.profilePic,
    });
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).json({ message: ERROR_MESSAGES.INTERNAL_SERVER_ERROR });
  }
};

// Login controller
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });

    // Check if user exists
    if (!user) {
      return res.status(HTTP_STATUS_CODES.UNAUTHORIZED).json({ message: ERROR_MESSAGES.INVALID_CREDENTIALS });
    }

    // Compare passwords
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(HTTP_STATUS_CODES.UNAUTHORIZED).json({ message: ERROR_MESSAGES.INVALID_CREDENTIALS });
    }

    // Generate JWT token
    generateToken(user._id, res);

    // Return user data
    res.status(HTTP_STATUS_CODES.OK).json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).json({ message: ERROR_MESSAGES.INTERNAL_SERVER_ERROR });
  }
};

// Logout controller
export const logout = (req, res) => {
  try {
    // Clear JWT cookie
    res.cookie("jwt", "", { maxAge: 0 });

    // Return success message
    res.status(HTTP_STATUS_CODES.OK).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).json({ message: ERROR_MESSAGES.INTERNAL_SERVER_ERROR });
  }
};
  
export const updateProfile = async (req, res) => {
  try{
    const {profilePic} = req.body;
    const userId =  req.user._id;

    if(!profilePic){
      return res.status(HTTP_STATUS_CODES.BAD_REQUEST).json({message: "Profile pic is required"});
     }

    const updateResponse = await cloudinary.uploader.upload(profilePic);
    const updatedUser = await User.findByIdAndUpdate(userId, {profilePic: updateResponse.secure_url}, {new: true});

    res.status(200).json(updatedUser)
  }catch(error){
    console.log("error in update profile:", error);
    res.status(500).json({message: "Internal server error"});
  }
};

export const checkAuth = (req, res) => {
  try {
    res.status(200).json(req.user);

  }catch(error){
    console.log("Error in checkAuth controller", error.message);
    res.status(500).json({message: "Internal Server Error"});
  } 
}