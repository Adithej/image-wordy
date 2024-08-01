import express from "express"
import {config} from "dotenv"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import appRouter from "./routes/index.js"
import cors from "cors"

config()

const app = express()

// const corsOrigin = process.env.FRONTEND_ORIGIN || 'https://imagewordy.netlify.app';

// app.use(cors({origin:"http://localhost:5173", credentials:true}))
// app.use(cors({
//     origin: corsOrigin,
//     credentials: true
//   }))
app.use(cors({
    origin: '*',
    credentials: true
}));
app.use(express.json({limit:"10mb"}))
app.use(express.urlencoded({limit:"10mb", extended: true}))
app.use(cookieParser(process.env.COOKIE_SECRET))

app.use(morgan("dev"))

app.use("/api/v1", appRouter)

export default app;
