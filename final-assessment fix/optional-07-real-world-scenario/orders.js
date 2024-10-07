// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}


// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
	const newOrder = {
		id: generateUniqueId(),
		customerName: customerName,
		items: items,
		totalPrice: items.map(item => item.price).reduce((acc, currentValue) => acc + currentValue, 0),
		status: 'Menunggu',
	};

	orders.push(newOrder);
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
	orders = orders.map(order => {
		if(order.id === orderId){
			return {
				...order,
				status: status
			};
		}

		return order;
	})
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
	const total = orders.filter(order => order.status === 'Selesai').reduce((acc, order) => acc + order.totalPrice, 0);
	return total;
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
	orders = orders.filter(order => order.id !== id);
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
