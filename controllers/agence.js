const { v4: uuidv4 } = require("uuid");

const data = [
  {
    id: "4cd009d9-79d8-4c6e-8200-7c5ca4a156ac",
    name: "Agence 1",
  },
  {
    id: "b1aaa2f3-60aa-4829-b8c2-154306f6dd1a",
    name: "Agence 2",
  },
];
const getAll = (req, res) => {
  return res.json(data);
};

module.exports = {
  getAll,
};
