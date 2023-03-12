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
    id: "039478ea-ceff-4af4-956b-40517830dabd",
    officeId: "d4293495-7745-44c8-a451-deea99122f00",
    startDate: new Date("2023-01-01T09:30:00"),
    endDate: new Date("2023-01-01T12:30:00"),
    slotDuration: 10, // minute
    repeatStatus: repeatStatusENUM.onceAWeek,
    repeatStatusEndDate: new Date("2023-01-31T12:30:00"),
  },
];

// Fonction pour récupérer toutes les disponibilités de bureau
const getAll = (req, res) => {
  res.json(Data);
};

// Fonction pour récupérer une disponibilité de bureau en fonction de son ID
const get = (req, res) => {
  const { id } = req.params;
  const office = data.find((o) => o.id === id);

  if (office === undefined) {
    return res.status(404).json({ error: "Record not found" });
  }

  return res.json(office);
};

// vérfier que les office availability ne se chevauchent pas !

const add = (req, res) => {
  const {
    officeId,
    startDate,
    endDate,
    slotDuration,
    repeatStatus,
    repeatStatusEndDate,
  } = req.body;

  // Vérifier si des paramètres obligatoires sont manquants

  if (
    officeId == null ||
    startDate == null ||
    endDate == null ||
    slotDuration == null
  ) {
    return res.status(400).json({ error: "Missing parameter" });
  }
  // Vérifier si l'ID du bureau est valide

  if (!officeData.some((o) => o.id === officeId)) {
    return res.status(400).json({ error: "Unknown office !" });
  }

  // Convertir les dates en objets Date et vérifier leur validité
  const startDateTime = new Date(startDate);
  const endDateTime = new Date(endDate);

  if (!dateIsValid(startDateTime) || !dateIsValid(endDateTime)) {
    return res.status(400).json({ error: "Invalid date" });
  }

  // Vérifier si la date de début est avant la date de fin
  if (startDateTime.getTime() >= endDateTime.getTime()) {
    return res
      .status(400)
      .json({ error: "The first date should be after the end date" });
  }

  const office = {
    id: uuidv4(),
    officeId,
    startDate,
    endDate,
    slotDuration,
    repeatStatus,
    repeatStatusEndDate,
  };

  if (repeatStatus != null && !repeatStatusENUM[repeatStatus]) {
    return res.status(400).json({ error: "Unknown repeat status" });
  }

  const _repeatStatusEndDate = new Date(repeatStatusEndDate);

  if (repeatStatus != null && !dateIsValid(_repeatStatusEndDate)) {
    return res
      .status(400)
      .json({ error: "The repeat status end date is required !" });
  }

  office.repeatStatus = repeatStatus;
  office.repeatStatusEndDate = repeatStatusEndDate;

  data.push(office);

  res.json(office);
};

const remove = (req, res) => {
  const { id } = req.params;
  const officeAvailability = data.findIndex((o) => o.id == id);
  if (officeAvailability === -1) {
    return res.status(404).json({ error: "Record not found !" });
  }

  data.splice(officeAvailability, 1);

  return res.status(204).send();
};

const edit = (req, res) => {
  const { id } = req.params;
  const {
    startDate,
    endDate,
    slotDuration,
    repeatStatus,
    repeatStatusEndDate,
  } = req.body;

  const office = data.find((o) => o.id === id);

  if (office === undefined) {
    return res.status(404).json({ error: "Record not found !" });
  }

  if (startDate == null || endDate == null || slotDuration == null) {
    return res.status(400).json({ error: "Missing parameter" });
  }

  const _startDate = new Date(startDate);
  const _endDate = new Date(endDate);

  if (!dateIsValid(_startDate) || !dateIsValid(_endDate)) {
    return res.status(400).json({ error: "Invalid date" });
  }

  if (_startDate.getTime() >= _endDate.getTime()) {
    return res
      .status(400)
      .json({ error: "The first date should be after the end date" });
  }

  office.startDate = startDate;
  office.endDate = endDate;
  office.slotDuration = slotDuration;

  if (repeatStatus != null && !repeatStatusENUM[repeatStatus]) {
    return res.status(400).json({ error: "Unknown repeat status" });
  }

  const _repeatStatusEndDate = new Date(repeatStatusEndDate);

  if (repeatStatus != null && !dateIsValid(_repeatStatusEndDate)) {
    return res
      .status(400)
      .json({ error: "The repeat status end date is required !" });
  }

  office.repeatStatus = repeatStatus;
  office.repeatStatusEndDate = repeatStatusEndDate;

  return res.json(office);
};

module.exports = {
  getAll,
  get,
  add,
  remove,
  edit,
};
