
// Agar aap readonly ka use karte ho to aap further use change nahi 
// kr sakte it will throw error

// agar aapko koi chij optional chahiye to aap ? is sign ka use kr sakte ho


type User1 = {
    readonly _id : string
    name : string;
    email : string;
    isActive : boolean
    creditCard ?: string
}

// myUser create krte samay aap credit card detail fill kr sakte ho
// ya nahi bhi kr sakte
let myUser : User1 = {
    _id : "12345",
    name: "ritesh",
    email : "r@r.com",
    isActive : true
}

myUser.name = "shubham"
// myUser._id = "234"


type cardNumber = {
    cardnum : string
}

type cardDate = {
    carddate : string
}

// you can create another type using other type and can also add
// further more feilds
type cardDetails = cardNumber & cardDate & {
    cvv : number
}