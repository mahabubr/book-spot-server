import mongoose from "mongoose";


// Database Connection

async function bootstrap() {
    try {
        await mongoose.connect()
    } catch (error) {
        console.log('Failed to connect Database');
    }
}