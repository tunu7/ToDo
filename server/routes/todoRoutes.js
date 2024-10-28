const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

// Create a new ToDo
router.post("/", async (req, res) => {
    const newTodo = new Todo({
        title: req.body.title,
    });
    try {
        const savedTodo = await newTodo.save();
        res.json(savedTodo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all ToDos
router.get("/", async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a ToDo
router.put("/:id", async (req, res) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            { completed: req.body.completed },
            { new: true }
        );
        res.json(updatedTodo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete a ToDo
router.delete("/:id", async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.json({ message: "ToDo deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
