const { v4: uuidv4 } = require('uuid');
const { dateIsValid } = require('../tools');
const { journeyData } = require('./journey');


// Données MOCK
const data = [
    {
        id: '64c3e98c-4209-47cb-b3b4-178062cea1b9',
        journeyId: 'a72dbfa0-9657-4af0-aa8f-42155492e179',
        startDate: new Date('2023-01-01T09:30:00'),
        endDate: new Date('2023-01-01T12:30:00'),
        appointmentDuration: 15, 
    }
];


// récupérer l'ensemble des voyages
const getAll = (req, res) => {
    res.json(data);
};


// Afficher un voyage 
const get = (req, res) => {
    const { id }  = req.params;
    const findjourney = data.find(findOff => {
        return findOff.id === id
    });

    if(findjourney === undefined) {
        return res.status(404).json({error: 'voyage non trouvé'});   
    }

    res.json(findjourney);
};


// Ajouter un voyage
const add = (req, res) => {
    const {   
        journeyId,
        startDate,
        endDate,
        appointmentDuration,
     } = req.body;
  

    if (journeyId == null || startDate == null || endDate == null || appointmentDuration == null) {
        return res.status(400).json({error: 'Paramètre manquant'});
    }

    if(!journeyData.some(off => off.id === journeyId)) {
        return res.status(400).json({error: 'voyage inconnu'});
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



    const journey = {
        id: uuidv4(),
        journeyId,
        startDate,
        endDate,
        appointmentDuration,
    };

    
    data.push(journey);

    res.json(journey);
};


// Supprimer un voyage
const remove = (req, res) => {
    const { id } = req.params;
    const journeyAvailability = data.findIndex(idjourney => idjourney.id == id);
    if (journeyAvailability === -1) {
        return res.status(404).json({error: 'voyage non trouvé'});
    }

    data.splice(journeyAvailability, 1);

    return res.status(204).send();
};


// Modifier un voyage
const edit = (req, res) => {
    const { id } = req.params;
    const {   
        startDate,
        endDate,
        appointmentDuration,
        } = req.body;
  

    const journey = data.find(o => o.id === id);
    
    if (journey === undefined) {
         return res.status(404).json({error: 'voyage non trouvé'});
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

    journey.startDate = startDate;
    journey.endDate = endDate;
    journey.appointmentDuration = appointmentDuration;

    return res.json(journey);
};


// exporter les méthodes
module.exports = {
    getAll,
    get,
    add,
    remove,
    edit,
};