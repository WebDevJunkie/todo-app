import dbConnect from "./dbConnect";

exports.handler = async event => {
    try {
        await dbConnect();
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify({ message: 'get todos' })
        };
    } catch (error) {
        console.log(error.message);
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify({ message: 'server error' })
        };
    }
};
