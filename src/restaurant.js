function createRestaurant(name, menus) {
	var restaurant = {name: name, menus: {breakfast: [], lunch: [], dinner: []}};
	return restaurant;
};


function addMenuItem(restaurant, item) {
	if (item.type === "breakfast" && !restaurant.menus.breakfast.includes(item)) {
		restaurant.menus.breakfast.push(item);
	} else if (item.type === "lunch" && !restaurant.menus.lunch.includes(item)) {
		restaurant.menus.lunch.push(item);
	} else if (item.type === "dinner" && !restaurant.menus.dinner.includes(item)) {
		restaurant.menus.dinner.push(item);
	};
	return restaurant;
};


function removeMenuItem(restaurant, name, type) {
	var menu = restaurant.menus[type];
	for (var i = 0; i < menu.length; i++) {
		if (menu[i].name === name) {
			menu.splice(i, 1)[0];
			return `No one is eating our ${name} - it has been removed from the ${type} menu!`;
		};	
	};
	return `Sorry, we don't sell ${name}, try adding a new recipe!`;
};


function checkForFood(restaurant, foodItem) {
	if (foodItem.type === "breakfast") {
		for (var i = 0; i < restaurant.menus.breakfast.length; i++) {
			if (foodItem.name === restaurant.menus.breakfast[i].name && foodItem.price === restaurant.menus.breakfast[i].price) {
				return `Yes, we're serving ${foodItem.name} today!`;
			};
		};
	} else if (foodItem.type === "lunch") {
		for (var i = 0; i < restaurant.menus.lunch.length; i++) {
			if (foodItem.name === restaurant.menus.lunch[i].name && foodItem.price === restaurant.menus.lunch[i].price) {
				return `Yes, we're serving ${foodItem.name} today!`;
			};
		};
	} else if (foodItem.type === "dinner") {
		for (var i = 0; i < restaurant.menus.dinner.length; i++) {
			if (foodItem.name === restaurant.menus.dinner[i].name && foodItem.price === restaurant.menus.dinner[i].price) {
				return `Yes, we're serving ${foodItem.name} today!`;
			};
		};
	}
	return `Sorry, we aren't serving ${foodItem.name} today.`;
};


module.exports = {
	createRestaurant, 
	addMenuItem,
	removeMenuItem,
	checkForFood
}