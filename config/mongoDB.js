import mongoose from 'mongoose';


async function connectDB() {
    try {
        const connection = await mongoose.connect("mongodb+srv://KalpeshPatil:7TliWSYaSWO8iX9T@cluster0.3ehcwwl.mongodb.net/ecomm");
        console.log(`Connected database  ${connection.connection.host}`);
    } catch (error) {
        console.error(error);
    }
}
export default connectDB;