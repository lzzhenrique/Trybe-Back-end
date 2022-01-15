const defaultPlants = [
  {
    id: 1,
    breed: "Bromelia",
    needsSun: false,
    origin: "Argentina",
    size: 102,
    specialCare: {
      waterFrequency: 3,
    },
  },
  {
    id: 2,
    breed: "Orquidea",
    size: 99,
    needsSun: false,
    origin: "Brazil",
  },
];

let createdPlants = 0;

const getPlants = (_req, res) => {
  return res.status(200).json(defaultPlants)
};

const getPlantById = (req, res) => {
  const { id } = req.params;
  console.log(id)
  const findPlantById = defaultPlants.filter((plant) => plant.id === parseInt(id, 10));

  return res.status(200).json(findPlantById);
};

const removePlantById = (req, res) => {
  const { id } = req.params;
  const removePlant = defaultPlants.filter((plant) => parseInt(plant.id, 10) !== parseInt(id, 10));

  return res.status(200).json(removePlant);
};

const editPlant = (req, res) => {
  const { id } = req.params;
  const { newPlant } = req.body;

  defaultPlants.filter((plant) => console.log(plant.id, newPlant.id));

  console.log(defaultPlants)

  return res.status(200).json(defaultPlants);
};

const createNewPlant = (req, res) => {
  const { newPlant } = req.body;

  defaultPlants.push(newPlant);

  const showNewPlant = defaultPlants.filter((plant) => plant.id === newPlant.id);

  return res.status(200).json(findEditedPlant);
};

const getPlantsThatNeedsSunWithId = (req, res) => {
  const { id } = req.params;
  const filteredPlants = defaultPlants.filter((plant) => plant.needsSun && plant.id === id );
  return res.status(200).json(filteredPlants);
};

const initPlant = (id, breed, needsSun, origin, specialCare, size) => {
  const waterFrequency = needsSun ? size *  0.77 + (origin === 'Brazil' ? 8 : 7)
    : (size / 2) *  1.33 + (origin === 'Brazil' ? 8 : 7)
  const newPlant = {
    id,
    breed,
    needsSun,
    origin,
    specialCare: {
      waterFrequency,
      ...specialCare,
    },
    size,
  };
  return newPlant;
};

const savePlants = () => {
  const plants = JSON.stringify(defaultPlants);
  localStorage.setItem("plants", plants);
};


module.exports = {
  editPlant,
  getPlantById,
  getPlants,
  createNewPlant,
  getPlantsThatNeedsSunWithId,
  savePlants,
  removePlantById,
}