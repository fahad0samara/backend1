const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://fahad:fahad@cluster0.o2fcp.mongodb.net/0add?retryWrites=true&w=majority").then((params) => {
    console.log("connected to mongo");

}).catch((errr) => {
    log.error(errr);
})
const db = new mongoose.Schema({
         
    name: {
        type: "string",
        required: true
    },
    des: {
        type: "string",
        required: true
    },
    image: {
        type: "string",
        required: true,

    }
},
    { timestamps: true },
    
)
module.exports = mongoose.model('add', db)