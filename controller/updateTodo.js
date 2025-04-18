const Todo = require("../models/Todo");


exports.updateTodo = async (req, res) => {
   
     try{
       
        const id = req.params.id;

        const {title, description} = req.body;

        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {
                title,
                description,
                updatedAt:Date.now(),
            },
         
        );


        res.status(200).json({
            success:true,
            Data:todo,
            message:"Todo created successfully"
         
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