import mongoose from 'mongoose';

const registerSchema = mongoose.Schema({
    fullName: String,
    firstName: String,
    lastName: String,
    email: String,
    googleId: String,
    profileImgUrl: String,
    img: String,
    registerDate: Date
});

const user_schema = mongoose.model('users', registerUser);

export default user_schema;