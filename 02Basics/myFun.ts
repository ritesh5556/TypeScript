function addTwo(num : number){

    return num + 2;
}

function getUpper(val : string){
    return val.toUpperCase()
}

function signUpUser(name:string , email : string, isPaid : boolean = false){

}

//default parameter
let signUP = (name : string, email: string, isPaid: boolean = false) =>{}



addTwo(5)
getUpper("ritesh")
signUpUser("ritesh", "ritesh@gmail.com",false )
signUP("r", "r@r.com")





//-----------------------------------------------------------------

// agar aapko function ka return type fix karno h to aapko
//explicitly functionka return type mention karna padega

function myFun(val : number): number{
    return val + 2;

    //this line produces error string cannot be assigned to type number
    // return "ritesh"
}

let heros = ["thor", "spiderman", "ironman"]
// let heros = [1, 2, 3]

// type of the hero inside callback function changes according to
// the type of the array
// also you can still specify the return type of the callback function
heros.map((hero) : string => {
    // return 2
    return `hero is ${hero}`
})


// agar aapka function koi value return nahi kar raha
// to for handling missunderstanding you can mention type as void explicetly

function consoleError(errmsg: string) : void{
    console.log(errmsg)

    //this line gives error that cannot return the value in void type
    // return 23
}

// ** Function that never return value
// never is type of the function
function fail(msg : string): never{
    throw new Error(msg)

    // gives error 2 cannot assign to never
    // return 2
}


function createUser({name : string, isPaid : boolean}){

}

function createCourse() : {name : string, price: number}{
    return {name: "reactjs", price : 300}
}

// this line can create problem that is function accepts only 2 arguments
// but we have passed 3 and also this is not giving any error
let newUser= {name : "ritesh", isPaid : false, role : "admin"}
createUser(newUser)












export {}

