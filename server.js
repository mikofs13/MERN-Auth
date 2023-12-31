import  express  from "express";
import dotenv from "dotenv";
import path from "path"
import userRoutes from "./routes/userRoutes.js"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
dotenv.config();
import connectDb from "./config/db.js";
import logger from "./middleware/logEvent.js";
import cookieParser from "cookie-parser";
import cors from "cors"
connectDb();

const port = process.env.PORT || 5000
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors({
    origin: "https://mern-first-mike-project.onrender.com",
    credentials: true,
    optionsSuccessStatus: 200
}))
app.use(cookieParser())
app.use(logger);
app.use("/api/users", userRoutes);



app.get("/", (req,res) =>{
    res.send("Server is ready")

})




app.use(notFound)
app.use(errorHandler)


app.listen(port, () => {
    console.log("Server running at port " + port);
})
