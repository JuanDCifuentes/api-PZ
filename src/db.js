import { connect } from "mongoose";
import * as dotenv from 'dotenv';
dotenv.config();


// mondb connection
(async () => {
  try {
    const db = await connect(process.env.MONGODB_URI);
    console.log("conexion realizada a", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();

