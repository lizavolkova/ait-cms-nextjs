export const isEmpty = (obj) => {
    return !Object.keys(obj).length;
}

/**
 * Helper function
 * @param {*} statusCode
 * @param {*} message
 * https://medium.com/tech-at-nordstrom/building-a-rest-api-in-node-js-using-aws-services-mongodb-and-serverless-framework-9e0530baaa3f
 * @returns
 */
export const createErrorResponse = (statusCode, message) => ({
    statusCode: statusCode || 501,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        error: message || 'An Error occurred.',
    }),
});

/**
 *
 * @param {*} error Error message
 */
export const returnError = (error) => {
    console.error(error);
    if (error.name) {
        const message = `Invalid ${error.path}: ${error.value}`;
        return createErrorResponse(400, `Error:: ${message}`);
    } else {
        return createErrorResponse(error.statusCode || 500, `Error:: ${error.name}`);
    }
};

export const returnSuccess = (data) => {
    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": 'http://localhost:3000',
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "*",
            "Access-Control-Allow-Credentials": true,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    }
}