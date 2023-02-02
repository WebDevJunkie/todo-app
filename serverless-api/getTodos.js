import dbConnect from "./dbConnect";
import ResponseWrapper from "./responseWrapper";

exports.handler = async event => {
    const responseWrapper = new ResponseWrapper();
    try {
        await dbConnect();
        return responseWrapper.success({ message: 'get todos' });
    } catch (error) {
        console.log(error.message);
        return responseWrapper.failure({ message: 'server error' });
    }
};
