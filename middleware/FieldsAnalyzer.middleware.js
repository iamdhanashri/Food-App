const fs = require("fs")
const fieldsAnalyzer = (req, res, next) => {
    const { dish_name, price, cuisine, rating } = req.body;
    if (!dish_name || !price || !cuisine || !rating) {
      return res.send({ "err": "Few fields are missing, cannot process the request" })
    }
    
    
    next();

};

module.exports={
    fieldsAnalyzer
}