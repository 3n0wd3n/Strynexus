const { NextApiRequest, NextApiResponse } = require("next");
const openai = require("../../utils/openai");

const handler = async (req, res) => {
  const completion = await openai.createCompletion({
    model: "text-davinci-083",
    prompt: "Hello world!",
  });
  res.status(200).json(completion);
};

module.exports = handler;
