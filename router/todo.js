const express = require('express');
const router = express.Router();
const fahad=require('../mongo')
const multer  = require('multer')
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'image')
    },
    filename:function(req,file,cb){
        cb(null,new Date().toDateString()+file.originalname)
    }
})
const upload=multer({
    storage:storage
})

router.get('/', upload.single('file') ,async (req, res, next) => {
    try{
        const data=await fahad.find({})
        res.json(data)
    }catch(error){
        next(error);
    }
})
router.post('/' ,async (req, res, next) => {
    try{
        const data= new fahad(req.body)
        data.image=req.body.path
        const savadata= await data.save()
        res.json(savadata)

    }catch(error){
        next(error);
    }
   
})
router.route('/:id').put( async (req, res, next) => {
    try{
const data=await fahad.findByIdAndUpdate(req.params.id, req.body,{new:true})
res.json(data)      

    }catch(error){
        next(error);
    }
}).delete(async (req, res, next) =>{
   try{
       const data=await fahad.findByIdAndDelete(req.params.id)
       res.json(data)
   }catch(error){
next(error);
   }
})

module.exports = router;