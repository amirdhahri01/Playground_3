const menu = [{name:"Margherita" , price:8},
              {name:"Pepperoni" , price:10},
              {name:"Hawaiian" , price:10},
              {name:"Veggie" , price:9}]
const cashInRegister = 100
let nextOrderId = 1;
const orderQueue = []

const addNewPizza = (pizza) => {
    menu.push(pizza)
}
const placeOrder = (pizzaName) => {
    const pizza = menu.find((p) => p.name === pizzaName);
    cashInRegister += pizza.price;
    const newOrder = {id : nextOrderId++ , pizza , status:"ordered"};
    orderQueue.push(newOrder)
    return newOrder;
}
const completeOrder = (orderID) => {
    const order = orderQueue.find(order => order.id === orderID);
    order.status = "completed"
    return order
}

addNewPizza({name:"Chicken Bacon Banch" , cost:12})
addNewPizza({name:"BBQ Chicken" , cost:12})
addNewPizza({name:"Spicy Sausage" , cost:11})
placeOrder("Chicken Bacon Banch")
completeOrder(1)
console.log("Menu:",menu);
console.log("Cash in register:",cashInRegister);
console.log("Order queue:" , orderQueue);

