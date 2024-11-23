import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb://tickets-mongo-srv:27017/tickets");
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

