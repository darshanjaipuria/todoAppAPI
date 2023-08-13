//import th model
const Todo = require("../models/Todo");

exports.getTodo = async(req,res) => {
    try {
        //fetch all todo item from database
        const todos = await Todo.find({});
        
        //response
        res.status(200).json({
            success: true,
            data: todos,
            message: "All of the Data fetched successfully",
        })

    }
    catch(err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Server Error"
        })
    }
}