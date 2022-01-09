const axios = require('axios');

const sendGraphQLRequest = async (data) => {
    const request = {
        url: data.url,
        method: 'post',
        data: {
            query: data.query,
            variables: data.variables,
        },
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer m4G1c_T0keN_foR_4piC4l1c3n7er',
        },
    };

    const response = await axios(request);

    if (response.data.errors && response.data.errors.length) {

        throw new Error(message);
    }

    return response.data.data;
};

module.exports = {
    sendGraphQLRequest
};
