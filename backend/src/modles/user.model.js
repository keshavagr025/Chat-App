import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email: {
            type : String,
            required : true,
            unique : true,
        },
        fullName: {
            type: String,
            required: true,
            minlength: 6,
        },
        password: {
            type: String,
            default: "",
            required: true,
        },
        profilePic : {
            type: String,
            default: "",
        },
    },
    { timestamps: true}
);


const User = mongoose.model("Users", userSchema);

export default User;