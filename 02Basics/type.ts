// You can create your own type in typescript like other
// types like string or number

type User = {
    name : string;
    email : string;
    isActive: boolean
}

function createUser(user : User): User{
    return {name : "", email : "", isActive : true}
}


createUser({name : "", email : "", isActive : true})