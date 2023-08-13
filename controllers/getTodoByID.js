//import th model
const Todo = require("../models/Todo");

exports.getTodoByID = async (req, res) => {
  try {
    //fetch all todo item from database by ID
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });

    //response
    if (todo) {
      res.status(200).json({
        success: true,
        data: todo,
        message: "Data fetched successfully for the given id",
      });
    }
    //data for given id not found
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "No data found for given id",
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server Error",
    });
  }
};
