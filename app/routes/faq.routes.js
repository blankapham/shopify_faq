module.exports = app => {
    const faq = require("../controllers/faq.controller.js");
    var router = require("express").Router();
    // Create a new Faq
    router.post("/", faq.create);
    // Retrieve all Faq of a user
    router.get("/:user_id", faq.findAll);
    // Retrieve a single Faq by a Category
    router.get("/:id", faq.findOne);
    // Update a Faq with id
    router.put("/:id", faq.update);
    // Delete a Faq with id
    router.delete("/:id", faq.delete);
    // Delete all Faq
    router.delete("/:category_id", faq.deleteAll);
    app.use('/api/faq', router);
};
