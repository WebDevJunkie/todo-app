import dbConnect from "./dbConnect";
import ResponseWrapper from "./responseWrapper";
import Todo from "./models/Todo";

exports.handler = async event => {
    const responseWrapper = new ResponseWrapper();
    const id = event['pathParameters']['id'];
    const body = JSON.parse(event.body);

    try {
        await dbConnect();

        const todo = await Todo.findById(id);

        if (!todo)
            return responseWrapper.notFound({ message: 'todo not found' });

        await Todo.findByIdAndUpdate(id, body);
        const returnTodo = await Todo.findById(id);

        return responseWrapper.success(returnTodo);
    } catch (error) {
        console.log(error.message);
        return responseWrapper.failure({ message: 'server error' });
    }
};
