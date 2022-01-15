/* index.js */
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.use(bodyParser.json());

// get all recipe
app.get('/recipes', (req, res) => {
  const recipesOrdered = recipes.sort((a, b) => a.name.localeCompare(b.name));
  res.json(recipesOrdered);
});

// get all drinks
app.get('/drinks', (req, res) => {
  const drinksOrdered = drinks.sort((a, b) => a.name.localeCompare(b.name));
  res.json(drinksOrdered);
});

// get drinks by name && price
app.get('/drinks/search', (req, res) => {
  const { name, maxPrice, minPrice } = req.query;
  const filterDrinks = drinks.filter((drink) => {
    return drink.name.includes(name);
  });

  if(!filterDrinks) {
    return res.status(404).json({ message: 'Drink not found!' });
  };

  res.json(filterDrinks);
});

// get recipe by name && price
app.get('/recipes/search', (req, res) => {
  const { name, maxPrice, minPrice } = req.query;
  const filterRecipes = recipes.filter((recipe) => {
    return recipe.price >= parseInt(minPrice);
  });

  if(!filterRecipes) {
    return res.status(404).json({ message: 'Recipe not found!' });
  };

  res.json(filterRecipes);
});

// get recipe by id
app.get('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const findRecipe = recipes.find((recipe) => recipe.id === parseInt(id));

  if(!findRecipe) {
    return res.status(404).json({ message: 'Recipe not found!' });
  };

  res.json(findRecipe);
});

// get drink by id
app.get('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const findDrink = drinks.find((drink) => drink.id === parseInt(id));

  if(!findDrink) {
    return res.status(404).json({ message: 'Drink not found!' });
  };

  res.json(findDrink);
});

// make recipes
app.post('/recipes', (req, res, next) => {
  const { name } = req.body;
  if(!name || name === '') {
    return res.status(400).json({
      message: 'Invalid Data!'
    });
  };

  next();
});

const getRecipe = () => {
  const { id, name, price, waitTime } = req.body;
  recipes.push({ id, name, price, waitTime });
  res.status(201).json( {
    message: 'Recipe created successfully!'
  });
}

// make drinks
app.post('/drinks', (req, res) => {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price });
  res.status(201).json( {
    message: 'Drink created successfully!'
  });
});

// validate tokens
app.get('/validateToken', (req, res) => {
  const token = req.headers.authorization;
  if (token.length !== 16) {
    return res.status(401).json({
      message: 'Invalid Token'
    });
  };

  res.status(200).json({
    message: 'Valid Token!!!!!!!!!!'
  });
});

// ...

app.put('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});
// ...

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

//...

app.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

//...

app.all('*', (req, res) => {
  return res.status(404).json({
    message: `Rota ${req.path} não existe!`
  });
});