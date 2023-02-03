import dbConnect from "./dbConnect";
import ResponseWrapper from "./responseWrapper";
import Todo from "./models/Todo";

exports.handler = async event => {
    const responseWrapper = new ResponseWrapper();

    try {
        await dbConnect();
        const body = JSON.parse(event.body);

        const newTodo = new Todo({ title: body.title, description: body.description });

        await newTodo.save();

        return responseWrapper.success(newTodo);
    } catch (error) {
        console.log(error.message);
        return responseWrapper.failure({ message: 'server error' });
    }
};
