import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    clerkId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    firstName: { type: String },
    lastName: { type:String },
    photo: { type: String },
})

// firstName, lastName and photo are not required in case the user signs up
// using only his email and username.

const User = models.User || model('User', UserSchema);

export default User;