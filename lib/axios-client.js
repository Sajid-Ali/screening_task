const axios = require("axios");
const { RESPONSE_FORMAT } = require("../utilities/constants");

const makeApiCall = async () => {
    try {
        const response = await axios.get(process.env.PO_DATA_URL);
        return { ...RESPONSE_FORMAT, data: response?.data, success: true }
    } catch (error) {
        console.log(error);
        return { ...RESPONSE_FORMAT, error: error }
    }
}

module.exports = { makeApiCall };