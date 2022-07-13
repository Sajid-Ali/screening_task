const { makeApiCall } = require("../lib/axios-client");

const checkCorrectNess = async (req, res, next) => {
  try {
    let words = [];
    const { message } = req.body;
    const source = await makeApiCall();
    const result = source?.data.split(/\r?\n?\s+/g);
    const input = message.split(/\r?\n?\s+/g);
    for (let i = 0; i < input.length; i++) {
      const word = input[i].replace(/[^a-zA-Z0-9 ]/g, "");
      const isExist = result.find(
        (row) => row.toLowerCase() == word.toLowerCase()
      );
      if (!isExist) {
        words.push(word);
      }
    }
    res.json({ message: "Check correctness successfully", words });
  } catch (error) {
    next(error);
  }
};

module.exports = { checkCorrectNess };
