function takeOrder(order, deliveryOrders) {
	if (deliveryOrders.length < 3) {
		deliveryOrders.push(order);
	};
	return deliveryOrders;	
};

function refundOrder(orderNumber, deliveryOrders) {
	for (var i = 0; i < deliveryOrders.length; i++) {
		if (deliveryOrders[i].orderNumber === orderNumber) {
			deliveryOrders.splice(i, 1);
		};
	};
	return deliveryOrders;
};

function listItems(deliveryOrders) {
	var itemNames = "";
	for (var i = 0; i < deliveryOrders.length; i++) {
		var item = deliveryOrders[i].item;
		itemNames += item + ", ";
	};
	itemNames = itemNames.slice(0, -2);
	return itemNames;
};

function searchOrder(deliveryOrders, item) {
	for (var i = 0; i < deliveryOrders.length; i++) {
		if (deliveryOrders[i].item === item) {
			return true;
		};
	};
	return false;
};


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
};