import  express  from "express";
import dotenv from "dotenv";
import path from "path"
import userRoutes from "./routes/userRoutes.js"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
dotenv.config();
import connectDb from "./config/db.js";
import logger from "./middleware/logEvent.js";
import cookieParser from "cookie-parser";
connectDb();

const port = process.env.PORT || 5000
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cookieParser())
app.use(logger);
app.use("/api/users", userRoutes);

if(process.env.NODE_ENV ===  "production") {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, "frontend/dist")))
    app.get("*", (req,res) => res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html")) )
}else{
    app.get("/", (req,res) =>{
        res.send("Server is ready")
    
    })
}






app.use(notFound)
app.use(errorHandler)


app.listen(port, () => {
    console.log("Server running at port " + port);
})