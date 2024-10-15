import { config } from "dotenv";
import { app } from "./src/app.js";

config()
PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log(`server is running on port 3000`);
    
})