import express from "express"
import { createClient } from 'redis';
import { config } from "dotenv";
import session from "express-session";
import RedisStore from "connect-redis";
import MongoStore from "connect-mongo";


//DB
import { clientConnect } from "./config/redisDB.js";
import { DBConnection } from "./config/mongoDB.js";

//ErrorHandling Files
import { Notfound } from "./middlewares/notFound.js";
import errorHandler from "./middlewares/errorHandler/index.js"

//Routes
import { authRouter } from "./routes/authRoute.js";

export const app = express()
app.use(express.json())


config()
const redisclient = await clientConnect()
DBConnection() //Connections to both databases

app.use(session({
    store: new RedisStore({client: redisclient}),
    secret: process.env.REDIS_SECRET,
    resave: false,
    saveUnitialized: false,
    cookie: {maxAge: 60000 * 5}, //5 minutes expiration
}))

app.use('/api/users/', authRouter)
app.use(Notfound)
app.use(errorHandler)


