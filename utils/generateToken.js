import jwt from "jsonwebtoken";

const generateToken = (res,userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET,{
        expiresIn: "30d"
    })
    ;

    console.log(token);

    
    // In your server response headers
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    res.cookie("jwt", token, {
        domain: ".onrender.com",
        secure: true,
        sameSite: "None",
        maxAge: 30 * 60 * 60 * 24 * 1000,

        }) 

        console.log("cookies sent");
}

export default generateToken
