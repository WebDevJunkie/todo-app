import dbConnect from "./dbConnect";
import ResponseWrapper from "./responseWrapper";
import Todo from './models/Todo';

exports.handler = async event => {
    const responseWrapper = new ResponseWrapper();

    try {
        await dbConnect();

        const todos = await Todo.find();

        return responseWrapper.success(todos);
    } catch (error) {
        console.log(error.message);
        return responseWrapper.failure({ message: 'server error' });
    }
};
