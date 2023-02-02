import { connect } from "mongoose";

let connection = null;

const dbConnect = async () => {
    connection = await connect('mongodb://localhost:27017/travel');

    console.log('DB Connected');

    return connection;
};

export default dbConnect;
