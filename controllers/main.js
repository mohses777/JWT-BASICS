const jwt = require("jsonwebtoken");
const { BadRequest } = require("../errors");

const login = async (req,res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequest("Please provide email and password");
  }

  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "20d",
  });

  res.status(200).json({ msg: "user created succesfully", token });
};

const dashboard = async (req,res) => {
  const randomNumbers = Math.floor(Math.random() * 100);

  res.status(200).json({
    msg: `Hello ${req.username}`,
    secret: `Here is your secret number ${randomNumbers}`,
  });
};

module.exports = { login, dashboard };
