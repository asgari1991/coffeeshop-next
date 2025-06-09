import mongoose from "mongoose";

const connectToDB=async()=>{
try {
    if (mongoose.connections[0].readyState) {
        return true
    }else{
        mongoose.connect(process.env.MONGO_URL)
        console.log('Connected to DB successfully');
        
    }
} catch (error) {
    console.log('DB Connection has Error->',error);
    
}
}

export default connectToDB