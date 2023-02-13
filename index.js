const express = require("express");
// require('dotenv').config()
const { connection } = require("./db")
const { foodRouter } = require("./routes/Food.routes")
const {fieldsAnalyzer} = require("./middleware/FieldsAnalyzer.middleware")
const {record} = require("./middleware/Record.middleware")


const app = express();
app.use(express.json());
app.use(fieldsAnalyzer);
app.use(record);


app.get("/", (req, res) => {
    res.send("Welcome food")
})
app.use("/foods", foodRouter)


app.listen(8080, async () => {
    try {
        await connection
        console.log("Connected to DB")
    } catch (e) {
        console.log("Not Connected to DB")
        console.log(e)
    }

    console.log(`listening on port 8080`);
});