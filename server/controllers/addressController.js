import Address from "../models/Address.js"

// add address: /api/address/add
export const addAddress = async (req, res) => {
    try {
        // 1. Get address from body (sent by React)
        const { address } = req.body; 
        
        // 2. Get userId from request object (attached by authUser middleware)
        const userId = req.userId; 

        // 3. Create the document
        await Address.create({ ...address, userId });

        res.json({ success: true, message: "Address added Successfully" });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}

// Get address: /api/address/get
export const getAddress = async (req, res) => {
    try {
        // FIX THIS HERE TOO: Use req.userId
        const userId = req.userId;
        
        const addresses = await Address.find({ userId });
        res.json({ success: true, addresses });

    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}