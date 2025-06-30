import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOURL);
        console.log("db connected successfully");
    } catch (err) {
        console.log(err);
    }
};

export default connectDB;