import { userSchema } from "../models/users.model";

export const getUserProfileDetails = async (userId) => {
    const user = await userSchema.findById(userId).select("-password");
    if (!user) {
      throw new Error("User not found");
    }

    return user
}

export const modifyUserDetails = async (userId, updateData) => {
    const user = await userSchema.findByIdAndUpdate(userId, updateData, { new: true }).select("-password");
    if (!user) {
        throw new Error("Failed to update user details");
    }
    return user;
}