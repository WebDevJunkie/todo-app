class ResponseWrapper {
    success(body) {
        return this._buildResponse(200, body);
    }

    failure(body) {
        return this._buildResponse(500, body);
    }

    _buildResponse(statusCode, body) {
        return {
            statusCode: statusCode,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify(body)
        };
    }
}

export default ResponseWrapper;
