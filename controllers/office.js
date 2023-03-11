const data = [
  {
    id: "d4293495-7745-44c8-a451-deea99122f00",
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
