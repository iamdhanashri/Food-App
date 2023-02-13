const mongoose=require("mongoose")
    const connection=mongoose.connect("mongodb+srv://dhanashri:ahire@cluster0.1t4wpeq.mongodb.net/foodapp?retryWrites=true&w=majority")




module.exports={
    connection 
}


