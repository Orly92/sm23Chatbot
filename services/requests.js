const axios = require('axios');

const sendGraphQLRequest = async (data) => {
    const request = {
        url: 'https://graphql.treew.com/klsogshlksfnlskg',
        method: 'post',
        data: {
            query: data.query,
            variables: data.variables,
        },
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer Sites84395gjidbfkge**3253t***dsv**',
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
