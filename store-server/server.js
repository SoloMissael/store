const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

const productRouter = require("./routes/product");
app.use("/product", productRouter);

mongoose.connect('mongodb+srv://solomissael:1234@cluster0.2x8o6.mongodb.net/storeDB?retryWrites=true&w=majority',{useNewUrlParser : true,useUnifiedTopology: true},()=>{
    console.log('Connected to database');
});

const PORT = (process.env.PORT || 5000);

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`)
});