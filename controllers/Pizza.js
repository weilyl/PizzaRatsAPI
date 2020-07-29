const Pizza = require("../models/Pizza.js")

// create our route handlers/controllers the functions our routes use when people send requests


// 7 RESTful routes/route handlers: index, new (front-end), create, show (can be front end or back end? according to Alex), update, destroy, edit (shows form for updating things)
    // new/show/edit only needed for multi-page applications



// INDEX Handler - GETS ALL PIZZA
// async lets JS know it is asynchronous, allows use of 'awake' keyword
const index = async (req, res) => {
    // try-block is similar to an if statement
    // together with catch-block it is called a try-catch block
    // try the try-block, if it doesn't work THEN run the catch-block
    try{
        const allPizza = await Pizza.find({}); // one line to use .then()
        // await can only be used in a function aside from in Deno
        res.status(200).json(allPizza)
        // explicitly setting code to 200
        // send allPizza back as JSON object
    }
    // downside don't get error when passed through callback or in catch-block for .then()
    catch(error){
        res.status(400).send(error)

    }

// OLD WAY - callbacks
// Pizza.find({}, (err, res) => {
//     res.json(res) // => get all the pizzas
// }

// LESS OLD WAY - .then() but still looks like callbacks
// Pizza.find({}) // returns a promise
// .then(res => { // runs once promise completed aka information is available
//     res.json(res)
// })

};

// CREATE Handler - Makes a new Pizza
const create = async (req, res) => {
    try {
        const newPizza = await Pizza.create(req.body); // create new pizza and store in newPizza  
        res.status(200).json(newPizza)
        // send info back to front end that made the request
    }
    catch(error){
        res.status(400).send(error)
    }
}

// UPDATE Handler - updates a pizza

const update = async (req, res) => {
    try{
        const updatedPizza = await Pizza.findByIdAndUpdate(req.params.id, req.body, {new: true}) // send updated Pizza to body instead of old version
        res.status(200).json(updatedPizza)
    }
    catch(error){
        res.status(400).send(error)
    }
}

// destroy handler - deletes a pizza
const destroy = async (req, res) => {
    try {
        const deletedPizza = await Pizza.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedPizza);
    }
    catch(error){
        res.status(400).send(error)
    }
}

module.exports = {
    index,
    create, 
    update, 
    destroy
}