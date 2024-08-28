
// You can specify that your score can be string or the number
// not other than that
let score : string | number 

score = 22
score = "ritesh"




// You can apply the same thing on the your won type also

type User2 = {
    name : string;
    id : number
}

type Admin = {
    username : string;
    id : number
}

let ritesh : User2 | Admin = {name : "ritesh", id : 334};

ritesh = {username: "rs", id: 334}


function getDbId(id : string | number){
    if(typeof id === "string"){
        id.toLowerCase()
    }
    else{
        id + 2
    }
    
}

getDbId(3)
getDbId("3")


// array

const data : number[] = [1, 2, 3, 4];
const data2 : string[] = ["r", "s", "t"]

// in below data2 you can add all strings or all numbers but not both
const data3 : string[] | number[] = ["1", "2", "3"]

// to add both string and number in a single array you have to use below syntx
const dataw3 : (string | number | boolean)[] = [1,2, 3, "4", true]


// Agar aapko variable ko fix value assign karni h

let pi: 3.14 = 3.14

// if you are going to change the value it will give error
// pi =  3.15

/// Actual use case
// Agar aapke aeroplane m only 3 type ke seats h

let seatAllotment : "asile" | "middle" | "window"

seatAllotment = "asile"

// you cannot allot seat other than the above 3 seats
// seatAllotment = "crew