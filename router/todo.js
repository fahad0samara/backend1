const express = require('express');
const router = express.Router();
const fahad=require('../mongo')

router.get('/' ,async (req, res, next) => {
    try{
        const data=await fahad.find({})
        res.json(data)
    }catch(error){
        next(error);
    }
})
router.post('/' ,async (req, res, next) => {
    try{
        const data= new fahad({
            name: req.body.name,
            des:req.body.des
        })
        const savadata= await data.save()
        res.json(savadata)

    }catch(error){
        next(error);
    }
   
})


module.exports = router;