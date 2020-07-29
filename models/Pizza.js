const mongoose = require('mongoose');
const {Schema, model} = mongoose;

// creates our model to define what our data looks like wnad where it is stored in our database (what collection)

const PizzaSchema = new Schema(
    {
        name: String,
        toppings: [String]
    }, 
    {timestamps: true}
);

const Pizza = model('pizza', PizzaSchema)
// 'pizza' is the collection name
// PizzaSchema is the schema

module.exports = Pizza