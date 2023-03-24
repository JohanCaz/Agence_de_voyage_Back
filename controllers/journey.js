// Voyage

const { v4: uuidv4 } = require('uuid');
const data = [
    {
        id: 'a72dbfa0-9657-4af0-aa8f-42155492e179',
        name: 'voyage 1'
    },
    {
        id: 'a7a00fee-2bf6-4d0c-a0e8-8c0f307f3b7f',
        name: 'voyage 2'
    }
];
//Afficher un voyage

const getAll = (req, res) => {
    res.json(data);
}

const get = (req, res) => {
    const { id }  = req.params;
    const journey = data.find(o => {
        return o.id === id
    });

    if(journey === undefined) {
        return res.status(404).json({error: 'Enregistrement non trouvé'});   
    }

    res.json(journey);
}
//Ajouter un voyage

const add = (req, res) => {
    const { name } = req.body;
    if(name == null) {
        return res.status(400).json({error: 'Paramètre manquant'});
    }

    const journey = {
        id: uuidv4(),
        name
    };

    data.push(journey);

    res.json(journey);
}

//Supprimer le voyage

const remove = (req, res) => {
    const { id } = req.params;
    const journeyIndex = data.findIndex(o => o.id == id);
    if (journeyIndex === -1) {
        return res.status(404).json({error: 'Enregistrement non trouvé !'});
    }

    data.splice(journeyIndex, 1);

    return res.status(204).send();
}


//Modifier un voyage

const edit = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    if(name == null) {
        return res.status(400).json({error: 'Paramètre manquant'});
    }
    const journey = data.find(o => o.id === id);
    if (journey === undefined) {
        return res.status(404).json({error: 'Enregistrement non trouvé !'});
    }

    journey.name = name;

    return res.json(journey);
}



module.exports = {
    getAll,
    get,
    add,
    remove,
    edit,
}