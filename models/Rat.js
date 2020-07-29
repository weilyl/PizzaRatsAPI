const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const RatSchema = new Schema(
    {
        name: String,
        pizza: String 
        // id for corresponding pizza
    }, 
    { timestamps: true}
);

const Rat = model("Rat", RatSchema);

module.exports = Rat;