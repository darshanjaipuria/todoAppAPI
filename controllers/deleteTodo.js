//import the model
const Todo = require("../models/Todo");

//define route handler

exports.deleteTodo = async (req, res) => {
  try {
    // const id = req.params.id;   or
    const { id } = req.params;
    // const { title, description } = req.body;

    const todo = await Todo.findByIdAndDelete(id);

    //response
    if (todo) {
        res.status(200).json({
          success: true,
          data: todo,
          message: `Todo wwith ${id} was deleted successfully`,
        });
      }
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};
