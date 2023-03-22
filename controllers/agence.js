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
// Méthode pour récupérer l'ensemble des cabinets
const getAll = (req, res) => {
  res.json(data);
};


// Méthode pour afficher un cabinet
const get = (req, res) => {
  const { id }  = req.params;
  const findoffice = data.find(findOff => {
      return findOff.id === id
  });

  if(findoffice === undefined) {
      return res.status(404).json({error: 'Cabinet non trouvé'});   
  }

  res.json(findoffice);
};


// Méthode pour ajouter un cabinet
const add = (req, res) => {
  const { name } = req.body;
  const { description } = req.body;

  if(name == null || description == null) {
      return res.status(400).json({error: 'Paramètre manquant'});
  }

  const office = {
      id: uuidv4(),
      name: name,
      description: description,
  };

  data.push(office);
  res.json(office);
};


// Méthode pour modifier un cabinet
const edit = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { description } = req.body;

  if(name == null || description == null) {
      return res.status(400).json({error: 'Paramètre manquant'});
  }

  const office = data.find(o => o.id === id);

  if (office === undefined) {
      return res.status(404).json({error: 'Cabinet non trouvé'});
  }

  office.name = name;
  office.description = description;

  return res.json(office);
};


// Méthode pour supprimer un cabinet
const remove = (req, res) => {
  const { id } = req.params;
  const officeIndex = data.findIndex(idOffice => idOffice.id == id);
  if (officeIndex === -1) {
      return res.status(404).json({error: 'Cabinet non trouvé'});
  }

  data.splice(officeIndex, 1);

  return res.status(204).send();
};


// Permet d'exporter les méthodes
module.exports = {
  getAll,
  get,
  add,
  remove,
  edit,
  officeData: data
};