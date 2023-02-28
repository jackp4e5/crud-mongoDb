import {connect} from "mongoose";
import {MONGODB_URI} from "./config";

// ( async ()=>{
//     const db = await  connect("mongodb://localhost:27017/crud-mongo");
//     console.log('DB IS CONNECTED NOW', db.connection.name);
// })()

const connectDB = async () => {
    try {

      const db = await connect(  MONGODB_URI,{
          useNewUrlParser:true,
          useUnifiedTopology:true
      })

      const url = `${db.connection.host}:${db.connection.port}: ${db.connection.name}`

      console.log('DB is conected in' , url);

    } catch (error) {
      console.log(`error: ${error.message}`);
      process.exit(1)

    }
};

export default connectDB;
