import mongoose from "mongoose";

async function connection() {
    try {
        await mongoose.connect(process.env.DB_URL, { dbName: "Main" });
        console.log("SUCCESSFUL CONNECTION");
    } catch (err) {
        console.log("ERR:", err);
    };
};

export default connection