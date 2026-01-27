
import User from "../models/User.js"

export const updateCart = async (req, res) => {
    try {
        // 1. Get userId from req.userId (Added by authUser middleware)
        const userId = req.userId; 
        
        // 2. Get cartItems from req.body (Sent from AppContext.jsx)
        const { cartItems } = req.body; 

        // 3. Update the database
        await User.findByIdAndUpdate(userId, { cartItems });
        
        res.json({ success: true, message: "Cart Updated" });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}