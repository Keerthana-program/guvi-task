const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Await the connection and destructure the connection object
        const conn = await mongoose.connect(process.env.MONGO_URI);

        // Log successful connection
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        // Handle errors gracefully
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
