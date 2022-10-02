import mongoose from 'mongoose';

const main = async () => {
    const DBconnection = await mongoose.connect('mongodb+srv://DroCodes:Oliver2018!@cluster0.htcrhge.mongodb.net/test');
    console.log("Connected to DB");
}

export { main };