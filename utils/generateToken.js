import jwt from "jsonwebtoken";

const generateToken = (res,userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET,{
        expiresIn: "30d"
    })
    ;

    console.log(token);

    

    res.cookie("jwt", token, {
        domain: ["mern-first-mike-project.onrender", "mern-first-mike-project", "mern-first-mike-project.onrender.com"]
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "None",
        maxAge: 30 * 60 * 60 * 24 * 1000,

        }) 

        console.log("cookies sent");
}

export default generateToken
