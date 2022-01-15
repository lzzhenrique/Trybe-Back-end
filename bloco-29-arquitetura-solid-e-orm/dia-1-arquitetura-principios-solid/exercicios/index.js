const express = require('express');
const app = express();
const plants = require('./plants');

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/plants', plants.getPlants);

app.get('/sunny/:id', plants.getPlantsThatNeedsSunWithId);

app.get('/plant/:id', plants.getPlantById);

app.delete('/plant/:id', plants.removePlantById);

app.post('/plant/:id', plants.editPlant);

app.post('/plant', plants.createNewPlant);

app.listen(PORT, () => console.log(`Conectado na porta ${PORT}`));
