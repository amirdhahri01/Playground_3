type Pizza = {
    id : number,
    name : string,
    price : number
}
type Order = {
    id : number,
    pizza : Pizza,
    status: "ordered" | "completed"
}
const menu : Pizza [] =  [{id:1 , name:"Margherita" , price:8},
                          {id:2 , name:"Pepperoni" , price:10},
                          {id:3 , name:"Hawaiian" , price:10},
                          {id:4 , name:"Veggie" , price:9}]

let cashInRegister : number = 100
let nextOrderId : number = 1;
const orderQueue : Order[] = []

const addNewPizza = (pizza : Pizza) => {
    menu.push(pizza)
}

const placeOrder = (pizzaName : string) : Order | undefined => {
    const pizza = menu.find((p) => p.name === pizzaName);
    if(!pizza){
        return;
    }
    cashInRegister += pizza.price;
    const newOrder : Order = {id : nextOrderId++ , pizza , status:"ordered"};
    orderQueue.push(newOrder)
    return newOrder;
}

const completeOrder = (orderID : number) : Order | undefined => {
    const order = orderQueue.find(order => order.id === orderID);
    if(!order){
        return;
    }
    order.status = "completed"
    return order
}
addNewPizza({id:5 , name:"Chicken Bacon Banch" , price:12})
addNewPizza({id:6 , name:"BBQ Chicken" , price:12})
addNewPizza({id:7 , name:"Spicy Sausage" , price:11})
placeOrder("Chicken Bacon Banch")
completeOrder(1)
console.log("Menu:",menu);
console.log("Cash in register:",cashInRegister);
console.log("Order queue:" , orderQueue);
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
// const users : User [] = [
//     {id : 1, username :"Dhahri", role :"admin"},
//     {id : 2, username :"ada Dhahri", role :"member"},
//     {id : 3, username :"Amiazdazr Dhahri", role :"contributer"},
//     {id : 4, username :"Amirazdazdaz Dhahri", role :"member"},
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