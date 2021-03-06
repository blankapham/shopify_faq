module.exports = app => {
    const category = require("../controllers/faq_category.controller.js");
    var router = require("express").Router();
    // Create a new Category
    router.post("/", category.create);
    // Retrieve all Category of a user
    router.get("/user/:user_id", category.findAll);
    // Retrieve a single Category
    router.get("/:id", category.findOne);
    // Update a Category with id
    router.put("/:id", category.update);
    // Delete a Category with id
    router.delete("/:id", category.delete);
    // Delete all User
    router.delete("/:user_id", category.deleteAll);
    app.use('/api/faq-category', router);
};
