// Agar aap readonly ka use karte ho to aap further use change nahi 
// kr sakte it will throw error
// myUser create krte samay aap credit card detail fill kr sakte ho
// ya nahi bhi kr sakte
var myUser = {
    _id: "12345",
    name: "ritesh",
    email: "r@r.com",
    isActive: true
};
myUser.name = "shubham";
// myUser._id = "234"
