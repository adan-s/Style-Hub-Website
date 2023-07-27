const express = require("express");
const router = express.Router();


router.post('/clothesData',(req,res)=>{
    try {
        res.send([global.clothing_items,global.clothing_category]);
        console.log(global.clothing_items,global.clothing_category);
    } catch (error) {
        console.error(error.message);
        res.send("Server Error");
    }
})

module.exports=router;