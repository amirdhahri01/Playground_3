var menu = [{ name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 }];
var cashInRegister = 100;
var nextOrderId = 1;
var orderQueue = [];
var addNewPizza = function (pizza) {
    menu.push(pizza);
};
var placeOrder = function (pizzaName) {
    var pizza = menu.find(function (p) { return p.name === pizzaName; });
    if (!pizza) {
        return;
    }
    cashInRegister += pizza.price;
    var newOrder = { id: nextOrderId++, pizza: pizza, status: "ordered" };
    orderQueue.push(newOrder);
    return newOrder;
};
var completeOrder = function (orderID) {
    var order = orderQueue.find(function (order) { return order.id === orderID; });
    if (!order) {
        return;
    }
    order.status = "completed";
    return order;
};
addNewPizza({ name: "Chicken Bacon Banch", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 12 });
addNewPizza({ name: "Spicy Sausage", price: 11 });
placeOrder("Chicken Bacon Banch");
completeOrder(1);
console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);
// let myName : string = "Amir Dhahri";
// type Food = string
// type Person = {
//     name : string,
//     age : number,
//     isStudent : boolean
// }
// const person : Person = {
//     name : "Amir Dhahri",
//     age : 20,
//     isStudent : true 
// }
// type Person = {
//     name : string,
//     age : number ,
//     isStudent : boolean,
//     address : [
//         {
//             tel : string,
//             address : string
//         }
//     ]
// }
// const myNam : "AMir" = "AMir";
var Days;
(function (Days) {
    Days["Monday"] = "Monday";
    Days["Tuesday"] = "Tuesday";
})(Days || (Days = {}));
var day = Days.Monday;
console.log(day);
