const { v4: uuidv4 } = require("uuid");
const { dateIsValid } = require("../tools");
const { officeData } = require("./office");

// Enumération pour les options de répétition de disponibilité de bureau
const repeatStatusENUM = {
  onceAWeek: "onceAWeek",
  everyDay: "everyDay",
};

// Données de disponibilité de bureau mocke
const availabilityData = [
  {
    id: "d151f31c-2bc5-4200-83ad-54bfea88de1a",
    officeId: '4cd009d9-79d8-4c6e-8200-7c5ca4a156ac',
    startDate: new Date("2023-01-01T09:30:00"),
    endDate: new Date("2023-01-01T12:30:00"),
    slotDuration: 10, // minute
    repeatStatus: repeatStatusENUM.onceAWeek,
    repeatStatusEndDate: new Date("2023-01-31T12:30:00"),
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
  const {   
      officeId,
      startDate,
      endDate,
      appointmentDuration,
   } = req.body;


  if (officeId == null || startDate == null || endDate == null || appointmentDuration == null) {
      return res.status(400).json({error: 'Paramètre manquant'});
  }

  if(!officeData.some(off => off.id === officeId)) {
      return res.status(400).json({error: 'Cabinet inconnu'});
  }

  const _startDate  = new Date(startDate);
  const _endDate  = new Date(endDate);

  // Erreur si on rentre une date non valide
  if (!dateIsValid(_startDate) || !dateIsValid(_endDate)) {
      return res.status(400).json({error: 'Date non valide'});
  }


  // Erreur si on rentre une startDate plus récente que la endDate
  if (_startDate.getTime() >= _endDate.getTime()) {
      return res.status(400).json({error: 'La date de départ doit être avant la date de fin !'});
  }



  const office = {
      id: uuidv4(),
      officeId,
      startDate,
      endDate,
      appointmentDuration,
  };

  
  data.push(office);

  res.json(office);
};


// Méthode pour supprimer un cabinet
const remove = (req, res) => {
  const { id } = req.params;
  const officeAvailability = data.findIndex(idOffice => idOffice.id == id);
  if (officeAvailability === -1) {
      return res.status(404).json({error: 'Cabinet non trouvé'});
  }

  data.splice(officeAvailability, 1);

  return res.status(204).send();
};


// Méthode pour modifier un cabinet
const edit = (req, res) => {
  const { id } = req.params;
  const {   
      startDate,
      endDate,
      appointmentDuration,
      } = req.body;


  const office = data.find(o => o.id === id);
  
  if (office === undefined) {
       return res.status(404).json({error: 'Cabinet non trouvé'});
   }

  if (
      startDate == null || endDate == null || appointmentDuration == null) {
      return res.status(400).json({error: 'Paramètre manquant'});
  }
  
  const _startDate  = new Date(startDate);
  const _endDate  = new Date(endDate);

  // Erreur si on rentre une date non valide
  if (!dateIsValid(_startDate) || !dateIsValid(_endDate)) {
      return res.status(400).json({error: 'Date non valide'});
  }
  
  // Erreur si on rentre une startDate plus récente que la endDate
  if (_startDate.getTime() >= _endDate.getTime()) {
      return res.status(400).json({error: 'La date de départ doit être avant la date de fin !'});
  }

  office.startDate = startDate;
  office.endDate = endDate;
  office.appointmentDuration = appointmentDuration;

  return res.json(office);
};


// Permet d'exporter les méthodes
module.exports = {
  getAll,
  get,
  add,
  remove,
  edit,
};