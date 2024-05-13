import mongoose from "mongoose";


export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://salihck:24102001@cluster0.cnlh5mm.mongodb.net/food-del').then(()=>console.log('DB connected'));
}