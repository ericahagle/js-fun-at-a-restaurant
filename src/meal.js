function nameMenuItem(menuItemName) {
	return `Delicious ${menuItemName}`;
};

function createMenuItem(name, price, type) {
	var menuItem = {};
	return menuItem = {name: name, price: price, type: type}; 
};

function addIngredients(ingredient, ingredients) {
	if (!ingredients.includes(ingredient)) {
		ingredients.push(ingredient);
	};
	return ingredients;
};

function formatPrice(price, formattedPrice) {
	var formattedPrice = `$${price}`;
	return formattedPrice;
};

function decreasePrice(price) {
	var decreasedPrice = price * 0.9;
	return decreasedPrice;
};

function createRecipe(title, ingredients, type) {
	var recipe = {};
	return recipe = {title: title, ingredients: ingredients, type: type};
};

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
};


