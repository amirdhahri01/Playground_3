var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var nextPizza = 1;
var menu = [{ id: nextPizza++, name: "Margherita", price: 8 },
    { id: nextPizza++, name: "Pepperoni", price: 10 },
    { id: nextPizza++, name: "Hawaiian", price: 10 },
    { id: nextPizza++, name: "Veggie", price: 9 }];
var cashInRegister = 100;
var nextOrderId = 1;
var orderQueue = [];
var addNewPizza = function (pizza) {
    var newPizza = __assign({ id: nextPizza++ }, pizza);
    menu.push(newPizza);
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
// enum Days{
//     Monday = "Monday",
//     Tuesday = "Tuesday"
// }
// let day = Days.Monday;
// console.log(day);
// type UserRole = "Admin" | "Guest" | "Student"
// let role : UserRole;
// role = "Student"
// const getPizzaDetail = (identifier : string | number)=>{
//     if(typeof identifier === "string"){
//         return menu.find(pizza => pizza.name === identifier);
//     }else if(typeof identifier == "number"){
//         return menu.find(pizza => pizza.id === identifier);
//     }else{
//         throw new TypeError("Parameter `identifier` must be either a string or a number");
//     }
// }
// type User ={
//     id: number,
//     username : string,
//     role: "member" | "contributer" | "admin"
// }
// type UserUpdate = Partial<User>
// let userId = 1;
// const users : User [] = [
//     {id : userId++, username :"Dhahri", role :"admin"},
//     {id : userId++, username :"ada Dhahri", role :"member"},
//     {id : userId++, username :"Amiazdazr Dhahri", role :"contributer"},
//     {id : userId++, username :"Amirazdazdaz Dhahri", role :"member"},
// ]
// const updateUser = (id : number , updates : UserUpdate) => {
//     const userFound = users.find(person => person.id === id);
//     if(!userFound){
//         console.log("User not found");
//         return;
//     }
//     Object.assign(userFound , updates);
// }
// updateUser(1 , {username:"Amir Dhahri"});
// updateUser(4 , {role : "contributer"})
// const addNewUser = (newUser : Omit<User , "id">) : User => {
//     const user : User = {
//         id : userId++,
//         ...newUser
//     }
//     users.push(user);
//     return user;
// }
var gameScore = [14, 21, 33, 42, 59];
var favoriteThings = ["raindrops on roses", "whiskers on kittens", "bright copper kettles", "warm woolen mittens"];
var voters = [{ name: "Alice", age: 21 }, { name: "Amir", age: 21 }];
var getLastItem = function (array) {
    return array[array.length - 1];
};
console.log(getLastItem(gameScore));
console.log(getLastItem(favoriteThings));
console.log(getLastItem(voters));
