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
let nextPizza = 1;
const menu : Pizza [] =  [{id:nextPizza++ , name:"Margherita" , price:8},
                          {id:nextPizza++ , name:"Pepperoni" , price:10},
                          {id:nextPizza++ , name:"Hawaiian" , price:10},
                          {id:nextPizza++, name:"Veggie" , price:9}]

let cashInRegister : number = 100
let nextOrderId : number = 1;
const orderQueue : Order[] = []

const addNewPizza = (pizza : Omit<Pizza,"id">) => {
    const newPizza = {
        id :nextPizza++,
        ...pizza
    }
    menu.push(newPizza)
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
addNewPizza({name:"Chicken Bacon Banch" , price:12})
addNewPizza({name:"BBQ Chicken" , price:12})
addNewPizza({name:"Spicy Sausage" , price:11})
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
const gameScore = [14,21,33,42,59]
const favoriteThings = ["raindrops on roses" , "whiskers on kittens" , "bright copper kettles" , "warm woolen mittens"]
const voters = [{name:"Alice" , age:21} , {name:"Amir" , age:21}]
const getLastItem = <T>(array : T[]) => {
    return array[array.length - 1]
}
console.log(getLastItem(gameScore));
console.log(getLastItem(favoriteThings));
console.log(getLastItem(voters));
