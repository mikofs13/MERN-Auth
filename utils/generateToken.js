import jwt from "jsonwebtoken";

const generateToken = (res,userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET,{
        expiresIn: "30d"
    })
    ;

    console.log(token);

    

    res.cookie("jwt", token, {
        maxAge: 30 * 60 * 60 * 24 * 1000
    })

        console.log("cookies sent");
}

export default generateToken