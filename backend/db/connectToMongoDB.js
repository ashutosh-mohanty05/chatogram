import mongoose from "mongoose";


const connectToMongoDB = async () => {
 try {
    await mongoose.connect(process.env.MONGO_DB_URI)
    console.log("connecte to mongo");
    
 } catch (error) {
    console.log("Error to connect to MongoDB",error.message);
    
 }
}
 export default connectToMongoDB;