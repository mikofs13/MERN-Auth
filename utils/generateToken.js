import jwt from "jsonwebtoken";

const generateToken = (res,userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET,{
        expiresIn: "30d"
    })
    ;

    console.log(token);

    

/*     res.cookie("jwt", token, {
        
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "none",
        maxAge: 30 * 60 * 60 * 24 * 1000,
        signed: true
        }) */
        res.setHeader("Cookie", `${token}; HttpOnly; Secure; SameSite=Strict `)

        console.log("cookies sent");
}

export default generateToken