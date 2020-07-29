const express = require('express');
const PizzaRouter = express.Router();
const {index, create, update, destroy} = require('../controllers/Pizza.js');
const Pizza = require('../models/Pizza.js');

// ROUTES

// get all Pizzas
PizzaRouter.get("/", index);

// create a new pizza
PizzaRouter.post("/", create);

// updating a pizza
PizzaRouter.put("/:id", update);

// destroy a pizza
PizzaRouter.delete("/:id", destroy);

module.exports = PizzaRouter