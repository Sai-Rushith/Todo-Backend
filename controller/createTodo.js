const Todo = require("../models/Todo");


exports.createTodo = async (req, res) => {
   
     try{
        const {title, description} = req.body;

        const response = await Todo.create({
            title,
            description,
        });

        res.status(200).json({
            success:true,
            message:"Todo created successfully",
            response,
        });
     }

     catch(error){
        res.status(500).json({
            success:false,
            message:"Todo creation failed",
            error:error.message,
        });
     }

}