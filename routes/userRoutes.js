import  express  from "express";
import { 
    authUser, 
    getUserProfile,
    updateUserProfile,
    registerUser,
    logOutUser, } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router()


router.post("/", registerUser)
router.post("/auth", authUser)
router.post("/logout",logOutUser)

router.route("/profile")
    .get(protect,getUserProfile)
    .put(protect,updateUserProfile)


export default router