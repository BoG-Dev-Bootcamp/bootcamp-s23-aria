import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    hash: {
        type: String,
        required: true
    }
})

export default mongoose.models?.User || mongoose.model("User", userSchema)